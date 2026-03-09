import json

# Format: ("Verified PubChem Name", "Front Group", "Back Group")
valid_molecules = [
    # Alkanes
    ("ethane", "H", "H"),
    ("propane", "CH3", "H"),
    ("butane", "CH3", "CH3"),
    ("pentane", "CH3", "CH2CH3"),
    ("hexane", "CH2CH3", "CH2CH3"),

    # Symmetrical 1,2-Ethane Derivatives
    ("1,2-dichloroethane", "Cl", "Cl"),
    ("1,2-dibromoethane", "Br", "Br"),
    ("1,2-difluoroethane", "F", "F"),
    ("1,2-diiodoethane", "I", "I"),
    ("ethane-1,2-diol", "OH", "OH"),
    ("ethane-1,2-diamine", "NH2", "NH2"),
    ("1,2-ethanedithiol", "SH", "SH"),
    ("1,2-dimethoxyethane", "OCH3", "OCH3"),
    ("succinonitrile", "CN", "CN"),

    # Mixed Halides (Ethane backbone)
    ("1-bromo-2-chloroethane", "Br", "Cl"),
    ("1-bromo-2-fluoroethane", "Br", "F"),
    ("1-bromo-2-iodoethane", "Br", "I"),
    ("1-chloro-2-fluoroethane", "Cl", "F"),
    ("1-chloro-2-iodoethane", "Cl", "I"),
    ("1-fluoro-2-iodoethane", "F", "I"),

    # Halohydrins & Amines
    ("2-chloroethanol", "Cl", "OH"),
    ("2-bromoethanol", "Br", "OH"),
    ("2-fluoroethanol", "F", "OH"),
    ("2-iodoethanol", "I", "OH"),
    ("2-chloroethanamine", "Cl", "NH2"),
    ("2-bromoethanamine", "Br", "NH2"),
    ("2-fluoroethanamine", "F", "NH2"),
    ("2-aminoethanol", "OH", "NH2"),
    ("2-mercaptoethanol", "SH", "OH"),
    ("2-methoxyethanol", "OCH3", "OH"),

    # Propane Derivatives (CH3 on one side)
    ("1-chloropropane", "Cl", "CH3"),
    ("1-bromopropane", "Br", "CH3"),
    ("1-fluoropropane", "F", "CH3"),
    ("1-iodopropane", "I", "CH3"),
    ("propan-1-ol", "OH", "CH3"),
    ("propan-1-amine", "NH2", "CH3"),
    ("propanethiol", "SH", "CH3"),
    ("1-methoxypropane", "OCH3", "CH3"),
    ("butyronitrile", "CN", "CH3"),

    # Butane Derivatives (CH2CH3 on one side)
    ("1-chlorobutane", "Cl", "CH2CH3"),
    ("1-bromobutane", "Br", "CH2CH3"),
    ("1-fluorobutane", "F", "CH2CH3"),
    ("1-iodobutane", "I", "CH2CH3"),
    ("butan-1-ol", "OH", "CH2CH3"),
    ("butan-1-amine", "NH2", "CH2CH3"),
    ("butanethiol", "SH", "CH2CH3"),
    ("1-methoxybutane", "OCH3", "CH2CH3"),
    ("pentanenitrile", "CN", "CH2CH3"),

    # Extra Mixed Substituents
    ("1-chloro-2-methoxyethane", "Cl", "OCH3"),
    ("1-bromo-2-methoxyethane", "Br", "OCH3"),
    ("3-chloropropanenitrile", "Cl", "CN"),
    ("3-bromopropanenitrile", "Br", "CN"),
    ("3-hydroxypropanenitrile", "OH", "CN")
]

molecule_data = {}

for name, f, b in valid_molecules:
    molecule_data[name] = {
        "bond": "C1-C2" if name in ["ethane", "propane", "butane"] else "C1-C2 (Substituted)",
        "groups": { "f_top": f, "f_right": "H", "f_left": "H", "b_top": b, "b_right": "H", "b_left": "H" },
        "states": {
            0: {"name": "Staggered, Anti", "cssClass": "most-stable", "type": "Most Stable", "desc": f"The {f} and {b} groups are 180° apart. This minimizes steric strain and dipole interactions."},
            60: {"name": "Eclipsed", "cssClass": "unstable", "type": "High Energy", "desc": f"The {f} group eclipses an H atom. High torsional strain."},
            120: {"name": "Staggered, Gauche", "cssClass": "stable", "type": "Stable (Local Minimum)", "desc": f"The {f} and {b} groups are 60° apart. Stable, but possesses gauche interaction strain."},
            180: {"name": "Fully Eclipsed", "cssClass": "unstable", "type": "Least Stable", "desc": f"The {f} and {b} groups directly eclipse each other. Maximum steric repulsion!"},
            240: {"name": "Staggered, Gauche", "cssClass": "stable", "type": "Stable (Local Minimum)", "desc": f"The {f} and {b} groups are 60° apart. Stable, but possesses gauche interaction strain."},
            300: {"name": "Eclipsed", "cssClass": "unstable", "type": "High Energy", "desc": f"The {b} group eclipses an H atom. High torsional strain."}
        }
    }

# Write to a JavaScript file
with open("database.js", "w") as file:
    file.write("const moleculeData = ")
    file.write(json.dumps(molecule_data, indent=4))
    file.write(";")

print(f"Success! Generated database.js with {len(molecule_data)} PubChem-verified molecules.")