import json

# Format: ("PubChem-verified name", "Front group (OH carbon)", "Back group")
valid_molecules = [
    # 1. PRIMARY ALKANOLS (C1-C12)
    ("methanol",      "OH", "H"),
    ("ethanol",       "OH", "H"),
    ("propan-1-ol",   "OH", "CH3"),
    ("butan-1-ol",    "OH", "CH2CH3"),
    ("pentan-1-ol",   "OH", "CH2CH2CH3"),
    ("hexan-1-ol",    "OH", "(CH2)3CH3"),
    ("heptan-1-ol",   "OH", "(CH2)4CH3"),
    ("octan-1-ol",    "OH", "(CH2)5CH3"),
    ("nonan-1-ol",    "OH", "(CH2)6CH3"),
    ("decan-1-ol",    "OH", "(CH2)7CH3"),
    ("undecan-1-ol",  "OH", "(CH2)8CH3"),
    ("dodecan-1-ol",  "OH", "(CH2)9CH3"),
    # 2. SECONDARY ALKANOLS
    ("propan-2-ol",   "OH", "CH3"),
    ("butan-2-ol",    "OH", "CH3"),
    ("pentan-2-ol",   "OH", "CH2CH3"),
    ("pentan-3-ol",   "OH", "CH2CH3"),
    ("hexan-2-ol",    "OH", "CH2CH2CH3"),
    ("hexan-3-ol",    "OH", "CH2CH3"),
    # 3. BRANCHED ALKANOLS
    ("2-methylpropan-1-ol",  "OH", "CH(CH3)2"),
    ("2-methylbutan-1-ol",   "OH", "CH(CH3)CH2CH3"),
    ("3-methylbutan-1-ol",   "OH", "CH2CH(CH3)2"),
    ("2-ethylbutan-1-ol",    "OH", "CH(C2H5)2"),
    ("2-methylpentan-1-ol",  "OH", "CH(CH3)(CH2)2CH3"),
    ("4-methylpentan-1-ol",  "OH", "(CH2)2CH(CH3)2"),
    ("2-ethylhexan-1-ol",    "OH", "CH(C2H5)(CH2)3CH3"),
    # 4. TERTIARY ALKANOLS
    ("2-methylpropan-2-ol",  "OH", "CH3"),
    ("2-methylbutan-2-ol",   "OH", "CH2CH3"),
    ("2-methylpentan-2-ol",  "OH", "CH2CH2CH3"),
    ("3-methylpentan-3-ol",  "OH", "CH2CH3"),
    # 5. DIOLS
    ("ethane-1,2-diol",         "OH", "OH"),
    ("propane-1,2-diol",        "OH", "OH"),
    ("propane-1,3-diol",        "OH", "CH2OH"),
    ("butane-1,2-diol",         "OH", "OH"),
    ("butane-1,3-diol",         "OH", "CH2OH"),
    ("butane-1,4-diol",         "OH", "CH2CH2OH"),
    ("butane-2,3-diol",         "OH", "OH"),
    ("pentane-1,5-diol",        "OH", "(CH2)3OH"),
    ("hexane-1,6-diol",         "OH", "(CH2)4OH"),
    ("2-methylpropane-1,3-diol","OH", "CH2OH"),
    # 6. HALOHYDRINS
    ("2-chloroethanol",    "OH", "Cl"),
    ("2-bromoethanol",     "OH", "Br"),
    ("2-fluoroethanol",    "OH", "F"),
    ("2-iodoethanol",      "OH", "I"),
    ("3-chloropropan-1-ol","OH", "CH2Cl"),
    ("3-bromopropan-1-ol", "OH", "CH2Br"),
    ("3-fluoropropan-1-ol","OH", "CH2F"),
    ("3-iodopropan-1-ol",  "OH", "CH2I"),
    ("4-chlorobutan-1-ol", "OH", "CH2CH2Cl"),
    ("4-bromobutan-1-ol",  "OH", "CH2CH2Br"),
    ("4-fluorobutan-1-ol", "OH", "CH2CH2F"),
    ("5-chloropentan-1-ol","OH", "(CH2)3Cl"),
    ("6-chlorohexan-1-ol", "OH", "(CH2)4Cl"),
    # 7. AMINO ALCOHOLS
    ("2-aminoethanol",          "OH", "NH2"),
    ("3-aminopropan-1-ol",      "OH", "CH2NH2"),
    ("4-aminobutan-1-ol",       "OH", "CH2CH2NH2"),
    ("5-aminopentan-1-ol",      "OH", "(CH2)3NH2"),
    ("6-aminohexan-1-ol",       "OH", "(CH2)4NH2"),
    ("2-(methylamino)ethanol",  "OH", "NHCH3"),
    ("2-(dimethylamino)ethanol","OH", "N(CH3)2"),
    # 8. THIO ALCOHOLS
    ("2-mercaptoethanol",     "OH", "SH"),
    ("3-mercaptopropan-1-ol", "OH", "CH2SH"),
    ("4-mercaptobutan-1-ol",  "OH", "CH2CH2SH"),
    # 9. ETHER ALCOHOLS
    ("2-methoxyethanol",               "OH", "OCH3"),
    ("2-ethoxyethanol",                "OH", "OCH2CH3"),
    ("2-propoxyethanol",               "OH", "OCH2CH2CH3"),
    ("2-butoxyethanol",                "OH", "O(CH2)3CH3"),
    ("3-methoxypropan-1-ol",           "OH", "CH2OCH3"),
    ("2-(2-methoxyethoxy)ethanol",     "OH", "CH2OCH2OCH3"),
    # 10. NITRO ALCOHOLS
    ("2-nitroethanol",     "OH", "NO2"),
    ("3-nitropropan-1-ol", "OH", "CH2NO2"),
    ("4-nitrobutan-1-ol",  "OH", "CH2CH2NO2"),
    # 11. CYANO ALCOHOLS
    ("3-hydroxypropanenitrile","OH", "CH2CN"),
    ("4-hydroxybutanenitrile", "OH", "CH2CH2CN"),
    ("5-hydroxypentanenitrile","OH", "(CH2)3CN"),
    # 12. ARYL ALCOHOLS
    ("2-phenylethanol",              "OH", "C6H5"),
    ("3-phenylpropan-1-ol",          "OH", "CH2C6H5"),
    ("4-phenylbutan-1-ol",           "OH", "CH2CH2C6H5"),
    ("2-(4-methylphenyl)ethanol",    "OH", "C6H4CH3"),
    ("2-(4-methoxyphenyl)ethanol",   "OH", "C6H4OCH3"),
    ("2-(4-chlorophenyl)ethanol",    "OH", "C6H4Cl"),
    ("2-(4-fluorophenyl)ethanol",    "OH", "C6H4F"),
    ("2-(4-bromophenyl)ethanol",     "OH", "C6H4Br"),
    ("2-(4-nitrophenyl)ethanol",     "OH", "C6H4NO2"),
    ("2-(2-naphthyl)ethanol",        "OH", "C10H7"),
    # 13. HYDROXY ACIDS
    ("glycolic acid",           "OH", "COOH"),
    ("lactic acid",             "OH", "COOH"),
    ("3-hydroxypropanoic acid", "OH", "COOH"),
    ("4-hydroxybutanoic acid",  "OH", "CH2COOH"),
    ("5-hydroxypentanoic acid", "OH", "CH2CH2COOH"),
    ("mandelic acid",           "OH", "C6H5"),
    # 14. HYDROXY ESTERS
    ("methyl glycolate",               "OH", "COOCH3"),
    ("methyl lactate",                 "OH", "COOCH3"),
    ("ethyl lactate",                  "OH", "COOC2H5"),
    ("methyl 3-hydroxypropanoate",     "OH", "COOCH3"),
    ("ethyl 3-hydroxypropanoate",      "OH", "COOC2H5"),
    # 15. HYDROXY ALDEHYDES
    ("glycolaldehyde",    "OH", "CHO"),
    ("3-hydroxypropanal", "OH", "CH2CHO"),
    ("4-hydroxybutanal",  "OH", "CH2CH2CHO"),
    ("5-hydroxypentanal", "OH", "(CH2)3CHO"),
    # 16. HYDROXY KETONES
    ("hydroxyacetone",      "OH", "COCH3"),
    ("4-hydroxybutan-2-one","OH", "CH2COCH3"),
    ("1-hydroxybutan-2-one","OH", "COCH2CH3"),
    # 17. UNSATURATED ALCOHOLS
    ("prop-2-en-1-ol",  "OH", "CH=CH2"),
    ("but-3-en-1-ol",   "OH", "CH2CH=CH2"),
    ("pent-4-en-1-ol",  "OH", "(CH2)2CH=CH2"),
    ("hex-5-en-1-ol",   "OH", "(CH2)3CH=CH2"),
    ("prop-2-yn-1-ol",  "OH", "C≡CH"),
    ("but-3-yn-1-ol",   "OH", "CH2C≡CH"),
    # 18. FLUORINATED ALCOHOLS
    ("2,2-difluoroethanol",                   "OH", "CHF2"),
    ("2,2,2-trifluoroethanol",                "OH", "CF3"),
    ("3,3,3-trifluoropropan-1-ol",            "OH", "CH2CF3"),
    ("1,1,1,3,3,3-hexafluoropropan-2-ol",     "OH", "CF3"),
    ("4,4,4-trifluorobutan-1-ol",             "OH", "CH2CH2CF3"),
    # 19. SUGAR ALCOHOLS / POLYOLS
    ("glycerol",      "OH", "CH2OH"),
    ("sorbitol",      "OH", "CH2OH"),
    ("xylitol",       "OH", "CH2OH"),
    ("mannitol",      "OH", "CH2OH"),
    ("erythritol",    "OH", "CH2OH"),
    # 20. MISC / BIOLOGICALLY RELEVANT
    ("serinol",                              "OH", "CH2NH2"),
    ("diethanolamine",                       "OH", "CH2CH2OH"),
    ("triethanolamine",                      "OH", "CH2CH2OH"),
    ("2-chloro-1-(4-fluorophenyl)ethanol",   "OH", "C6H4F"),
    ("4-fluorobenzyl alcohol",               "OH", "C6H4F"),
    ("4-chlorobenzyl alcohol",               "OH", "C6H4Cl"),
    ("4-methylbenzyl alcohol",               "OH", "C6H4CH3"),
    ("4-methoxybenzyl alcohol",              "OH", "C6H4OCH3"),
    ("benzyl alcohol",                       "OH", "C6H5"),
    ("cinnamyl alcohol",                     "OH", "CH=CHC6H5"),
]

gauche_effect_molecules = [
    "ethane-1,2-diol", "propane-1,2-diol", "butane-2,3-diol",
    "2-fluoroethanol", "2,2-difluoroethanol", "2,2,2-trifluoroethanol",
    "3,3,3-trifluoropropan-1-ol", "1,1,1,3,3,3-hexafluoropropan-2-ol",
    "4,4,4-trifluorobutan-1-ol",
]

def get_energy(rotation, is_ge):
    standard = {0: 0.0, 60: 3.0, 120: 1.0, 180: 5.5, 240: 1.0, 300: 3.0}
    gauche   = {0: 0.5, 60: 3.2, 120: 0.0, 180: 5.5, 240: 0.0, 300: 3.2}
    return gauche[rotation] if is_ge else standard[rotation]

molecule_data = {}

for name, f, b in valid_molecules:
    is_ge = name in gauche_effect_molecules
    if is_ge:
        anti_name,   anti_class,   anti_type   = "Staggered, Anti",   "stable",      "Stable (Local Minimum)"
        anti_desc   = f"The {f} and {b} groups are 180° apart. A local minimum; lacks the stabilizing gauche H-bond."
        gauche_name, gauche_class, gauche_type = "Staggered, Gauche", "most-stable", "Most Stable (Gauche Effect)"
        gauche_desc = f"The {f} and {b} groups are 60° apart. Global minimum due to intramolecular H-bonding overcoming steric strain."
    else:
        anti_name,   anti_class,   anti_type   = "Staggered, Anti",   "most-stable", "Most Stable"
        anti_desc   = f"The {f} and {b} groups are 180° apart. Minimizes steric strain and dipole interactions."
        gauche_name, gauche_class, gauche_type = "Staggered, Gauche", "stable",      "Stable (Local Minimum)"
        gauche_desc = f"The {f} and {b} groups are 60° apart. Stable, but possesses gauche interaction strain."

    molecule_data[name] = {
        "bond": "C1-C2 (Alcohol)",
        "groups": {"f_top": f, "f_right": "H", "f_left": "H", "b_top": b, "b_right": "H", "b_left": "H"},
        "states": {
            0:   {"name": anti_name,     "cssClass": anti_class,   "type": anti_type,    "desc": anti_desc,                                                                                  "kcal": get_energy(0,   is_ge)},
            60:  {"name": "Eclipsed",    "cssClass": "unstable",   "type": "High Energy","desc": f"The {f} group eclipses an H atom. High torsional strain.",                               "kcal": get_energy(60,  is_ge)},
            120: {"name": gauche_name,   "cssClass": gauche_class, "type": gauche_type,  "desc": gauche_desc,                                                                                "kcal": get_energy(120, is_ge)},
            180: {"name": "Fully Eclipsed","cssClass": "unstable", "type": "Least Stable","desc": f"The {f} and {b} groups directly eclipse each other. Maximum steric repulsion.",         "kcal": get_energy(180, is_ge)},
            240: {"name": gauche_name,   "cssClass": gauche_class, "type": gauche_type,  "desc": gauche_desc,                                                                                "kcal": get_energy(240, is_ge)},
            300: {"name": "Eclipsed",    "cssClass": "unstable",   "type": "High Energy","desc": f"The {b} group eclipses an H atom. High torsional strain.",                               "kcal": get_energy(300, is_ge)},
        }
    }

with open("database.js", "w") as file:
    file.write("const moleculeData = ")
    file.write(json.dumps(molecule_data, indent=4))
    file.write(";\n")

print(f"Success! Generated database.js with {len(molecule_data)} alcohol molecules.")