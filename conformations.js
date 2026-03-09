let currentRotation = 0;


let activeMolecule = "butane"; // Default fallback

function initializeMolecule() {
    const searched = localStorage.getItem('searchedMolecule');
    
    if (searched && moleculeData[searched]) {
        activeMolecule = searched;
        document.getElementById('page-title').textContent = `2D Rotation: ${searched.charAt(0).toUpperCase() + searched.slice(1)}`;
        document.getElementById('page-desc').textContent = `Simulate rotation around the ${moleculeData[activeMolecule].bond} bond.`;
    } else {
        alert(`Detailed 2D rotation analysis is not supported for "${searched || 'this compound'}". Defaulting to Butane showcase.`);
        activeMolecule = "butane";
    }

    const groups = moleculeData[activeMolecule].groups;
    
    // Safely apply text to the SVG using textContent
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

    let radTop = (90 + currentRotation) * Math.PI / 180;
    let radLeft = (210 + currentRotation) * Math.PI / 180;
    let radRight = (330 + currentRotation) * Math.PI / 180;

    function setLine(id, angle) {
        document.getElementById(id).setAttribute('x2', cx + radius * Math.cos(angle));
        document.getElementById(id).setAttribute('y2', cy + radius * Math.sin(angle));
    }

    function setText(id, angle) {
        document.getElementById(id).setAttribute('x', cx + (radius + textOffset) * Math.cos(angle));
        document.getElementById(id).setAttribute('y', cy + (radius + textOffset) * Math.sin(angle) + 5);
    }

    setLine('f-top-line', radTop);   setText('f-top-text', radTop);
    setLine('f-left-line', radLeft); setText('f-left-text', radLeft);
    setLine('f-right-line', radRight); setText('f-right-text', radRight);
}

function updatePanel() {
    const state = moleculeData[activeMolecule].states[currentRotation];
    const badge = document.getElementById('conf-stability');
    
    document.getElementById('conf-name').textContent = state.name;
    document.getElementById('conf-desc').textContent = state.desc;
    document.getElementById('conf-angle').textContent = currentRotation + "°";
    
    badge.textContent = state.type;
    badge.className = "badge " + state.cssClass;
}

window.onload = () => {
    initializeMolecule();
    updateSVG();
    updatePanel();
};