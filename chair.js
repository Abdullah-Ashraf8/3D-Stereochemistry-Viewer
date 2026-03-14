let isFlipped = false;
let activeCyclic = "cyclohexanol";

// A-value (axial preference penalty, kcal/mol):
//   OH:   0.87   CH3:  1.74   t-Bu: 5.90   Cl:  0.53   F:   0.15
// Energy of a state = sum of A-values of all axial substituents.
// The most stable state is set to 0.0 (reference); the less stable state
// carries its penalty relative to that minimum.

const cyclicData = {

    // --- 1. MONO-SUBSTITUTED CYCLOHEXANOLS ---
    "cyclohexanol": {
        isomer: "Mono-substituted", targetPos: 1,
        state1: { name: "Axial", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H",
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 0.87,
            desc: "OH is axial. 1,3-diaxial repulsion with ring H atoms (+0.87 kcal/mol penalty)." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H", cx_e: "H",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "OH is equatorial. No diaxial strain; lowest energy conformation." }
    },

    // --- 2. CYCLOHEXANEDIOLS (trans/cis 1,2 | 1,3 | 1,4) ---
    "trans-1,2-cyclohexanediol": {
        isomer: "Trans-1,2-diol", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 1.74,
            desc: "Both OH groups axial. Total 1,3-diaxial penalty: 2 × 0.87 = +1.74 kcal/mol." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH groups equatorial. Permits intermolecular H-bonding; no diaxial strain." }
    },
    "cis-1,2-cyclohexanediol": {
        isomer: "Cis-1,2-diol", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "One OH axial, one equatorial. Penalty: +0.87 kcal/mol. Ring flip gives the identical mirror state." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "Mirrored (a,e) state. Penalty: +0.87 kcal/mol. Both conformers are energetically identical." }
    },
    "trans-1,3-cyclohexanediol": {
        isomer: "Trans-1,3-diol", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "OH (Down)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "One OH axial, one equatorial. Penalty: +0.87 kcal/mol. Ring flip gives the identical state." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Up)", cx_e: "H (Down)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "Mirrored state. Penalty: +0.87 kcal/mol. Energetically identical to first conformation." }
    },
    "cis-1,3-cyclohexanediol": {
        isomer: "Cis-1,3-diol", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Up)", cx_e: "OH (Down)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH groups equatorial; the global minimum. No diaxial strain." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Up)", cx_e: "H (Down)",
            stabilityClass: "unstable", stabilityText: "Least Stable",
            kcalEnergy: 1.74,
            desc: "Both OH groups forced axial after flip. Penalty: 2 × 0.87 = +1.74 kcal/mol." }
    },
    "trans-1,4-cyclohexanediol": {
        isomer: "Trans-1,4-diol", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH groups equatorial; the global minimum. No diaxial strain." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Least Stable",
            kcalEnergy: 1.74,
            desc: "Both OH groups forced axial after flip. Penalty: 2 × 0.87 = +1.74 kcal/mol." }
    },
    "cis-1,4-cyclohexanediol": {
        isomer: "Cis-1,4-diol", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "One OH axial, one equatorial. Penalty: +0.87 kcal/mol." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "stable", stabilityText: "Equally Stable",
            kcalEnergy: 0.87,
            desc: "Mirrored (a,e) state. Penalty: +0.87 kcal/mol. Energetically identical." }
    },

    // --- 3. METHYL + HYDROXYL COMBINATIONS ---
    // OH A-value: 0.87 | CH3 A-value: 1.74
    "trans-1-methyl-2-cyclohexanol": {
        isomer: "Trans-1,2 (Me + OH)", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "Me (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Least Stable",
            kcalEnergy: 2.61,
            desc: "Both OH and CH3 are axial. Total penalty: 0.87 + 1.74 = +2.61 kcal/mol." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "Me (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH and CH3 equatorial; no diaxial strain." }
    },
    "cis-1-methyl-2-cyclohexanol": {
        isomer: "Cis-1,2 (Me + OH)", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Me (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "OH axial, CH3 equatorial. Penalty: +0.87 kcal/mol. Preferred because CH3 (A=1.74) is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "Me (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 1.74,
            desc: "OH equatorial, CH3 axial. Penalty: +1.74 kcal/mol. CH3 A-value is larger." }
    },
    "trans-1-methyl-3-cyclohexanol": {
        isomer: "Trans-1,3 (Me + OH)", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "Me (Down)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "OH axial, CH3 equatorial. Penalty: +0.87 kcal/mol. CH3 takes equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "Me (Up)", cx_e: "H (Down)",
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 1.74,
            desc: "OH equatorial, CH3 axial. Penalty: +1.74 kcal/mol." }
    },
    "cis-1-methyl-3-cyclohexanol": {
        isomer: "Cis-1,3 (Me + OH)", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Up)", cx_e: "Me (Down)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH and CH3 equatorial; the global minimum with no diaxial strain." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "Me (Up)", cx_e: "H (Down)",
            stabilityClass: "unstable", stabilityText: "Least Stable",
            kcalEnergy: 2.61,
            desc: "Both axial after flip. Total penalty: 0.87 + 1.74 = +2.61 kcal/mol." }
    },
    "trans-1-methyl-4-cyclohexanol": {
        isomer: "Trans-1,4 (Me + OH)", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "Me (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both OH and CH3 equatorial; the global minimum." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "Me (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Least Stable",
            kcalEnergy: 2.61,
            desc: "Both axial after flip. Total penalty: 0.87 + 1.74 = +2.61 kcal/mol." }
    },
    "cis-1-methyl-4-cyclohexanol": {
        isomer: "Cis-1,4 (Me + OH)", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Me (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "OH axial, CH3 equatorial. Penalty: +0.87 kcal/mol. CH3 (larger A-value) takes equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "Me (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 1.74,
            desc: "OH equatorial, CH3 axial. Penalty: +1.74 kcal/mol." }
    },

    // --- 4. T-BUTYL + HYDROXYL (LOCKED CONFORMATIONS) ---
    // t-Bu A-value: 5.90 | OH A-value: 0.87
    "trans-1-tert-butyl-2-cyclohexanol": {
        isomer: "Trans-1,2 (Locked)", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 6.77,
            desc: "Both t-Bu and OH axial. Penalty: 5.90 + 0.87 = +6.77 kcal/mol. Near-impossible state." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both equatorial; t-Bu locks this ring. The conformation is essentially fixed." }
    },
    "cis-1-tert-butyl-2-cyclohexanol": {
        isomer: "Cis-1,2 (Locked)", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 5.90,
            desc: "t-Bu axial, OH equatorial. Penalty: +5.90 kcal/mol. t-Bu strongly demands equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "t-Bu equatorial (locked), OH axial. Penalty: +0.87 kcal/mol. Ring is locked by t-Bu." }
    },
    "trans-1-tert-butyl-3-cyclohexanol": {
        isomer: "Trans-1,3 (Locked)", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "OH (Down)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 5.90,
            desc: "t-Bu axial, OH equatorial. Penalty: +5.90 kcal/mol." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "OH (Up)", cx_e: "H (Down)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "t-Bu equatorial (locked), OH axial. Penalty: +0.87 kcal/mol." }
    },
    "cis-1-tert-butyl-3-cyclohexanol": {
        isomer: "Cis-1,3 (Locked)", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Up)", cx_e: "OH (Down)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both equatorial; t-Bu locks this as the dominant conformation." },
        state2: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "OH (Up)", cx_e: "H (Down)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 6.77,
            desc: "Both t-Bu and OH axial. Penalty: 5.90 + 0.87 = +6.77 kcal/mol." }
    },
    "trans-1-tert-butyl-4-cyclohexanol": {
        isomer: "Trans-1,4 (Locked)", targetPos: 4,
        state1: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 6.77,
            desc: "Both t-Bu and OH axial. Penalty: 5.90 + 0.87 = +6.77 kcal/mol." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: "Both equatorial; t-Bu locks the ring into this conformation." }
    },
    "cis-1-tert-butyl-4-cyclohexanol": {
        isomer: "Cis-1,4 (Locked)", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)",
            stabilityClass: "unstable", stabilityText: "Extremely Unstable",
            kcalEnergy: 5.90,
            desc: "t-Bu axial, OH equatorial. Penalty: +5.90 kcal/mol." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "OH (Down)", cx_e: "H (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.87,
            desc: "t-Bu equatorial (locked), OH axial. Penalty: +0.87 kcal/mol." }
    }
};

// Map "1-cyclohexanol" alias to "cyclohexanol"
cyclicData["1-cyclohexanol"] = cyclicData["cyclohexanol"];

// Smart alias: map "methylcyclohexanol" variants to their standard names
const methylolAliases = [
    ["trans-2-methylcyclohexanol", "trans-1-methyl-2-cyclohexanol"],
    ["cis-2-methylcyclohexanol",   "cis-1-methyl-2-cyclohexanol"],
    ["trans-3-methylcyclohexanol", "trans-1-methyl-3-cyclohexanol"],
    ["cis-3-methylcyclohexanol",   "cis-1-methyl-3-cyclohexanol"],
    ["trans-4-methylcyclohexanol", "trans-1-methyl-4-cyclohexanol"],
    ["cis-4-methylcyclohexanol",   "cis-1-methyl-4-cyclohexanol"],
];
methylolAliases.forEach(([alias, canonical]) => {
    cyclicData[alias] = cyclicData[canonical];
});

// --- PROCEDURAL GENERATION ENGINE FOR CYCLIC ALCOHOLS ---
// Generates a chair flip entry for any substituted cyclohexanol not in cyclicData.
// Energy is estimated using the OH A-value (0.87 kcal/mol) only.
function getDynamicChair(name) {
    if (!name) return null;
    if (!name.includes('ol') && !name.includes('hydroxy')) return null;
    if (!name.includes('cyclohexan')) return null;

    let substituent = name
        .replace('cyclohexanol', '')
        .replace('cyclohexan-1-ol', '')
        .replace(/[0-9,\-]/g, '')
        .trim();

    if (substituent === "" || substituent === "cis" || substituent === "trans") {
        substituent = "R-Group";
    } else {
        substituent = substituent.charAt(0).toUpperCase() + substituent.slice(1);
    }

    return {
        isomer: `Substituted Cyclohexanol`,
        targetPos: 2,
        state1: {
            name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)",
            cx_a: "H (Down)", cx_e: `${substituent} (Up)`,
            stabilityClass: "unstable", stabilityText: "Less Stable",
            kcalEnergy: 0.87,
            desc: `OH is axial; 1,3-diaxial penalty: +0.87 kcal/mol.`
        },
        state2: {
            name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)",
            cx_a: `${substituent} (Down)`, cx_e: "H (Up)",
            stabilityClass: "most-stable", stabilityText: "Most Stable",
            kcalEnergy: 0.0,
            desc: `OH is equatorial; the lowest energy conformation.`
        }
    };
}

function isAlcohol(name) {
    if (!name) return false;
    return /ol\b|diol\b|triol\b|\bhydroxy/.test(name.toLowerCase());
}

function initializeChair() {
    const searched = localStorage.getItem('searchedMolecule');

    if (!searched) {
        alert("No molecule found in session. Please search for an alcohol on the main page first.");
        window.location.href = "index.html";
        return;
    }

    if (!isAlcohol(searched)) {
        alert(`"${searched}" is not an alcohol.\n\nThe Chair Flip tool is restricted to cyclic alcohols (e.g., cyclohexanol, trans-1,2-cyclohexanediol). Please search for a cyclic alcohol on the main page.`);
        window.location.href = "index.html?loadlast=true";
        return;
    }

    if (!searched.includes('cyclohexan')) {
        alert(`"${searched}" is not a cyclohexane derivative.\n\nChair flip analysis only applies to cyclohexane rings. Please search for a cyclohexanol compound.`);
        window.location.href = "index.html?loadlast=true";
        return;
    }

    let data = cyclicData[searched] || getDynamicChair(searched);

    if (!data) {
        alert(`Chair flip data is not available for "${searched}".\n\nTry: cyclohexanol, trans-1,2-cyclohexanediol, cis-1,3-cyclohexanediol, trans-4-methylcyclohexanol, or trans-1-tert-butyl-4-cyclohexanol.`);
        window.location.href = "index.html?loadlast=true";
        return;
    }

    if (!cyclicData[searched]) cyclicData[searched] = data;
    activeCyclic = searched;

    document.getElementById('page-title').textContent = `Chair Flip: ${activeCyclic}`;
    updateUI();
}

function triggerFlip() {
    isFlipped = !isFlipped;
    updateUI();
}

function updateUI() {
    const data = cyclicData[activeCyclic];
    const currentState = isFlipped ? data.state2 : data.state1;
    const target = data.targetPos;

    function splitInfo(dataString) {
        if (!dataString) return { type: "", dir: "" };
        const match = dataString.match(/(.*?)\s*(\(.*?\))/);
        if (match) return { type: match[1].trim(), dir: match[2].trim() };
        return { type: dataString, dir: "" };
    }

    function getLabels() {
        return isFlipped ? { a: 'e', e: 'a' } : { a: 'a', e: 'e' };
    }

    for (let i = 1; i <= 6; i++) {
        document.getElementById(`pos-${i}`).style.display = 'none';
    }

    document.getElementById('pos-1').style.display = 'block';
    document.getElementById(`pos-${target}`).style.display = 'block';

    const c1a = splitInfo(currentState.c1_a);
    const c1e = splitInfo(currentState.c1_e);
    const cxa = splitInfo(currentState.cx_a);
    const cxe = splitInfo(currentState.cx_e);

    const l1 = getLabels();
    const lx = getLabels();

    document.getElementById('t1-a-text').textContent = `${l1.a}-${c1a.type} ${c1a.dir}`;
    document.getElementById('t1-e-text').textContent = `${l1.e}-${c1e.type} ${c1e.dir}`;
    document.getElementById(`t${target}-a-text`).textContent = `${lx.a}-${cxa.type} ${cxa.dir}`;
    document.getElementById(`t${target}-e-text`).textContent = `${lx.e}-${cxe.type} ${cxe.dir}`;

    document.getElementById('isomer-name').textContent = `${data.isomer}: ${currentState.name}`;
    document.getElementById('flip-state').textContent = isFlipped ? "Flipped Chair (Labels Swapped)" : "Standard Chair";
    document.getElementById('conf-desc').textContent = currentState.desc;

    const badge = document.getElementById('conf-stability');
    badge.textContent = currentState.stabilityText;
    badge.className = "badge " + currentState.stabilityClass;

    const energyEl = document.getElementById('chair-energy');
    if (energyEl) {
        energyEl.textContent = `Relative Energy: ${currentState.kcalEnergy.toFixed(2)} kcal/mol`;
    }
}

window.onload = initializeChair;