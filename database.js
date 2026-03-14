const moleculeData = {
    "ethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "H",
            "f_right": "H",
            "f_left": "H",
            "b_top": "H",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The H and H groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The H and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The H and H groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The H and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "H",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and H groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and H groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "hexane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "heptane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "octane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH2CH3 and CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH3 and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH2CH3 and CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH3 and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "nonane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH2CH3 and CH2CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH3 and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH2CH3 and CH2CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH3 and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "decane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH2CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH2CH2CH3 and CH2CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH2CH3 and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH2CH2CH3 and CH2CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH2CH2CH3 and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-dichloroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-dibromoethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "Br",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and Br groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and Br groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-difluoroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and F groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
                "kcal": 0.5
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The F and F groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The F and F groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "1,2-diiodoethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "ethane-1,2-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OH groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
                "kcal": 0.5
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "ethane-1,2-diamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-ethanedithiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SH and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-dimethoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "succinonitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CN",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CN and CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-dinitroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-diphenylethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1,2-diethoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH2CH3 and OCH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH2CH3 and OCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH2CH3 and OCH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH2CH3 and OCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromo-2-chloroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromo-2-fluoroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromo-2-iodoethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chloro-2-fluoroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chloro-2-iodoethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-fluoro-2-iodoethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-chloroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-bromoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-fluoroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and OH groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
                "kcal": 0.5
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The F and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The F and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "2-iodoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-chloroethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-bromoethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-fluoroethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-iodoethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-chloroethanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-bromoethanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-fluoroethanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-iodoethanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-chloropropanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-bromopropanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-fluoropropanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-iodopropanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chloro-2-methoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromo-2-methoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-fluoro-2-methoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-iodo-2-methoxyethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chloro-2-nitroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromo-2-nitroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-fluoro-2-nitroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-iodo-2-nitroethane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "(2-chloroethyl)benzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "(2-bromoethyl)benzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "(2-fluoroethyl)benzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "(2-iodoethyl)benzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chloropropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromopropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-fluoropropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-iodopropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propan-1-amine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SH and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-methoxypropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butyronitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CN",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CN and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-nitropropane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propylbenzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-chlorobutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-bromobutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-fluorobutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-iodobutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butan-1-amine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SH and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-methoxybutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CN",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CN and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-nitrobutane": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butylbenzene": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-chloropropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-bromopropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-fluoropropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-iodopropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-hydroxypropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-aminopropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-mercaptopropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SH and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-methoxypropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-cyanopropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CN",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CN and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-nitropropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-phenylpropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-chloropropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-bromopropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-fluoropropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-iodopropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-hydroxypropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl 3-aminopropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl butanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "methyl pentanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and COOCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and COOCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and COOCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-chloropropanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-bromopropanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-fluoropropanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-iodopropanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-hydroxypropanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentanamide": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CONH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and CONH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and CONH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CONH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CONH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-chloropropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Cl",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Cl and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-bromopropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "Br",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The Br and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-fluoropropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "F",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-iodopropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "I",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The I and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-hydroxypropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-aminopropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH3 and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "CH2CH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The CH2CH3 and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-phenylpropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-aminoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-mercaptoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SH and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methoxyethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-nitroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-phenylethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-aminoethanethiol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NH2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NH2 and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methoxyethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OCH3 and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-nitroethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "NO2",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The NO2 and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NO2 and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NO2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-phenylethanamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "C6H5",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The C6H5 and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The C6H5 and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The C6H5 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(methylsulfanyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "SCH3",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The SCH3 and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SCH3 and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "H",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and H groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and H groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pentan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "hexan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "ethane-1,2-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OH groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
                "kcal": 0.5
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "2-chloroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-bromoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "Br",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and Br groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and Br groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-fluoroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and F groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
                "kcal": 0.5
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and F groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and F groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "2-iodoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-aminoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-mercaptoethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methoxyethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-nitroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-phenylethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-hydroxypropanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
                "kcal": 0.0
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    }
};
