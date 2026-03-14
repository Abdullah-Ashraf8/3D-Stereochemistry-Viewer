const moleculeData = {
    "methanol": {
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
            "b_top": "(CH2)3CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "heptan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)4CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)4CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)4CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)4CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "octan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)5CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)5CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)5CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)5CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)5CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)5CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "nonan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)6CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)6CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)6CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)6CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)6CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)6CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "decan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)7CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)7CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)7CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)7CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)7CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)7CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "undecan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)8CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)8CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)8CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)8CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)8CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)8CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "dodecan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)9CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)9CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)9CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)9CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)9CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)9CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "propan-2-ol": {
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
    "butan-2-ol": {
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
    "pentan-2-ol": {
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
    "pentan-3-ol": {
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
    "hexan-2-ol": {
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
    "hexan-3-ol": {
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
    "2-methylpropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH(CH3)2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH(CH3)2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH(CH3)2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH(CH3)2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methylbutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH(CH3)CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH(CH3)CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH(CH3)CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH(CH3)CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH(CH3)CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH(CH3)CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-methylbutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH(CH3)2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH(CH3)2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH(CH3)2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH(CH3)2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-ethylbutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH(C2H5)2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH(C2H5)2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH(C2H5)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH(C2H5)2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH(C2H5)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH(C2H5)2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methylpentan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH(CH3)(CH2)2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH(CH3)(CH2)2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH(CH3)(CH2)2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH(CH3)(CH2)2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH(CH3)(CH2)2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH(CH3)(CH2)2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-methylpentan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)2CH(CH3)2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)2CH(CH3)2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)2CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)2CH(CH3)2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)2CH(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)2CH(CH3)2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-ethylhexan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH(C2H5)(CH2)3CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH(C2H5)(CH2)3CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH(C2H5)(CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH(C2H5)(CH2)3CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH(C2H5)(CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH(C2H5)(CH2)3CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methylpropan-2-ol": {
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
    "2-methylbutan-2-ol": {
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
    "2-methylpentan-2-ol": {
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
    "3-methylpentan-3-ol": {
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
    "propane-1,2-diol": {
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
    "propane-1,3-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butane-1,2-diol": {
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
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
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
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
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
    "butane-1,3-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butane-1,4-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "butane-2,3-diol": {
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
    "pentane-1,5-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "hexane-1,6-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)4OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)4OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)4OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)4OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)4OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)4OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-methylpropane-1,3-diol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
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
    "3-chloropropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-bromopropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2Br",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2Br groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2Br groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-fluoropropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-iodopropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2I",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2I groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2I groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2I group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-chlorobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-bromobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2Br",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2Br groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2Br groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-fluorobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "5-chloropentan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "6-chlorohexan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)4Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)4Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)4Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)4Cl group eclipses an H atom. High torsional strain.",
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
    "3-aminopropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-aminobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "5-aminopentan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "6-aminohexan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)4NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)4NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)4NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)4NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)4NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)4NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(methylamino)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "NHCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and NHCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and NHCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and NHCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NHCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NHCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(dimethylamino)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "N(CH3)2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and N(CH3)2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and N(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and N(CH3)2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and N(CH3)2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The N(CH3)2 group eclipses an H atom. High torsional strain.",
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
    "3-mercaptopropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2SH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-mercaptobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2SH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2SH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2SH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2SH group eclipses an H atom. High torsional strain.",
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
    "2-ethoxyethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
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
                "desc": "The OH and OCH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and OCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OCH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
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
    "2-propoxyethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "OCH2CH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and OCH2CH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and OCH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OCH2CH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OCH2CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH2CH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-butoxyethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "O(CH2)3CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and O(CH2)3CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and O(CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and O(CH2)3CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and O(CH2)3CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The O(CH2)3CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-methoxypropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(2-methoxyethoxy)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OCH2OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OCH2OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OCH2OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OCH2OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OCH2OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OCH2OCH3 group eclipses an H atom. High torsional strain.",
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
    "3-nitropropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-nitrobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "3-hydroxypropanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-hydroxybutanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CN group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "5-hydroxypentanenitrile": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3CN",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3CN groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3CN groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3CN group eclipses an H atom. High torsional strain.",
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
    "3-phenylpropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-phenylbutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2C6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2C6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2C6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2C6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2C6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-methylphenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-methoxyphenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-chlorophenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-fluorophenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-bromophenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4Br",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4Br groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4Br groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4Br group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(4-nitrophenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4NO2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4NO2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4NO2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4NO2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4NO2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-(2-naphthyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C10H7",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C10H7 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C10H7 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C10H7 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C10H7 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C10H7 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "glycolic acid": {
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
    "lactic acid": {
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
    "4-hydroxybutanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "5-hydroxypentanoic acid": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2COOH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2COOH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2COOH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2COOH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2COOH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "mandelic acid": {
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
    "methyl glycolate": {
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
    "methyl lactate": {
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
    "ethyl lactate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOC2H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COOC2H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and COOC2H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COOC2H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOC2H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOC2H5 group eclipses an H atom. High torsional strain.",
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
    "ethyl 3-hydroxypropanoate": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COOC2H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COOC2H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and COOC2H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COOC2H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COOC2H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COOC2H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "glycolaldehyde": {
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
    "3-hydroxypropanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-hydroxybutanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "5-hydroxypentanal": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3CHO",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3CHO groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3CHO groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3CHO groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3CHO group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "hydroxyacetone": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and COCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-hydroxybutan-2-one": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2COCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2COCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2COCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2COCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2COCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2COCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "1-hydroxybutan-2-one": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "COCH2CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and COCH2CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and COCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and COCH2CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and COCH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The COCH2CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "prop-2-en-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH=CH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH=CH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH=CH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH=CH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "but-3-en-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH=CH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH=CH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH=CH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH=CH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "pent-4-en-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)2CH=CH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)2CH=CH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)2CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)2CH=CH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)2CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)2CH=CH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "hex-5-en-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "(CH2)3CH=CH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and (CH2)3CH=CH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and (CH2)3CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and (CH2)3CH=CH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and (CH2)3CH=CH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The (CH2)3CH=CH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "prop-2-yn-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C\u2261CH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C\u2261CH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C\u2261CH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C\u2261CH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C\u2261CH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C\u2261CH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "but-3-yn-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2C\u2261CH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2C\u2261CH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2C\u2261CH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2C\u2261CH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2C\u2261CH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2C\u2261CH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2,2-difluoroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CHF2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CHF2 groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
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
                "desc": "The OH and CHF2 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CHF2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and CHF2 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CHF2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "2,2,2-trifluoroethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CF3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CF3 groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
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
                "desc": "The OH and CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CF3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CF3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "3,3,3-trifluoropropan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CF3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CF3 groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
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
                "desc": "The OH and CH2CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CF3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and CH2CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CF3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "1,1,1,3,3,3-hexafluoropropan-2-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CF3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CF3 groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
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
                "desc": "The OH and CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CF3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CF3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "4,4,4-trifluorobutan-1-ol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2CF3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2CF3 groups are 180\u00b0 apart. A local minimum; lacks the stabilizing gauche H-bond.",
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
                "desc": "The OH and CH2CH2CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2CF3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "most-stable",
                "type": "Most Stable (Gauche Effect)",
                "desc": "The OH and CH2CH2CF3 groups are 60\u00b0 apart. Global minimum due to intramolecular H-bonding overcoming steric strain.",
                "kcal": 0.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2CF3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.2
            }
        }
    },
    "glycerol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "sorbitol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "xylitol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "mannitol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "erythritol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "serinol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2NH2",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2NH2 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2NH2 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2NH2 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "diethanolamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "triethanolamine": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH2CH2OH",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH2CH2OH groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH2OH groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH2OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH2OH group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "2-chloro-1-(4-fluorophenyl)ethanol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-fluorobenzyl alcohol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4F",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4F groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4F groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4F group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-chlorobenzyl alcohol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4Cl",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4Cl groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4Cl groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4Cl group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-methylbenzyl alcohol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4CH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4CH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4CH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4CH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "4-methoxybenzyl alcohol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "C6H4OCH3",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and C6H4OCH3 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and C6H4OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and C6H4OCH3 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and C6H4OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The C6H4OCH3 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    },
    "benzyl alcohol": {
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
    "cinnamyl alcohol": {
        "bond": "C1-C2 (Alcohol)",
        "groups": {
            "f_top": "OH",
            "f_right": "H",
            "f_left": "H",
            "b_top": "CH=CHC6H5",
            "b_right": "H",
            "b_left": "H"
        },
        "states": {
            "0": {
                "name": "Staggered, Anti",
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The OH and CH=CHC6H5 groups are 180\u00b0 apart. Minimizes steric strain and dipole interactions.",
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
                "desc": "The OH and CH=CHC6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH=CHC6H5 groups directly eclipse each other. Maximum steric repulsion.",
                "kcal": 5.5
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH=CHC6H5 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain.",
                "kcal": 1.0
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH=CHC6H5 group eclipses an H atom. High torsional strain.",
                "kcal": 3.0
            }
        }
    }
};
