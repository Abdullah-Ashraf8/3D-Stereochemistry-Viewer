let isFlipped = false;
let activeCyclic = "trans-1,2-dimethylcyclohexane"; // Default showcase

// === LOCAL DATABASE FOR CYCLIC COMPOUNDS ===
const cyclicData = {
    // --- GENERIC BASES ---
    "cyclohexane": {
        isomer: "Generic Cyclohexane", targetPos: 1,
        state1: { name: "Generic Chair", c1_a: "H (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Standard chair conformation. No steric or torsional strain." },
        state2: { name: "Flipped Generic Chair", c1_a: "H (Down)", c1_e: "H (Up)", cx_a: "H (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "The ring flip changes a <-> e but the overall energy state is identical." }
    },
    "1,2-dimethylcyclohexane": {
        isomer: "Generic 1,2 Isomer (Showing Stable)", targetPos: 2,
        state1: { name: "(e,e) - trans", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (0.9 kcal/mol)", desc: "Places both bulky CH3 groups equatorial. This is the lowest energy generic form." },
        state2: { name: "(a,e) - cis", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "stable", stabilityText: "Stable (2.7 kcal/mol)", desc: "One group is axial, one equatorial. Flipped cis forms are identical in energy." }
    },
    "1,3-dimethylcyclohexane": {
        isomer: "Generic 1,3 Isomer (Showing Stable)", targetPos: 3,
        state1: { name: "(e,e) - cis", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable (0 kcal/mol)", desc: "Places both bulky CH3 groups equatorial. No steric strain." },
        state2: { name: "(a,e) - trans", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "stable", stabilityText: "Stable Isomer", desc: "Generic representation of the less stable isomer (a,e)." }
    },
    "1,4-dimethylcyclohexane": {
        isomer: "Generic 1,4 Isomer (Showing Stable)", targetPos: 4,
        state1: { name: "(e,e) - trans", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Places both bulky CH3 groups equatorial on opposite sides of the ring." },
        state2: { name: "(a,e) - cis", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "stable", stabilityText: "Stable Isomer", desc: "Generic representation of the cis (a,e) isomer." }
    },
    
    // --- SPECIFIC DIMETHYL ISOMERS ---
    "trans-1,2-dimethylcyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable (3.6 kcal/mol)", desc: "Suffers severe diaxial interactions." },
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
    },

    // --- MONO-SUBSTITUTED HALOGENS ---
    "fluorocyclohexane": {
        isomer: "Mono-substituted Halogen", targetPos: 1,
        state1: { name: "Axial", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Fluorine is small, causing relatively minor 1,3-diaxial strain compared to other halogens." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Prefers the equatorial position slightly to minimize strain." }
    },
    "chlorocyclohexane": {
        isomer: "Mono-substituted Halogen", targetPos: 1,
        state1: { name: "Axial", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The Chlorine atom is axial, causing 1,3-diaxial steric strain." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Chlorine is completely clear of 1,3-diaxial interactions." }
    },
    "bromocyclohexane": {
        isomer: "Mono-substituted Halogen", targetPos: 1,
        state1: { name: "Axial", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Forcing it axial creates steric repulsion, though long bonds mitigate it slightly." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Bromine is in the spacious equatorial position." }
    },
    "iodocyclohexane": {
        isomer: "Mono-substituted Halogen", targetPos: 1,
        state1: { name: "Axial", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Iodine is massive, but the exceptionally long C-I bond reduces the severity of the 1,3-diaxial clash." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Still strongly prefers the equatorial position." }
    },

    // --- MONO-SUBSTITUTED ALKYL & ARYL GROUPS ---
    "methylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "CH3 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable (~1.7 kcal/mol)", desc: "Experiences classic 1,3-diaxial interactions." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "CH3 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Sits comfortably in the equatorial plane." }
    },
    "ethylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "Ethyl (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The ethyl group rotates to minimize some strain, but being axial still creates severe clash." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Ethyl (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Prefers the equatorial position." }
    },
    "propylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "Propyl (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Similar A-value to ethyl, rotates away from ring but clashes." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Propyl (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial placement relieves strain." }
    },
    "isopropylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "i-Pr (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "The branched isopropyl group causes massive steric crowding when forced axial." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "i-Pr (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Strongly favors the equatorial position." }
    },
    "isobutylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "i-Bu (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Branching is one carbon further away, strain is high but less than isopropyl." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "i-Bu (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial is strictly favored." }
    },
    "sec-butylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "sec-Bu (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Branching at the alpha carbon creates intense 1,3-diaxial interactions." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "sec-Bu (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Bulky group sits safely on the equator." }
    },
    "tert-butylcyclohexane": {
        isomer: "Mono-substituted (Locking Group)", targetPos: 1,
        state1: { name: "Axial", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Massive tert-butyl group creates extreme 1,3-diaxial interactions. Effectively non-existent at room temp." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Demands the equatorial position, 'locking' the ring." }
    },
    "neopentylcyclohexane": {
        isomer: "Mono-substituted Alkyl", targetPos: 1,
        state1: { name: "Axial", c1_a: "Neopentyl (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Huge steric bulk creates massive interactions." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Neopentyl (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial position provides relief." }
    },
    "phenylcyclohexane": {
        isomer: "Mono-substituted Aryl", targetPos: 1,
        state1: { name: "Axial", c1_a: "Ph (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Flat but large aromatic ring clashes severely when axial." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "Ph (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Phenyl ring sits equatorially, rotating to minimize strain." }
    },
    "trifluoromethylcyclohexane": {
        isomer: "Mono-substituted Alkyl-Halide", targetPos: 1,
        state1: { name: "Axial", c1_a: "CF3 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "The CF3 group acts like a bulky alkyl group, creating intense repulsion." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "CF3 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial placement is strongly favored." }
    },

    // --- MONO-SUBSTITUTED HETEROATOMS ---
    "cyclohexanol": {
        isomer: "Cyclic Alcohol", targetPos: 1,
        state1: { name: "Axial", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Hydroxyl group is axial. Less severe than halogens due to small size." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Occupies the stable equatorial position." }
    },
    "cyclohexanamine": {
        isomer: "Cyclic Amine", targetPos: 1,
        state1: { name: "Axial", c1_a: "NH2 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The amino group is in the higher-energy axial position." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "NH2 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Minimizes steric strain by sitting equatorially." }
    },
    "cyanocyclohexane": {
        isomer: "Mono-substituted Nitrile", targetPos: 1,
        state1: { name: "Axial", c1_a: "CN (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "stable", stabilityText: "Slightly Less Stable", desc: "The cyano group is strictly linear (sp hybridized), causing surprisingly little 1,3-diaxial strain!" },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "CN (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Preferred state, but energy difference is unusually small." }
    },
    "nitrocyclohexane": {
        isomer: "Mono-substituted Nitro", targetPos: 1,
        state1: { name: "Axial", c1_a: "NO2 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Bulky NO2 group clashes with axial hydrogens." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "NO2 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Favors the equatorial position." }
    },
    "methoxycyclohexane": {
        isomer: "Cyclic Ether", targetPos: 1,
        state1: { name: "Axial", c1_a: "OCH3 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The methoxy oxygen is axial, causing mild steric strain." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "OCH3 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "The methoxy group is safely equatorial." }
    },
    "ethoxycyclohexane": {
        isomer: "Cyclic Ether", targetPos: 1,
        state1: { name: "Axial", c1_a: "OCH2CH3 (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Longer ether chain creates more clash when axial." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "OCH2CH3 (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Safely equatorial." }
    },
    "isopropoxycyclohexane": {
        isomer: "Cyclic Ether", targetPos: 1,
        state1: { name: "Axial", c1_a: "O-iPr (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Branched ether group clashes severely when axial." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "O-iPr (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial position favored heavily." }
    },
    "phenoxycyclohexane": {
        isomer: "Cyclic Ether (Aryl)", targetPos: 1,
        state1: { name: "Axial", c1_a: "OPh (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Large phenoxy group creates extreme steric hindrance." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "OPh (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Favors equatorial plane." }
    },
    "cyclohexanethiol": {
        isomer: "Cyclic Thiol", targetPos: 1,
        state1: { name: "Axial", c1_a: "SH (Up)", c1_e: "H (Down)", cx_a: "H", cx_e: "H", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Larger sulfur atom causes 1,3-diaxial strain when placed axial." },
        state2: { name: "Equatorial", c1_a: "H (Up)", c1_e: "SH (Down)", cx_a: "H", cx_e: "H", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Favors the equatorial position." }
    },

    // --- DIFLUOROCYCLOHEXANES ---
    "trans-1,2-difluorocyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "1,3-diaxial strain from both fluorines." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both Fluorines are equatorial." }
    },
    "cis-1,2-difluorocyclohexane": {
        isomer: "Cis-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One a, one e. Standard energy." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Flip alternates halogens." }
    },
    "trans-1,3-difluorocyclohexane": {
        isomer: "Trans-1,3 Isomer", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "F (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One a, one e. Both forms identical." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "F (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy state identical." }
    },
    "cis-1,3-difluorocyclohexane": {
        isomer: "Cis-1,3 Isomer", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "H (Up)", cx_e: "F (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Highly stable, e,e conformation." },
        state2: { name: "(a,a)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "F (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Groups are forced axial." }
    },
    "trans-1,4-difluorocyclohexane": {
        isomer: "Trans-1,4 Isomer", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both groups can be equatorial." },
        state2: { name: "(a,a)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Groups are forced axial." }
    },
    "cis-1,4-difluorocyclohexane": {
        isomer: "Cis-1,4 Isomer", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "F (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One a, one e." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "F (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy state identical." }
    },

    // --- DICHLOROCYCLOHEXANES ---
    "trans-1,2-dichlorocyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Severe 1,3-diaxial interactions from both bulky Chlorines." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both Chlorines are equatorial, sharing a highly polar gauche interaction." }
    },
    "cis-1,2-dichlorocyclohexane": {
        isomer: "Cis-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One Chlorine is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states are identical upon ring flip." }
    },
    "trans-1,3-dichlorocyclohexane": {
        isomer: "Trans-1,3 Isomer", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "Cl (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One Cl is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "Cl (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states are perfectly mirrored." }
    },
    "cis-1,3-dichlorocyclohexane": {
        isomer: "Cis-1,3 Isomer", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Up)", cx_e: "Cl (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both Chlorines occupy the equatorial plane simultaneously." },
        state2: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "Cl (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Creates severe, direct 1,3-diaxial repulsion between the two halogens." }
    },
    "trans-1,4-dichlorocyclohexane": {
        isomer: "Trans-1,4 Isomer", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Opposite sides allow both bulky Halogens to be equatorial." },
        state2: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both Chlorines are forced into high-energy axial positions." }
    },
    "cis-1,4-dichlorocyclohexane": {
        isomer: "Cis-1,4 Isomer", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One Chlorine must be axial and one must be equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "The flip alternates which Halogen is axial." }
    },

    // --- DIBROMOCYCLOHEXANES ---
    "trans-1,2-dibromocyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "Br (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Massive diaxial interactions." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H (Down)", cx_e: "Br (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Bromines sit safely on the equator." }
    },
    "cis-1,2-dibromocyclohexane": {
        isomer: "Cis-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Br (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One Br is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "Br (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states are identical." }
    },
    "trans-1,3-dibromocyclohexane": {
        isomer: "Trans-1,3 Isomer", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "Br (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One Br is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "Br (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Perfectly mirrored." }
    },
    "cis-1,3-dibromocyclohexane": {
        isomer: "Cis-1,3 Isomer", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H (Up)", cx_e: "Br (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both massive Bromines are equatorial." },
        state2: { name: "(a,a)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "Br (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Incredibly high strain from direct 1,3 interactions between massive Br atoms." }
    },
    "trans-1,4-dibromocyclohexane": {
        isomer: "Trans-1,4 Isomer", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H (Down)", cx_e: "Br (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Bromines safely placed on opposite ends, equatorial." },
        state2: { name: "(a,a)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "Br (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Forced into high-energy axial states." }
    },
    "cis-1,4-dibromocyclohexane": {
        isomer: "Cis-1,4 Isomer", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Br (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One axial, one equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "Br (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states flip perfectly." }
    },

    // --- DIIODOCYCLOHEXANES ---
    "trans-1,2-diiodocyclohexane": {
        isomer: "Trans-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "I (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Large iodines forced axial." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "H (Down)", cx_e: "I (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial placement relieves strain." }
    },
    "cis-1,2-diiodocyclohexane": {
        isomer: "Cis-1,2 Isomer", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "I (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One axial, one equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "I (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states flip perfectly." }
    },
    "trans-1,3-diiodocyclohexane": {
        isomer: "Trans-1,3 Isomer", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "I (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One axial, one equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "I (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Perfectly mirrored." }
    },
    "cis-1,3-diiodocyclohexane": {
        isomer: "Cis-1,3 Isomer", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "H (Up)", cx_e: "I (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both massive Iodines are equatorial." },
        state2: { name: "(a,a)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "I (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Incredibly high strain from direct 1,3 interactions." }
    },
    "trans-1,4-diiodocyclohexane": {
        isomer: "Trans-1,4 Isomer", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "H (Down)", cx_e: "I (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Iodines safely placed on opposite ends, equatorial." },
        state2: { name: "(a,a)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "I (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Forced into high-energy axial states." }
    },
    "cis-1,4-diiodocyclohexane": {
        isomer: "Cis-1,4 Isomer", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "I (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "I (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One axial, one equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "I (Down)", cx_a: "I (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states flip perfectly." }
    },

    // --- DIOLS, DIETHERS, DIAMINES ---
    "trans-1,2-cyclohexanediol": {
        isomer: "Trans-1,2 Diol", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Suffers from 1,3-diaxial interactions." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "OH (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both hydroxyl groups are equatorial, allowing for stabilizing intramolecular hydrogen bonding." }
    },
    "cis-1,2-cyclohexanediol": {
        isomer: "Cis-1,2 Diol", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One OH is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states mirror upon ring flip." }
    },
    "trans-1,3-cyclohexanediol": {
        isomer: "Trans-1,3 Diol", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "OH (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One OH is axial, one is equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Up)", cx_e: "H (Down)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Energy states mirror." }
    },
    "cis-1,3-cyclohexanediol": {
        isomer: "Cis-1,3 Diol", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Up)", cx_e: "OH (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both OH groups are equatorial. High stability." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "1,3-diaxial OH groups can H-bond, but the steric clash still makes this less stable than (e,e)." }
    },
    "trans-1,4-cyclohexanediol": {
        isomer: "Trans-1,4 Diol", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "H (Down)", cx_e: "OH (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both groups equatorial." },
        state2: { name: "(a,a)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "OH (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both groups axial." }
    },
    "cis-1,4-cyclohexanediol": {
        isomer: "Cis-1,4 Diol", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "OH (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OH (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "One axial, one equatorial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OH (Down)", cx_a: "OH (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Mirrored." }
    },
    "trans-1,2-dimethoxycyclohexane": {
        isomer: "Trans-1,2 Diether", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "OCH3 (Up)", c1_e: "H (Down)", cx_a: "OCH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Steric clash." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "OCH3 (Down)", cx_a: "H (Down)", cx_e: "OCH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial placement." }
    },
    "cis-1,2-dimethoxycyclohexane": {
        isomer: "Cis-1,2 Diether", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "OCH3 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "OCH3 (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Mirrored energy states." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "OCH3 (Down)", cx_a: "OCH3 (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Mirrored energy states." }
    },
    "trans-1,2-cyclohexanediamine": {
        isomer: "Trans-1,2 Diamine", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "NH2 (Up)", c1_e: "H (Down)", cx_a: "NH2 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Steric clash." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "NH2 (Down)", cx_a: "H (Down)", cx_e: "NH2 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Equatorial placement." }
    },
    "cis-1,2-cyclohexanediamine": {
        isomer: "Cis-1,2 Diamine", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "NH2 (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "NH2 (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Mirrored energy states." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "NH2 (Down)", cx_a: "NH2 (Down)", cx_e: "H (Up)", stabilityClass: "stable", stabilityText: "Equally Stable", desc: "Mirrored energy states." }
    },

    // --- MIXED GROUPS: ALKYL VS ALKYL (FIGHTING FOR EQUATORIAL) ---
    "trans-1-ethyl-2-methylcyclohexane": {
        isomer: "Trans-1,2 Mixed", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "Ethyl (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both forced axial." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Ethyl (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both are comfortably equatorial." }
    },
    "cis-1-ethyl-2-methylcyclohexane": {
        isomer: "Cis-1,2 Mixed", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "Ethyl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The bulkier Ethyl group is forced axial, raising the energy." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Ethyl (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "The bulkier Ethyl group takes the equatorial spot, forcing Methyl axial." }
    },
    "trans-1-isopropyl-3-methylcyclohexane": {
        isomer: "Trans-1,3 Mixed", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "i-Pr (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The larger Isopropyl group is forced axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "i-Pr (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "The bulky Isopropyl group claims the equatorial position." }
    },
    "cis-1-isopropyl-3-methylcyclohexane": {
        isomer: "Cis-1,3 Mixed", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "i-Pr (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both bulky groups are safely equatorial." },
        state2: { name: "(a,a)", c1_a: "i-Pr (Up)", c1_e: "H (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Both forced axial." }
    },
    "trans-1-tert-butyl-2-methylcyclohexane": {
        isomer: "Trans-1,2 Mixed (Locked)", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Forced axial tert-butyl." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "Locked in the (e,e) state." }
    },
    "cis-1-tert-butyl-2-methylcyclohexane": {
        isomer: "Cis-1,2 Mixed (Locked)", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "t-Bu is axial. Non-existent at room temp." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "t-Bu absolutely dictates equatorial placement, locking Methyl axial." }
    },
    "trans-1-tert-butyl-3-methylcyclohexane": {
        isomer: "Trans-1,3 Mixed (Locked)", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "t-Bu is axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "t-Bu claims equatorial, locking Methyl axial." }
    },
    "cis-1-tert-butyl-3-methylcyclohexane": {
        isomer: "Cis-1,3 Mixed (Locked)", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "Both groups securely equatorial." },
        state2: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Both axial. Impossible at room temp." }
    },
    "cis-1-tert-butyl-4-methylcyclohexane": {
        isomer: "Cis-1,4 Mixed (Locked)", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Forces the massive tert-butyl group axial. This state practically does not exist." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "The tert-butyl group absolutely demands the equatorial position, locking the smaller methyl group into the axial position permanently." }
    },
    "trans-1-tert-butyl-4-methylcyclohexane": {
        isomer: "Trans-1,4 Mixed (Locked)", targetPos: 4,
        state1: { name: "(a,a)", c1_a: "t-Bu (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Extremely Unstable", desc: "Both groups are axial." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "t-Bu (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable (Locked)", desc: "The massive tert-butyl group locks both substituents into the equatorial plane." }
    },

    // --- MIXED GROUPS: HALOGEN VS ALKYL ---
    "trans-1-chloro-2-methylcyclohexane": {
        isomer: "Trans-1,2 Mixed", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both forced axial." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both are comfortably equatorial." }
    },
    "cis-1-chloro-2-methylcyclohexane": {
        isomer: "Cis-1,2 Mixed", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "CH3 (higher A-value) goes equatorial, leaving smaller Cl axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The bulkier CH3 group is forced axial." }
    },
    "trans-1-bromo-3-methylcyclohexane": {
        isomer: "Trans-1,3 Mixed", targetPos: 3,
        state1: { name: "(a,e)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "CH3 (larger A-value than Br) sits equatorial, pushing Br axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "CH3 is forced axial." }
    },
    "cis-1-bromo-3-methylcyclohexane": {
        isomer: "Cis-1,3 Mixed", targetPos: 3,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H (Up)", cx_e: "CH3 (Down)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both can be equatorial." },
        state2: { name: "(a,a)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "CH3 (Up)", cx_e: "H (Down)", stabilityClass: "unstable", stabilityText: "Highly Unstable", desc: "Both forced axial." }
    },
    "trans-1-chloro-4-methylcyclohexane": {
        isomer: "Trans-1,4 Mixed", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Opposite sides allow both groups to be comfortably equatorial." },
        state2: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both groups are forced axial." }
    },
    "cis-1-chloro-4-methylcyclohexane": {
        isomer: "Cis-1,4 Mixed", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "CH3 (Up)", stabilityClass: "stable", stabilityText: "Most Stable", desc: "The larger CH3 group (A-value ~1.7) takes the equatorial spot, forcing the smaller Cl (A-value ~0.5) to go axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "CH3 (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "The bulkier CH3 group is forced axial, raising the energy state." }
    },

    // --- MIXED HALOGENS ---
    "trans-1-bromo-2-chlorocyclohexane": {
        isomer: "Trans-1,2 Mixed Halogen", targetPos: 2,
        state1: { name: "(a,a)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both halogens forced axial." },
        state2: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both halogens securely equatorial." }
    },
    "cis-1-bromo-2-chlorocyclohexane": {
        isomer: "Cis-1,2 Mixed Halogen", targetPos: 2,
        state1: { name: "(a,e)", c1_a: "Br (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "Cl (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Chlorine has a slightly larger A-value than Bromine, so Cl prefers equatorial, pushing Br axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Br (Down)", cx_a: "Cl (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Chlorine is forced axial." }
    },
    "trans-1-chloro-4-fluorocyclohexane": {
        isomer: "Trans-1,4 Mixed Halogen", targetPos: 4,
        state1: { name: "(e,e)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Both comfortably equatorial." },
        state2: { name: "(a,a)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "unstable", stabilityText: "Least Stable", desc: "Both forced axial." }
    },
    "cis-1-chloro-4-fluorocyclohexane": {
        isomer: "Cis-1,4 Mixed Halogen", targetPos: 4,
        state1: { name: "(a,e)", c1_a: "Cl (Up)", c1_e: "H (Down)", cx_a: "H (Down)", cx_e: "F (Up)", stabilityClass: "unstable", stabilityText: "Less Stable", desc: "Chlorine (larger) is forced axial." },
        state2: { name: "(e,a)", c1_a: "H (Up)", c1_e: "Cl (Down)", cx_a: "F (Down)", cx_e: "H (Up)", stabilityClass: "most-stable", stabilityText: "Most Stable", desc: "Chlorine claims equatorial, F goes axial." }
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