let currentRotation = 0;
let activeMolecule = null;

function isAlcohol(name) {
    if (!name) return false;
    return /ol\b|diol\b|triol\b|\bhydroxy|\bglycerol|\bglyc/.test(name.toLowerCase().trim());
}

// Procedural fallback: builds rotation states for any alcohol not in moleculeData.
// Parses the name to extract substituents; falls back to "R" if unparseable.
function getDynamicConformation(name) {
    if (!isAlcohol(name)) return null;
    if (name.includes('cyclohexan')) return null;

    const n = name.toLowerCase().trim();

    // Map of name patterns → back group label
    const chainMap = {
        'methanol': 'H', 'ethanol': 'H',
        'propan-1-ol': 'CH3', 'propan-2-ol': 'CH3',
        'butan-1-ol': 'CH2CH3', 'butan-2-ol': 'CH3',
        'pentan-1-ol': 'CH2CH2CH3', 'pentan-2-ol': 'CH2CH2CH3', 'pentan-3-ol': 'CH2CH3',
        'hexan-1-ol': '(CH2)3CH3', 'hexan-2-ol': '(CH2)2CH3', 'hexan-3-ol': 'CH2CH3',
        'heptan-1-ol': '(CH2)4CH3', 'octan-1-ol': '(CH2)5CH3',
        'nonan-1-ol': '(CH2)6CH3', 'decan-1-ol': '(CH2)7CH3',
        'undecan-1-ol': '(CH2)8CH3', 'dodecan-1-ol': '(CH2)9CH3',
    };

    const haloMap = {
        'fluoro': 'F', 'chloro': 'Cl', 'bromo': 'Br', 'iodo': 'I',
        'amino': 'NH2', 'methylamino': 'NHCH3', 'dimethylamino': 'N(CH3)2',
        'mercapto': 'SH', 'methoxy': 'OCH3', 'ethoxy': 'OC2H5',
        'nitro': 'NO2', 'cyano': 'CN', 'phenyl': 'C6H5',
        'trifluoromethyl': 'CF3', 'acetyl': 'COCH3', 'formyl': 'CHO',
    };

    let backGroup = 'R';
    let frontGroup = 'OH';

    if (chainMap[n]) {
        backGroup = chainMap[n];
    } else {
        // Try to extract substituent from "2-Xethanol" or "2-Xpropan-1-ol" patterns
        const match2 = n.match(/^2-([a-z]+)ethanol$/);
        const match3 = n.match(/^3-([a-z]+)propan-1-ol$/);
        const match4 = n.match(/^4-([a-z]+)butan-1-ol$/);
        const matchedGroup = (match2 || match3 || match4);
        if (matchedGroup) {
            backGroup = haloMap[matchedGroup[1]] || matchedGroup[1].toUpperCase();
        } else if (n.includes('diol') || n.includes('glycol')) {
            backGroup = 'OH';
        } else if (n.includes('phenyl') || n.includes('benzyl')) {
            backGroup = 'C6H5';
        }
    }

    const isGaucheEffect = (backGroup === 'OH' || backGroup === 'F' || backGroup === 'CF3' || backGroup === 'CHF2');

    const buildState = (rotation) => {
        const energyTable = isGaucheEffect
            ? {0: 0.5, 60: 3.2, 120: 0.0, 180: 5.5, 240: 0.0, 300: 3.2}
            : {0: 0.0, 60: 3.0, 120: 1.0, 180: 5.5, 240: 1.0, 300: 3.0};

        if (rotation === 0) return {
            name: isGaucheEffect ? "Staggered, Anti" : "Staggered, Anti",
            cssClass: isGaucheEffect ? "stable" : "most-stable",
            type: isGaucheEffect ? "Stable (Local Minimum)" : "Most Stable",
            desc: `The ${frontGroup} and ${backGroup} groups are 180° apart. ${isGaucheEffect ? "A local minimum; lacks the stabilizing gauche H-bond." : "Minimizes steric strain and dipole interactions."}`,
            kcal: energyTable[0]
        };
        if (rotation === 60 || rotation === 300) return {
            name: "Eclipsed",
            cssClass: "unstable", type: "High Energy",
            desc: rotation === 60
                ? `The ${frontGroup} group eclipses an H atom. High torsional strain.`
                : `The ${backGroup} group eclipses an H atom. High torsional strain.`,
            kcal: energyTable[rotation]
        };
        if (rotation === 120 || rotation === 240) return {
            name: "Staggered, Gauche",
            cssClass: isGaucheEffect ? "most-stable" : "stable",
            type: isGaucheEffect ? "Most Stable (Gauche Effect)" : "Stable (Local Minimum)",
            desc: isGaucheEffect
                ? `The ${frontGroup} and ${backGroup} groups are 60° apart. Global minimum due to intramolecular H-bonding.`
                : `The ${frontGroup} and ${backGroup} groups are 60° apart. Stable, but possesses gauche interaction strain.`,
            kcal: energyTable[rotation]
        };
        return {
            name: "Fully Eclipsed",
            cssClass: "unstable", type: "Least Stable",
            desc: `The ${frontGroup} and ${backGroup} groups directly eclipse each other. Maximum steric repulsion.`,
            kcal: energyTable[180]
        };
    };

    return {
        bond: "C1-C2 (Alcohol)",
        groups: { f_top: frontGroup, f_right: "H", f_left: "H", b_top: backGroup, b_right: "H", b_left: "H" },
        states: { 0: buildState(0), 60: buildState(60), 120: buildState(120), 180: buildState(180), 240: buildState(240), 300: buildState(300) }
    };
}

function initializeMolecule() {
    const searched = sessionStorage.getItem('searchedMolecule');

    if (!searched) {
        alert("No molecule selected. Please search for an alcohol on the main page first.");
        window.location.href = "index.html";
        return;
    }

    if (!isAlcohol(searched) || searched.includes('cyclohexan')) {
        sessionStorage.removeItem('searchedMolecule');
        alert(`"${searched}" is not supported by the 2D Conformation Rotator.\n\nThis tool is for open-chain alcohols only. Cyclic alcohols like cyclohexanol use the Chair Flip tool instead.`);
        window.location.href = "index.html";
        return;
    }

    let data = moleculeData[searched] || getDynamicConformation(searched);

    if (!data) {
        sessionStorage.removeItem('searchedMolecule');
        alert(`2D rotation data could not be generated for "${searched}".`);
        window.location.href = "index.html";
        return;
    }

    // Inject dynamic data into moleculeData so updatePanel() can find it
    if (!moleculeData[searched]) moleculeData[searched] = data;

    activeMolecule = searched;
    document.getElementById('page-title').textContent = `2D Rotation: ${activeMolecule}`;
    document.getElementById('page-desc').textContent = `Sawhorse projection along the C1–C2 bond of ${activeMolecule}.`;

    const groups = moleculeData[activeMolecule].groups;
    document.getElementById('f-top-text').textContent = groups.f_top;
    document.getElementById('f-left-text').textContent = groups.f_left;
    document.getElementById('f-right-text').textContent = groups.f_right;
    document.getElementById('b-top-text').textContent = groups.b_top;
    document.getElementById('b-left-text').textContent = groups.b_left;
    document.getElementById('b-right-text').textContent = groups.b_right;
}

function rotateMolecule() {
    currentRotation = (currentRotation + 60) % 360;
    updateSVG();
    updatePanel();
}

function updateSVG() {
    const radius = 70;
    const textOffset = 20;
    const cx = 150;
    const cy = 250;

    const radTop   = (90  + currentRotation) * Math.PI / 180;
    const radLeft  = (210 + currentRotation) * Math.PI / 180;
    const radRight = (330 + currentRotation) * Math.PI / 180;

    function setLine(id, angle) {
        document.getElementById(id).setAttribute('x2', cx + radius * Math.cos(angle));
        document.getElementById(id).setAttribute('y2', cy + radius * Math.sin(angle));
    }

    function setText(id, angle) {
        document.getElementById(id).setAttribute('x', cx + (radius + textOffset) * Math.cos(angle));
        document.getElementById(id).setAttribute('y', cy + (radius + textOffset) * Math.sin(angle) + 5);
    }

    setLine('f-top-line',   radTop);    setText('f-top-text',   radTop);
    setLine('f-left-line',  radLeft);   setText('f-left-text',  radLeft);
    setLine('f-right-line', radRight);  setText('f-right-text', radRight);
}

function updatePanel() {
    const state = moleculeData[activeMolecule].states[currentRotation];
    const badge = document.getElementById('conf-stability');

    document.getElementById('conf-name').textContent = state.name;
    document.getElementById('conf-desc').textContent = state.desc;
    document.getElementById('conf-angle').textContent = currentRotation + "°";

    badge.textContent = state.type;
    badge.className = "badge " + state.cssClass;

    const energyEl = document.getElementById('conf-energy');
    if (energyEl) energyEl.textContent = `Relative Energy: ${state.kcal.toFixed(1)} kcal/mol`;
}

window.onload = () => {
    initializeMolecule();
    if (activeMolecule && moleculeData[activeMolecule]) {
        updateSVG();
        updatePanel();
    }
};