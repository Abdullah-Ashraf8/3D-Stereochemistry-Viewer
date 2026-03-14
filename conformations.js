let currentRotation = 0;
let activeMolecule = "propan-1-ol";

function isAlcohol(name) {
    if (!name) return false;
    const n = name.toLowerCase().trim();
    return /ol\b|diol\b|triol\b|\bhydroxy|\bglycerol|\bglyc/.test(n);
}

function initializeMolecule() {
    const searched = sessionStorage.getItem('searchedMolecule');

    if (!searched) {
        alert("No molecule selected. Please search for an alcohol on the main page first.");
        window.location.href = "index.html";
        return;
    }

    if (!isAlcohol(searched)) {
        showError(`"${searched}" is not an alcohol. The 2D Conformation Rotator only supports the alcohol family.`);
        return;
    }

    if (!moleculeData[searched]) {
        showError(`Detailed 2D rotation data is not available for "${searched}".\n\nThis tool supports simple-chain alcohols. Try: propan-1-ol, butan-1-ol, ethane-1,2-diol, or 2-phenylethanol.`);
        return;
    }

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

function showError(message) {
    alert(message);
    window.location.href = "index.html?loadlast=true";
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
    if (energyEl) {
        energyEl.textContent = `Relative Energy: ${state.kcal.toFixed(1)} kcal/mol`;
    }
}

window.onload = () => {
    initializeMolecule();
    if (activeMolecule && moleculeData[activeMolecule]) {
        updateSVG();
        updatePanel();
    }
};