let isFlipped = false;
let activeCyclic = "trans-1,2-dimethylcyclohexane"; // Default showcase

// === LOCAL DATABASE FOR CYCLIC COMPOUNDS ===
const cyclicData = {
    "cyclohexane": {
        isomer: "Generic Cyclohexane",
        targetPos: 1, // Only C1, using it as generic
        state1: {
            name: "Generic Chair",
            c1_a: "H (Up)", c1_e: "H (Down)",
            cx_a: "H (Up)", cx_e: "H (Down)",
            stabilityClass: "stable",
            stabilityText: "Equally Stable",
            desc: "Standard chair conformation. No steric or torsional strain."
        },
        state2: { // Flipped
            name: "Flipped Generic Chair",
            c1_a: "H (Down)", c1_e: "H (Up)",
            cx_a: "H (Down)", cx_e: "H (Up)",
            stabilityClass: "stable",
            stabilityText: "Equally Stable",
            desc: "The ring flip changes a <-> e but the overall energy state is identical."
        }
    },
    // Generic Dimethyl entries show the STABLE isomer by default
    "1,2-dimethylcyclohexane": {
        isomer: "Generic 1,2 Isomer (Showing Stable)",
        targetPos: 2,
        state1: { // Stable Trans (e,e)
            name: "(e,e) - trans",
            c1_a: "H (Up)", c1_e: "CH3 (Down)",
            cx_a: "H (Down)", cx_e: "CH3 (Up)",
            stabilityClass: "most-stable",
            stabilityText: "Most Stable (0.9 kcal/mol)",
            desc: "Places both bulky CH3 groups equatorial. This is the lowest energy generic form."
        },
        state2: { // Less Stable Cis (a,e)
            name: "(a,e) - cis",
            c1_a: "CH3 (Up)", c1_e: "H (Down)",
            cx_a: "H (Down)", cx_e: "CH3 (Up)",
            stabilityClass: "stable",
            stabilityText: "Stable (2.7 kcal/mol)",
            desc: "One group is axial, one equatorial. Flipped cis forms are identical in energy (a,e <-> e,a)."
        }
    },
    "1,3-dimethylcyclohexane": {
        isomer: "Generic 1,3 Isomer (Showing Stable)",
        targetPos: 3,
        state1: { // Stable Cis (e,e)
            name: "(e,e) - cis",
            c1_a: "H (Up)", c1_e: "CH3 (Down)",
            cx_a: "H (Up)", cx_e: "CH3 (Down)",
            stabilityClass: "most-stable",
            stabilityText: "Most Stable (0 kcal/mol)",
            desc: "Places both bulky CH3 groups equatorial. No steric strain."
        },
        state2: { // Unstable Trans (a,e)
            name: "(a,e) - trans",
            c1_a: "CH3 (Up)", c1_e: "H (Down)",
            cx_a: "H (Up)", cx_e: "CH3 (Down)",
            stabilityClass: "stable",
            stabilityText: "Stable Isomer",
            desc: "Generic representation of the less stable isomer (a,e)."
        }
    },
    "1,4-dimethylcyclohexane": {
        isomer: "Generic 1,4 Isomer (Showing Stable)",
        targetPos: 4,
        state1: { // Stable Trans (e,e)
            name: "(e,e) - trans",
            c1_a: "H (Up)", c1_e: "CH3 (Down)",
            cx_a: "H (Down)", cx_e: "CH3 (Up)",
            stabilityClass: "most-stable",
            stabilityText: "Most Stable",
            desc: "Places both bulky CH3 groups equatorial on opposite sides of the ring."
        },
        state2: { // Unstable Cis (a,e)
            name: "(a,e) - cis",
            c1_a: "CH3 (Up)", c1_e: "H (Down)",
            cx_a: "H (Down)", cx_e: "CH3 (Up)",
            stabilityClass: "stable",
            stabilityText: "Stable Isomer",
            desc: "Generic representation of the cis (a,e) isomer."
        }
    },
    // Specific Isomers (As mapped previously)
    "trans-1,2-dimethylcyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable (3.6 kcal/mol)", desc: "Sufferes severe diaxial interactions." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (0.9 kcal/mol)", desc: "Groups are equatorial." }
    },
    "cis-1,2-dimethylcyclohexane": {
        isomer: "Cis-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "stable", stabilityText: "Stable (2.7 kcal/mol)", desc: "One a, one e. Standard energy." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Stable (2.7 kcal/mol)", desc: "Groups swapped, energy identical." }
    },
    "cis-1,3-dimethylcyclohexane": {
        isomer: "Cis-1,3 Isomer", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable (0 kcal/mol)", desc: "Highly stable, e,e conformation." },
        state2: { name: "(a,a)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Least Stable (5.4 kcal/mol)", desc: "Groups are forced axial." }
    },
    "trans-1,3-dimethylcyclohexane": {
        isomer: "Trans-1,3 Isomer", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One a, one e. Both forms identical." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy state identical." }
    },
    "trans-1,4-dimethylcyclohexane": {
        isomer: "Trans-1,4 Isomer", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both groups can be equatorial." },
        state2: { name: "(a,a)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Groups are forced axial." }
    },
    "cis-1,4-dimethylcyclohexane": {
        isomer: "Cis-1,4 Isomer", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One a, one e. Standard energy." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy state identical." }
    }
};

function initializeChair() {
    const searched = localStorage.getItem('searchedMolecule');
    
    if (searched && cyclicData[searched]) {
        activeCyclic = searched;
    } else if (searched && searched.includes("cyclohexane")) {
        alert(`Detailed chair analysis is not explicitly mapped for "${searched}". Defaulting to Trans-1,2-dimethylcyclohexane showcase.`);
    }

    document.getElementById('page-title').textContent = `Chair Flip: ${activeCyclic}`;
    updateUI();
}

function triggerFlip() {
    isFlipped = !isFlipped;
    updateUI();
    
    const ring = document.getElementById('chair-ring');
    const slant1 = "M 150 100 L 70 200 L 150 300 L 350 300 L 430 200 L 350 100 Z"; // Original Slant (C1-a-Up)
    const slant2 = "M 150 300 L 70 200 L 150 100 L 350 100 L 430 200 L 350 300 Z"; // Flipped Slant (C1-a-Down)

    if (isFlipped) {
        ring.setAttribute('d', slant2);
    } else {
        ring.setAttribute('d', slant1);
    }
}

function updateUI() {
    const data = cyclicData[activeCyclic];
    const currentState = isFlipped ? data.state2 : data.state1;
    const target = data.targetPos;

    // Helper: Split data string like "CH3 (Up)" into "CH3" and "(Up)"
    function splitInfo(dataString) {
        const parts = dataString.split(' (');
        return { type: parts[0], dir: '(' + parts[1] };
    }

    // Helper: Swap a <-> e labels depending on flip state
    function getLabels(pos) {
        if (!isFlipped) {
            // Standard state: map a/e based on carbon numbering (C1 a-up, e-down, etc.)
            const standardMap = { 1: { a: 'a', e: 'e' }, 2: { a: 'a', e: 'e' }, 3: { a: 'a', e: 'e' }, 4: { a: 'a', e: 'e' }, 5: { a: 'a', e: 'e' }, 6: { a: 'a', e: 'e' } };
            return standardMap[pos];
        } else {
            // Flipped state: standard axial bonds become equatorial slant, swap labels
            return { a: 'e', e: 'a' };
        }
    }

    // Iterate through all 6 positions, hide all secondary carbons, clear all labels
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`pos-${i}`).style.display = 'none';
        
        const labels = getLabels(i);
        document.getElementById(`t${i}-a-ae`).textContent = labels.a;
        document.getElementById(`t${i}-e-ae`).textContent = labels.e;
        
        // Populate standard labels for all carbons (hidden except for C1/Cx)
        document.getElementById(`t${i}-a-type`).textContent = "H";
        document.getElementById(`t${i}-a-dir`).textContent = isFlipped ? "(Down)" : "(Up)"; // generic
        document.getElementById(`t${i}-e-type`).textContent = "H";
        document.getElementById(`t${i}-e-dir`).textContent = isFlipped ? "(Up)" : "(Down)"; // generic
    }

    // Reveal C1 (Always show) and the target carbon (Cx)
    document.getElementById('pos-1').style.display = 'block';
    document.getElementById(`pos-${target}`).style.display = 'block';

    // Populate data for C1 and target Cx from database
    // Split combined strings into type and direction
    const c1a = splitInfo(currentState.c1_a);
    const c1e = splitInfo(currentState.c1_e);
    const cxa = splitInfo(currentState.cx_a);
    const cxe = splitInfo(currentState.cx_e);

    // Update C1 Text
    document.getElementById('t1-a-type').textContent = c1a.type;
    document.getElementById('t1-a-dir').textContent = c1a.dir;
    document.getElementById('t1-e-type').textContent = c1e.type;
    document.getElementById('t1-e-dir').textContent = c1e.dir;

    // Update target Cx Text
    document.getElementById(`t${target}-a-type`).textContent = cxa.type;
    document.getElementById(`t${target}-a-dir`).textContent = cxa.dir;
    document.getElementById(`t${target}-e-type`).textContent = cxe.type;
    document.getElementById(`t${target}-e-dir`).textContent = cxe.dir;

    // Update Text Panel
    document.getElementById('isomer-name').textContent = `${data.isomer}: ${currentState.name}`;
    document.getElementById('flip-state').textContent = isFlipped ? "Flipped Chair" : "Standard Chair";
    document.getElementById('conf-desc').textContent = currentState.desc;
    
    const badge = document.getElementById('conf-stability');
    badge.textContent = currentState.stabilityText;
    badge.className = "badge " + currentState.stabilityClass;
}

window.onload = initializeChair;