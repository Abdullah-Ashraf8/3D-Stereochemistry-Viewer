let viewer = null;

const showcaseData = {
    "cyclohexanol": {
        isomers: "Positional: 2-methylcyclopentan-1-ol. Skeletal: oxacycloheptane.",
        config: "Conformational: Chair (most stable). Ring flip converts axial-OH to equatorial-OH. Equatorial conformation is strongly preferred (A-value ~0.87 kcal/mol).",
        vsepr: "Tetrahedral at all ring carbons (~109.5°). Bent at oxygen (~104.5°) with 2 lone pairs.",
        axe: "Carbon: AX4. Oxygen: AX2E2. Bond Order: C-C, C-O, C-H, and O-H are all 1."
    },
    "1,2-dimethylcyclohexane": {
        isomers: "Positional: 1,3-dimethylcyclohexane, 1,4-dimethylcyclohexane.",
        config: "Geometric: cis and trans. Conformational: trans-(e,e) is most stable.",
        vsepr: "Tetrahedral at all carbons. ~109.5° bond angles. 0 lone pairs.",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "methanol": {
        isomers: "None.",
        config: "None.",
        vsepr: "Bent at oxygen (~104.5°). 2 lone pairs on oxygen.",
        axe: "Oxygen: AX2E2. Carbon: AX4. Bond Order: C-O is 1, O-H is 1, C-H is 1."
    },
    "ethanol": {
        isomers: "None.",
        config: "Conformational: Staggered (anti: OH anti to CH3, most stable) and Eclipsed.",
        vsepr: "Tetrahedral at carbon (~109.5°). Bent at oxygen (~104.5°). 2 lone pairs on oxygen.",
        axe: "Carbon: AX4. Oxygen: AX2E2. Bond Order: C-C, C-O, O-H, C-H are all 1."
    },
    "propan-1-ol": {
        isomers: "Positional: propan-2-ol. Skeletal: none.",
        config: "Conformational: Staggered (anti & gauche) and Eclipsed around the C1-C2 bond.",
        vsepr: "Tetrahedral at all carbons. Bent at oxygen. 2 lone pairs on oxygen.",
        axe: "Carbon: AX4. Oxygen: AX2E2. Bond Order: all single bonds."
    },
    "butan-1-ol": {
        isomers: "Positional: butan-2-ol. Skeletal: 2-methylpropan-1-ol.",
        config: "Conformational: anti (most stable), gauche, eclipsed.",
        vsepr: "Tetrahedral at all carbons. Bent at oxygen. 2 lone pairs on oxygen.",
        axe: "Carbon: AX4. Oxygen: AX2E2."
    },
    "pentan-1-ol": {
        isomers: "Positional: pentan-2-ol, pentan-3-ol. Skeletal: 2-methylbutan-1-ol.",
        config: "No geometric (cis/trans) isomers.",
        vsepr: "Tetrahedral at carbons (~109.5°). Bent at oxygen (~104.5°) with 2 lone pairs.",
        axe: "Carbon: AX4. Oxygen: AX2E2."
    },
    "ethane-1,2-diol": {
        isomers: "None.",
        config: "Conformational: Gauche is the global minimum due to the gauche effect (intramolecular H-bonding). Anti is a local minimum.",
        vsepr: "Tetrahedral at carbons. Bent at oxygen (~104.5°). 2 lone pairs on each oxygen.",
        axe: "Carbon: AX4. Oxygen: AX2E2. Bond Order: all single bonds."
    },
    "2-phenylethanol": {
        isomers: "None (no stereocenters or restricted rotation).",
        config: "Conformational: anti (OH gauche to phenyl) most stable.",
        vsepr: "Tetrahedral at aliphatic carbons. Trigonal planar in the ring (~120°). Bent at oxygen.",
        axe: "Ring carbons: AX3. Aliphatic carbons: AX4. Oxygen: AX2E2."
    },
    "cyclohexane": {
        isomers: "Constitutional: methylcyclopentane, hexenes.",
        config: "Conformational: Chair (most stable), boat, twist-boat. Rapidly interconverts via ring flip.",
        vsepr: "Tetrahedral at all carbons. Bond angles ~109.5° in chair form. 0 lone pairs.",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "water": {
        isomers: "None.",
        config: "None.",
        vsepr: "Bent (V-shaped). ~104.5° bond angle. 2 lone pairs on Oxygen.",
        axe: "AX2E2. Steric number = 4. Bond Order: O-H is 1."
    }
};

const apiSafeMapper = {
    "cyclohexanol": "cyclohexanol",
    "1-cyclohexanol": "cyclohexanol",
    "trans-1,2-cyclohexanediol": "trans-1,2-cyclohexanediol",
    "cis-1,2-cyclohexanediol": "cis-1,2-cyclohexanediol",
    "trans-1,3-cyclohexanediol": "trans-1,3-cyclohexanediol",
    "cis-1,3-cyclohexanediol": "cis-1,3-cyclohexanediol",
    "trans-1,4-cyclohexanediol": "trans-1,4-cyclohexanediol",
    "cis-1,4-cyclohexanediol": "cis-1,4-cyclohexanediol",
    "trans-2-chlorocyclohexan-1-ol": "trans-2-chlorocyclohexanol",
    "cis-2-chlorocyclohexan-1-ol": "cis-2-chlorocyclohexanol",
    "trans-3-chlorocyclohexan-1-ol": "trans-3-chlorocyclohexanol",
    "cis-3-chlorocyclohexan-1-ol": "cis-3-chlorocyclohexanol",
    "trans-4-chlorocyclohexan-1-ol": "trans-4-chlorocyclohexanol",
    "cis-4-chlorocyclohexan-1-ol": "cis-4-chlorocyclohexanol",
    "trans-2-fluorocyclohexan-1-ol": "trans-2-fluorocyclohexanol",
    "cis-2-fluorocyclohexan-1-ol": "cis-2-fluorocyclohexanol",
    "trans-3-fluorocyclohexan-1-ol": "trans-3-fluorocyclohexanol",
    "cis-3-fluorocyclohexan-1-ol": "cis-3-fluorocyclohexanol",
    "trans-4-fluorocyclohexan-1-ol": "trans-4-fluorocyclohexanol",
    "cis-4-fluorocyclohexan-1-ol": "cis-4-fluorocyclohexanol",
    "trans-2-methoxycyclohexan-1-ol": "trans-2-methoxycyclohexanol",
    "cis-2-methoxycyclohexan-1-ol": "cis-2-methoxycyclohexanol",
    "trans-3-methoxycyclohexan-1-ol": "trans-3-methoxycyclohexanol",
    "cis-3-methoxycyclohexan-1-ol": "cis-3-methoxycyclohexanol",
    "trans-4-methoxycyclohexan-1-ol": "trans-4-methoxycyclohexanol",
    "cis-4-methoxycyclohexan-1-ol": "cis-4-methoxycyclohexanol",
    "aspirin": "cid:2244"
};

function isAlcohol(name) {
    const n = name.toLowerCase().trim();
    const alcoholPatterns = [
        /ol\b/,
        /diol\b/,
        /triol\b/,
        /\bhydroxy/,
        /\bhydroxyl/,
        /glycol\b/,
        /glycerol\b/,
        /methanol\b/,
        /ethanol\b/,
        /propanol\b/,
        /butanol\b/,
        /pentanol\b/,
        /hexanol\b/,
        /heptanol\b/,
        /octanol\b/,
        /nonanol\b/,
        /decanol\b/
    ];
    return alcoholPatterns.some(p => p.test(n));
}

window.onload = function () {
    let element = document.getElementById('viewer-3d');
    viewer = $3Dmol.createViewer(element, { backgroundColor: 'black' });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('loadlast')) {
        const lastSearched = sessionStorage.getItem('searchedMolecule');
        if (lastSearched) {
            document.getElementById('compound-input').value = lastSearched;
            searchCompound();
        }
        window.history.replaceState({}, document.title, "index.html");
    }
};

async function searchCompound() {
    let inputName = document.getElementById('compound-input').value.trim().toLowerCase();

    if (!inputName) {
        alert("Please enter an alcohol name before searching.");
        return;
    }

    if (!isAlcohol(inputName)) {
        alert(`"${inputName}" does not appear to be an alcohol.\n\nThis tool is restricted to the alcohol family. Try searching for compounds like cyclohexanol, ethanol, propan-1-ol, or butan-1-ol.`);
        return;
    }

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('details-panel').classList.add('hidden');
    sessionStorage.setItem('searchedMolecule', inputName);
    document.getElementById('loading').style.display = 'block';

    let cleanName = inputName.replace(/\s*\(.*?\)/g, '').trim();
    cleanName = cleanName.replace(/^1-([a-z]+cyclohexane)$/i, '$1');
    cleanName = cleanName.replace(/^1-(cyclohexan[a-z]+)$/i, '$1');
    if (/^[a-z]+anol$/.test(cleanName) && !["methanol", "ethanol"].includes(cleanName)) {
        cleanName = cleanName.replace(/anol$/, 'an-1-ol');
    }

    let fetchName = (typeof apiSafeMapper !== 'undefined' && apiSafeMapper[cleanName])
        ? apiSafeMapper[cleanName]
        : cleanName;
    let safeFetchName = encodeURIComponent(fetchName);

    try {
        const sdfResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${safeFetchName}/SDF?record_type=3d`);
        if (!sdfResponse.ok) throw new Error(`Could not find 3D data for "${inputName}". Please verify the compound name.`);
        const sdfData = await sdfResponse.text();

        const propResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${safeFetchName}/property/MolecularFormula,MolecularWeight,IUPACName/JSON`);
        if (!propResponse.ok) throw new Error("Could not retrieve molecular properties.");
        const propData = await propResponse.json();
        const properties = propData.PropertyTable.Properties[0];

        viewer.clear();
        viewer.addModel(sdfData, "sdf");
        viewer.setStyle({}, { stick: { radius: 0.15 }, sphere: { scale: 0.25 } });
        viewer.zoomTo();
        viewer.render();

        document.getElementById('det-name').innerText = inputName;
        document.getElementById('det-formula').innerText = properties.MolecularFormula || "N/A";
        document.getElementById('det-weight').innerText = properties.MolecularWeight
            ? properties.MolecularWeight + " g/mol" : "N/A";
        document.getElementById('det-iupac').innerText = properties.IUPACName || "N/A";

        const advSection = document.getElementById('advanced-stereochem');
        if (showcaseData[inputName]) {
            document.getElementById('det-isomers').innerText = showcaseData[inputName].isomers;
            document.getElementById('det-config').innerText = showcaseData[inputName].config;
            document.getElementById('det-vsepr').innerText = showcaseData[inputName].vsepr;
            document.getElementById('det-axe').innerHTML = showcaseData[inputName].axe
                .replace(/AX(\d)/g, "AX<sub>$1</sub>")
                .replace(/E(\d)/g, "E<sub>$1</sub>");
            advSection.classList.remove('hidden');
        } else {
            advSection.classList.add('hidden');
        }

        document.getElementById('details-panel').classList.remove('hidden');

        if (window.innerWidth <= 850) {
            const viewerSection = document.querySelector('.viewer-container') || document.getElementById('viewer-3d');
            if (viewerSection) {
                viewerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        const isCyclic = inputName.includes("cyclohexan") &&
            (inputName.includes("ol") || inputName.includes("diol") || inputName.includes("hydroxy"));

        const has2D = typeof moleculeData !== 'undefined' && !!moleculeData[inputName];

        const toolsSection = document.getElementById('dynamic-tools');
        const btn2D = document.getElementById('btn-2d');
        const btnChair = document.getElementById('btn-chair');

        if (isCyclic || has2D) {
            toolsSection.style.display = 'block';
            btn2D.style.display = has2D ? 'block' : 'none';
            btnChair.style.display = isCyclic ? 'block' : 'none';
        } else {
            toolsSection.style.display = 'none';
        }

    } catch (error) {
        alert(error.message);
        if (!viewer.getModel()) {
            document.getElementById('welcome-screen').style.display = 'flex';
        }
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function guardToolNav(event, destination) {
    if (!sessionStorage.getItem('searchedMolecule')) {
        event.preventDefault();
        alert("Please search for an alcohol first before opening this tool.");
        return false;
    }
    return true;
}

function quickSearch(molecule) {
    document.getElementById('compound-input').value = molecule;
    searchCompound();
}