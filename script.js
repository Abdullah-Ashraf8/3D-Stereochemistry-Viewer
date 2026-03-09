let viewer = null;

// Hardcoded showcase data for the stereochemistry project based on the PDF
const showcaseData = {
    // === ALKENES & ALKYNES ===
    "but-2-ene": {
        isomers: "Constitutional: 2-methylpropene. Geometric: cis-but-2-ene and trans-but-2-ene.",
        config: "cis / (Z)-but-2-ene (high priority CH3 groups on the same side) AND trans / (E)-but-2-ene (high priority groups on opposite sides).",
        vsepr: "Trigonal planar at the C=C carbons. ~120° bond angles. 0 lone pairs on Carbon.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Trigonal-planar-3D-balls.png",
        axe: "AX3 for the double-bonded carbons. Bond Order: C=C is 2, C-C/C-H is 1."
    },
    "2-chlorobut-2-ene": {
        isomers: "Constitutional: 1-chloro-2-methylprop-1-ene.",
        config: "Geometric: (E) and (Z) isomers based on Cahn-Ingold-Prelog priority rules.",
        vsepr: "Trigonal planar at the C=C carbons. ~120° bond angles. 0 lone pairs on Carbon.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Trigonal-planar-3D-balls.png",
        axe: "AX3 for the double-bonded carbons. Bond Order: C=C is 2."
    },
    "ethyne": {
        isomers: "None.",
        config: "None.",
        vsepr: "Linear geometry. 180° bond angles. 0 lone pairs on Carbon.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Linear-3D-balls.png",
        axe: "AX2 for both carbons. Bond Order: C≡C is 3, C-H is 1."
    },

    // === ALKANES ===
    "methane": {
        isomers: "None.",
        config: "None.",
        vsepr: "Tetrahedral shape. ~109.5° bond angles. 0 lone pairs on Carbon.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4. Steric number = 4. Bond Order: C-H is 1."
    },
    "ethane": {
        isomers: "None.",
        config: "Conformational isomers: Staggered (lowest energy, 60° dihedral) and Eclipsed (highest energy, 0° dihedral).",
        vsepr: "Tetrahedral at both carbons. ~109.5° bond angles. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4 for both carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "propane": {
        isomers: "None.",
        config: "Conformational: Staggered and Eclipsed. Eclipsed form experiences steric hindrance between methyl and hydrogen.",
        vsepr: "Tetrahedral at all carbons. ~109.5° bond angles. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "butane": {
        isomers: "Constitutional: Isobutane (2-methylpropane).",
        config: "Conformational isomers: Staggered (anti & gauche) and Eclipsed.",
        vsepr: "Tetrahedral at all carbons. ~109.5° bond angles. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },

    // === CYCLIC COMPOUNDS ===
    "cyclohexane": {
        isomers: "Constitutional: methylcyclopentane, hexenes.",
        config: "Conformational: Chair (most stable), boat, twist-boat, half-chair. Rapidly interconverts via ring flip.",
        vsepr: "Tetrahedral at all carbons. Bond angles close to 109.5° in chair form. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "1,2-dimethylcyclohexane": {
        isomers: "Positional: 1,3-dimethylcyclohexane, 1,4-dimethylcyclohexane.",
        config: "Geometric: cis and trans. Conformational: trans-(e,e) is most stable (0.9 kcal/mol), followed by cis-(a,e) (2.7 kcal/mol).",
        vsepr: "Tetrahedral at all carbons. ~109.5° bond angles. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tetrahedral-3D-balls.png",
        axe: "AX4 for all carbon atoms. Bond Order: C-C and C-H are 1."
    },
    "benzene": {
        isomers: "Constitutional: Dewar benzene, prismane, benzvalene (rare cyclic isomers).",
        config: "None.",
        vsepr: "Trigonal planar at all carbons. 120° bond angles. 0 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Trigonal-planar-3D-balls.png",
        axe: "AX3 for all carbons. Bond Order: C-C is 1.5 (due to delocalization), C-H is 1."
    },

    // === ALCOHOLS & INORGANICS ===
    "pentan-1-ol": {
        isomers: "Positional: pentan-2-ol, pentan-3-ol. Skeletal: 2-methylbutan-1-ol.",
        config: "No geometric (cis/trans) isomers.",
        vsepr: "Tetrahedral at carbons (~109.5°). Bent at oxygen (~104.5°) with 2 lone pairs.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bent-3D-balls.png",
        axe: "Carbon: AX4. Oxygen: AX2E2."
    },
    "carbon dioxide": {
        isomers: "None.",
        config: "None.",
        vsepr: "Linear shape. 180° bond angle. 0 lone pairs on Carbon.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Linear-3D-balls.png",
        axe: "AX2E0. Steric number = 2. Bond Order: C=O is 2."
    },
    "water": {
        isomers: "None.",
        config: "None.",
        vsepr: "Bent (V-shaped). ~104.5° bond angle. 2 lone pairs on Oxygen.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bent-3D-balls.png",
        axe: "AX2E2. Steric number = 4. Bond Order: O-H is 1."
    },
    "ammonia": {
        isomers: "None.",
        config: "None.",
        vsepr: "Trigonal pyramidal. ~107° bond angle. 1 lone pair on Nitrogen.",
        vseprImg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Trigonal-pyramidal-3D-balls.png",
        axe: "AX3E1. Steric number = 4. Bond Order: N-H is 1."
    }
};
window.onload = function() {
    let element = document.getElementById('viewer-3d');
    let config = { backgroundColor: 'black' };
    viewer = $3Dmol.createViewer(element, config);

    // Check if we are returning from the 2D page
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('loadlast')) {
        const lastSearched = localStorage.getItem('searchedMolecule');
        if (lastSearched) {
            // Fill in the input box and trigger the search
            document.getElementById('compound-input').value = lastSearched;
            searchCompound(); 
            
            // Clean up the URL so it looks neat in the browser address bar
            window.history.replaceState({}, document.title, "index.html");
        }
    }
};

async function searchCompound() {
    let inputName = document.getElementById('compound-input').value.trim().toLowerCase();
    
    if (!inputName) {
        alert("Please type a molecule name first!");
        return;
    }

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('details-panel').classList.add('hidden');
    localStorage.setItem('searchedMolecule', inputName);
    document.getElementById('details-panel').classList.remove('hidden');
    document.getElementById('loading').style.display = 'block';

    try {
        const sdfResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${inputName}/SDF?record_type=3d`);
        if (!sdfResponse.ok) throw new Error("Could not find 3D data.");
        const sdfData = await sdfResponse.text();

        const propResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${inputName}/property/MolecularFormula,MolecularWeight,IUPACName/JSON`);
        if (!propResponse.ok) throw new Error("Could not find property data.");
        const propData = await propResponse.json();
        const properties = propData.PropertyTable.Properties[0];

        viewer.clear();
        viewer.addModel(sdfData, "sdf");
        viewer.setStyle({}, { stick: { radius: 0.15 }, sphere: { scale: 0.25 } });
        viewer.zoomTo();
        viewer.render();

        document.getElementById('det-name').innerText = inputName;
        document.getElementById('det-formula').innerText = properties.MolecularFormula || "N/A";
        document.getElementById('det-weight').innerText = properties.MolecularWeight ? properties.MolecularWeight + " g/mol" : "N/A";
        document.getElementById('det-iupac').innerText = properties.IUPACName || "N/A";

        const advSection = document.getElementById('advanced-stereochem');
        const vseprImage = document.getElementById('det-vsepr-img');

        if (showcaseData[inputName]) {
            document.getElementById('det-isomers').innerText = showcaseData[inputName].isomers;
            document.getElementById('det-config').innerText = showcaseData[inputName].config;
            document.getElementById('det-vsepr').innerText = showcaseData[inputName].vsepr;
            document.getElementById('det-axe').innerHTML = showcaseData[inputName].axe.replace(/AX(\d)/g, "AX<sub>$1</sub>").replace(/E(\d)/g, "E<sub>$1</sub>");
            

            advSection.classList.remove('hidden');
        } else {
            advSection.classList.add('hidden');
            vseprImage.style.display = 'none'; // Hide image if no data
        }

        document.getElementById('details-panel').classList.remove('hidden');

    } catch (error) {
        alert(error.message);
        if (!viewer.getModel()) {
            document.getElementById('welcome-screen').style.display = 'flex';
        }
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}






