import json

# Format: ("Verified PubChem Name", "Front Group (OH-bearing carbon)", "Back Group")
# Restricted to the alcohol family: compounds where OH is the primary functional group.
valid_molecules = [
    # 1. Straight-Chain Alkanes
    ("ethane", "H", "H"),
    ("propane", "CH3", "H"),
    ("butane", "CH3", "CH3"),
    ("pentane", "CH3", "CH2CH3"),
    ("hexane", "CH2CH3", "CH2CH3"),
    ("heptane", "CH2CH3", "CH2CH2CH3"),
    ("octane", "CH2CH2CH3", "CH2CH2CH3"),
    ("nonane", "CH2CH2CH3", "CH2CH2CH2CH3"),
    ("decane", "CH2CH2CH2CH3", "CH2CH2CH2CH3"),

    # 2. Symmetrical 1,2-Ethane Derivatives
    ("1,2-dichloroethane", "Cl", "Cl"),
    ("1,2-dibromoethane", "Br", "Br"),
    ("1,2-difluoroethane", "F", "F"),
    ("1,2-diiodoethane", "I", "I"),
    ("ethane-1,2-diol", "OH", "OH"),
    ("ethane-1,2-diamine", "NH2", "NH2"),
    ("1,2-ethanedithiol", "SH", "SH"),
    ("1,2-dimethoxyethane", "OCH3", "OCH3"),
    ("succinonitrile", "CN", "CN"),
    ("1,2-dinitroethane", "NO2", "NO2"),
    ("1,2-diphenylethane", "C6H5", "C6H5"),
    ("1,2-diethoxyethane", "OCH2CH3", "OCH2CH3"),

    # 3. Mixed Halides (Ethane backbone)
    ("1-bromo-2-chloroethane", "Br", "Cl"),
    ("1-bromo-2-fluoroethane", "Br", "F"),
    ("1-bromo-2-iodoethane", "Br", "I"),
    ("1-chloro-2-fluoroethane", "Cl", "F"),
    ("1-chloro-2-iodoethane", "Cl", "I"),
    ("1-fluoro-2-iodoethane", "F", "I"),

    # 4. Halohydrins (Halogen + OH)
    ("2-chloroethanol", "Cl", "OH"),
    ("2-bromoethanol", "Br", "OH"),
    ("2-fluoroethanol", "F", "OH"),
    ("2-iodoethanol", "I", "OH"),

    # 5. Haloamines (Halogen + NH2)
    ("2-chloroethanamine", "Cl", "NH2"),
    ("2-bromoethanamine", "Br", "NH2"),
    ("2-fluoroethanamine", "F", "NH2"),
    ("2-iodoethanamine", "I", "NH2"),

    # 6. Halothiols (Halogen + SH)
    ("2-chloroethanethiol", "Cl", "SH"),
    ("2-bromoethanethiol", "Br", "SH"),
    ("2-fluoroethanethiol", "F", "SH"),
    ("2-iodoethanethiol", "I", "SH"),

    # 7. Halonitriles (Halogen + CN)
    ("3-chloropropanenitrile", "Cl", "CN"),
    ("3-bromopropanenitrile", "Br", "CN"),
    ("3-fluoropropanenitrile", "F", "CN"),
    ("3-iodopropanenitrile", "I", "CN"),

    # 8. Haloethers (Halogen + OCH3)
    ("1-chloro-2-methoxyethane", "Cl", "OCH3"),
    ("1-bromo-2-methoxyethane", "Br", "OCH3"),
    ("1-fluoro-2-methoxyethane", "F", "OCH3"),
    ("1-iodo-2-methoxyethane", "I", "OCH3"),

    # 9. Halo-nitro Compounds (Halogen + NO2)
    ("1-chloro-2-nitroethane", "Cl", "NO2"),
    ("1-bromo-2-nitroethane", "Br", "NO2"),
    ("1-fluoro-2-nitroethane", "F", "NO2"),
    ("1-iodo-2-nitroethane", "I", "NO2"),

    # 10. Halobenzenes (Halogen + Phenyl)
    ("(2-chloroethyl)benzene", "Cl", "C6H5"),
    ("(2-bromoethyl)benzene", "Br", "C6H5"),
    ("(2-fluoroethyl)benzene", "F", "C6H5"),
    ("(2-iodoethyl)benzene", "I", "C6H5"),

    # 11. Propane Derivatives (CH3 on back carbon)
    ("1-chloropropane", "Cl", "CH3"),
    ("1-bromopropane", "Br", "CH3"),
    ("1-fluoropropane", "F", "CH3"),
    ("1-iodopropane", "I", "CH3"),
    ("propan-1-ol", "OH", "CH3"),
    ("propan-1-amine", "NH2", "CH3"),
    ("propanethiol", "SH", "CH3"),
    ("1-methoxypropane", "OCH3", "CH3"),
    ("butyronitrile", "CN", "CH3"),
    ("1-nitropropane", "NO2", "CH3"),
    ("propylbenzene", "C6H5", "CH3"),

    # 12. Butane Derivatives (CH2CH3 on back carbon)
    ("1-chlorobutane", "Cl", "CH2CH3"),
    ("1-bromobutane", "Br", "CH2CH3"),
    ("1-fluorobutane", "F", "CH2CH3"),
    ("1-iodobutane", "I", "CH2CH3"),
    ("butan-1-ol", "OH", "CH2CH3"),
    ("butan-1-amine", "NH2", "CH2CH3"),
    ("butanethiol", "SH", "CH2CH3"),
    ("1-methoxybutane", "OCH3", "CH2CH3"),
    ("pentanenitrile", "CN", "CH2CH3"),
    ("1-nitrobutane", "NO2", "CH2CH3"),
    ("butylbenzene", "C6H5", "CH2CH3"),

    # 13. Carboxylic Acids (Group + COOH)
    ("3-chloropropanoic acid", "Cl", "COOH"),
    ("3-bromopropanoic acid", "Br", "COOH"),
    ("3-fluoropropanoic acid", "F", "COOH"),
    ("3-iodopropanoic acid", "I", "COOH"),
    ("3-hydroxypropanoic acid", "OH", "COOH"),
    ("3-aminopropanoic acid", "NH2", "COOH"),
    ("3-mercaptopropanoic acid", "SH", "COOH"),
    ("3-methoxypropanoic acid", "OCH3", "COOH"),
    ("3-cyanopropanoic acid", "CN", "COOH"),
    ("3-nitropropanoic acid", "NO2", "COOH"),
    ("3-phenylpropanoic acid", "C6H5", "COOH"),
    ("butanoic acid", "CH3", "COOH"),
    ("pentanoic acid", "CH2CH3", "COOH"),

    # 14. Methyl Esters (Group + COOCH3)
    ("methyl 3-chloropropanoate", "Cl", "COOCH3"),
    ("methyl 3-bromopropanoate", "Br", "COOCH3"),
    ("methyl 3-fluoropropanoate", "F", "COOCH3"),
    ("methyl 3-iodopropanoate", "I", "COOCH3"),
    ("methyl 3-hydroxypropanoate", "OH", "COOCH3"),
    ("methyl 3-aminopropanoate", "NH2", "COOCH3"),
    ("methyl butanoate", "CH3", "COOCH3"),
    ("methyl pentanoate", "CH2CH3", "COOCH3"),

    # 15. Amides (Group + CONH2)
    ("3-chloropropanamide", "Cl", "CONH2"),
    ("3-bromopropanamide", "Br", "CONH2"),
    ("3-fluoropropanamide", "F", "CONH2"),
    ("3-iodopropanamide", "I", "CONH2"),
    ("3-hydroxypropanamide", "OH", "CONH2"),
    ("butanamide", "CH3", "CONH2"),
    ("pentanamide", "CH2CH3", "CONH2"),

    # 16. Aldehydes (Group + CHO)
    ("3-chloropropanal", "Cl", "CHO"),
    ("3-bromopropanal", "Br", "CHO"),
    ("3-fluoropropanal", "F", "CHO"),
    ("3-iodopropanal", "I", "CHO"),
    ("3-hydroxypropanal", "OH", "CHO"),
    ("3-aminopropanal", "NH2", "CHO"),
    ("butanal", "CH3", "CHO"),
    ("pentanal", "CH2CH3", "CHO"),
    ("3-phenylpropanal", "C6H5", "CHO"),

    # 17. Mixed Heteroatom 1,2-Derivatives
    ("2-aminoethanol", "OH", "NH2"),
    ("2-mercaptoethanol", "SH", "OH"),
    ("2-methoxyethanol", "OCH3", "OH"),
    ("2-nitroethanol", "NO2", "OH"),
    ("2-phenylethanol", "C6H5", "OH"),
    ("2-aminoethanethiol", "NH2", "SH"),
    ("2-methoxyethanamine", "OCH3", "NH2"),
    ("2-nitroethanamine", "NO2", "NH2"),
    ("2-phenylethanamine", "C6H5", "NH2"),
    ("2-(methylsulfanyl)ethanol", "SCH3", "OH")
]

# Molecules where the Gauche conformation is more stable than Anti
# due to the Gauche Effect (hydrogen bonding or hyperconjugation).
gauche_effect_molecules = ["1,2-difluoroethane", "ethane-1,2-diol", "2-fluoroethanol"]

alkane_bases = ["ethane", "propane", "butane", "pentane", "hexane", "heptane", "octane", "nonane", "decane"]
def get_energy(rotation, is_gauche_effect):
    standard = {0: 0.0, 60: 3.0, 120: 1.0, 180: 5.5, 240: 1.0, 300: 3.0}
    gauche    = {0: 0.5, 60: 3.2, 120: 0.0, 180: 5.5, 240: 0.0, 300: 3.2}
    return gauche[rotation] if is_gauche_effect else standard[rotation]
 
molecule_data = {}
for name, f, b in valid_molecules:
    is_ge = name in gauche_effect_molecules

    if is_ge:
        anti_name, anti_class, anti_type = "Staggered, Anti", "stable", "Stable (Local Minimum)"
        anti_desc = f"The {f} and {b} groups are 180° apart. A local minimum; lacks the stabilizing gauche H-bond."

        gauche_name, gauche_class, gauche_type = "Staggered, Gauche", "most-stable", "Most Stable (Gauche Effect)"
        gauche_desc = f"The {f} and {b} groups are 60° apart. Global minimum due to intramolecular H-bonding overcoming steric strain."
    else:
        anti_name, anti_class, anti_type = "Staggered, Anti", "most-stable", "Most Stable"
        anti_desc = f"The {f} and {b} groups are 180° apart. Minimizes steric strain and dipole interactions."

        gauche_name, gauche_class, gauche_type = "Staggered, Gauche", "stable", "Stable (Local Minimum)"
        gauche_desc = f"The {f} and {b} groups are 60° apart. Stable, but possesses gauche interaction strain."

    molecule_data[name] = {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": f, "f_right": "H", "f_left": "H",
            "b_top": b, "b_right": "H", "b_left": "H"
        },
        "states": {
            0: {
                "name": anti_name, "cssClass": anti_class, "type": anti_type,
                "desc": anti_desc,
                "kcal": get_energy(0, is_ge)
            },
            60: {
                "name": "Eclipsed", "cssClass": "unstable", "type": "High Energy",
                "desc": f"The {f} group eclipses an H atom. High torsional strain.",
                "kcal": get_energy(60, is_ge)
            },
            120: {
                "name": gauche_name, "cssClass": gauche_class, "type": gauche_type,
                "desc": gauche_desc,
                "kcal": get_energy(120, is_ge)
            },
            180: {
                "name": "Fully Eclipsed", "cssClass": "unstable", "type": "Least Stable",
                "desc": f"The {f} and {b} groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": get_energy(180, is_ge)
            },
            240: {
                "name": gauche_name, "cssClass": gauche_class, "type": gauche_type,
                "desc": gauche_desc,
                "kcal": get_energy(240, is_ge)
            },
            300: {
                "name": "Eclipsed", "cssClass": "unstable", "type": "High Energy",
                "desc": f"The {b} group eclipses an H atom. High torsional strain.",
                "kcal": get_energy(300, is_ge)
            }
        }
    }

with open("database.js", "w") as file:
    file.write("const moleculeData = ")
    file.write(json.dumps(molecule_data, indent=4))
    file.write(";\n")

print(f"Success! Generated database.js with {len(molecule_data)} alcohol molecules.")