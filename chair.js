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
    
    // STRICT ERROR HANDLING
    if (searched && cyclicData[searched]) {
        activeCyclic = searched;
    } else {
        alert(`Error: The molecule "${searched || 'Unknown'}" is not mapped for chair flip analysis. Please go back and search for a valid cyclic compound (e.g., cis-1,2-dimethylcyclohexane).`);
        window.location.href = "index.html";
        return; // Stop execution
    }

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

    // Helper: Split string like "CH3 (Up)" into type and direction
    function splitInfo(dataString) {
        if (!dataString) return { type: "", dir: "" };
        
        // This regex looks for any text, followed by anything wrapped in parentheses
        const match = dataString.match(/(.*?)\s*(\(.*?\))/);
        if (match) {
            return { type: match[1].trim(), dir: match[2].trim() };
        }
        
        // Fallback if no parentheses are found
        return { type: dataString, dir: "" };
    }

    // Helper: Swap a/e labels upon flip
    function getLabels(pos) {
        if (!isFlipped) return { a: 'a', e: 'e' };
        return { a: 'e', e: 'a' }; // Flipped state swaps labels
    }

    // 1. Hide all groups and set baseline labels
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`pos-${i}`).style.display = 'none';
        
        const labels = getLabels(i);
        // Default hidden groups just get generic H labels
        document.getElementById(`t${i}-a-text`).textContent = `${labels.a}-H (Generic)`;
        document.getElementById(`t${i}-e-text`).textContent = `${labels.e}-H (Generic)`;
    }

    // 2. Reveal active groups (C1 and target Cx)
    document.getElementById('pos-1').style.display = 'block';
    document.getElementById(`pos-${target}`).style.display = 'block';

    // 3. Extract and format clean text
    const c1a = splitInfo(currentState.c1_a);
    const c1e = splitInfo(currentState.c1_e);
    const cxa = splitInfo(currentState.cx_a);
    const cxe = splitInfo(currentState.cx_e);

    const l1 = getLabels(1);
    const lx = getLabels(target);

    // Apply the clean, single-string text UI (e.g., "a-CH3 (Up)")
    document.getElementById('t1-a-text').textContent = `${l1.a}-${c1a.type} ${c1a.dir}`;
    document.getElementById('t1-e-text').textContent = `${l1.e}-${c1e.type} ${c1e.dir}`;
    
    document.getElementById(`t${target}-a-text`).textContent = `${lx.a}-${cxa.type} ${cxa.dir}`;
    document.getElementById(`t${target}-e-text`).textContent = `${lx.e}-${cxe.type} ${cxe.dir}`;

    // Update Text Panel
    document.getElementById('isomer-name').textContent = `${data.isomer}: ${currentState.name}`;
    document.getElementById('flip-state').textContent = isFlipped ? "Flipped Chair (Labels Swapped)" : "Standard Chair";
    document.getElementById('conf-desc').textContent = currentState.desc;
    
    const badge = document.getElementById('conf-stability');
    badge.textContent = currentState.stabilityText;
    badge.className = "badge " + currentState.stabilityClass;
}

window.onload = initializeChair;