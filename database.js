const moleculeData = {
    "ethane": {
        "bond": "C1-C2",
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
                "desc": "The H and H groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The H and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The H and H groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The H and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain."
            }
        }
    },
    "propane": {
        "bond": "C1-C2",
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
                "desc": "The CH3 and H groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and H groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and H groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The H group eclipses an H atom. High torsional strain."
            }
        }
    },
    "butane": {
        "bond": "C1-C2",
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
                "desc": "The CH3 and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "pentane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The CH3 and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "hexane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The CH2CH3 and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CH2CH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CH2CH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-dichloroethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and Cl groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and Cl groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-dibromoethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and Br groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and Br groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Br groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-difluoroethane": {
        "bond": "C1-C2 (Substituted)",
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
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and F groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and F groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-diiodoethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The I and I groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and I groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            }
        }
    },
    "ethane-1,2-diol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OH and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "ethane-1,2-diamine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The NH2 and NH2 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and NH2 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-ethanedithiol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The SH and SH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and SH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and SH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1,2-dimethoxyethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OCH3 and OCH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and OCH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "succinonitrile": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The CN and CN groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CN groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromo-2-chloroethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and Cl groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and Cl groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and Cl groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromo-2-fluoroethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and F groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and F groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromo-2-iodoethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and I groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and I groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-chloro-2-fluoroethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and F groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and F groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and F groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-chloro-2-iodoethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and I groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and I groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-fluoro-2-iodoethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The F and I groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and I groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and I groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-chloroethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-bromoethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-fluoroethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "cssClass": "most-stable",
                "type": "Most Stable",
                "desc": "The F and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-iodoethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The I and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-chloroethanamine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and NH2 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and NH2 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-bromoethanamine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and NH2 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and NH2 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-fluoroethanamine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The F and NH2 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and NH2 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-aminoethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OH and NH2 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and NH2 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and NH2 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-mercaptoethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The SH and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "2-methoxyethanol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OCH3 and OH groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and OH groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and OH groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-chloropropane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromopropane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-fluoropropane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The F and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-iodopropane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The I and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "propan-1-ol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OH and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "propan-1-amine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The NH2 and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "propanethiol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The SH and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-methoxypropane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OCH3 and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "butyronitrile": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The CN and CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-chlorobutane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromobutane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-fluorobutane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The F and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The F group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The F and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The F and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-iodobutane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The I and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The I group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The I and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The I and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "butan-1-ol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OH and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "butan-1-amine": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The NH2 and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The NH2 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The NH2 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The NH2 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "butanethiol": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The SH and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The SH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The SH and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The SH and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-methoxybutane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The OCH3 and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OCH3 and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OCH3 and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "pentanenitrile": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The CN and CH2CH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The CN and CH2CH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The CN and CH2CH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CH2CH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-chloro-2-methoxyethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and OCH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and OCH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "1-bromo-2-methoxyethane": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and OCH3 groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and OCH3 groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and OCH3 groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OCH3 group eclipses an H atom. High torsional strain."
            }
        }
    },
    "3-chloropropanenitrile": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Cl and CN groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Cl group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Cl and CN groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Cl and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            }
        }
    },
    "3-bromopropanenitrile": {
        "bond": "C1-C2 (Substituted)",
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
                "desc": "The Br and CN groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The Br group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The Br and CN groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The Br and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            }
        }
    },
    "3-hydroxypropanenitrile": {
        "bond": "C1-C2 (Substituted)",
        "groups": {
            "f_top": "OH",
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
                "desc": "The OH and CN groups are 180\u00b0 apart. This minimizes steric strain and dipole interactions."
            },
            "60": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The OH group eclipses an H atom. High torsional strain."
            },
            "120": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "180": {
                "name": "Fully Eclipsed",
                "cssClass": "unstable",
                "type": "Least Stable",
                "desc": "The OH and CN groups directly eclipse each other. Maximum steric repulsion!"
            },
            "240": {
                "name": "Staggered, Gauche",
                "cssClass": "stable",
                "type": "Stable (Local Minimum)",
                "desc": "The OH and CN groups are 60\u00b0 apart. Stable, but possesses gauche interaction strain."
            },
            "300": {
                "name": "Eclipsed",
                "cssClass": "unstable",
                "type": "High Energy",
                "desc": "The CN group eclipses an H atom. High torsional strain."
            }
        }
    }
};