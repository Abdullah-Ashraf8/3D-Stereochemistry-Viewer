# 🧪 Alcohol Stereochemistry Explorer

An interactive, browser-based web application for visualizing and analyzing the stereochemistry of alcohol compounds. Built as a college project for a Stereochemistry course.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages & Tools](#pages--tools)
- [Supported Molecules](#supported-molecules)
- [How to Run](#how-to-run)
- [How to Use](#how-to-use)
- [Technical Details](#technical-details)
- [Dependencies](#dependencies)
- [Academic Info](#academic-info)

---

## Overview

This project provides three interactive tools for studying alcohol stereochemistry:

1. **3D Molecular Viewer** — renders any alcohol in 3D using PubChem data
2. **2D Conformation Rotator** — simulates bond rotation using a Sawhorse projection
3. **Chair Flip Analyzer** — simulates ring flips for cyclic alcohols with A-value energy data

The site is restricted exclusively to the **alcohol family** (`-OH` functional group), with smart validation that routes each molecule to the correct tool automatically.

---

## Features

- 🔍 **Live 3D rendering** via PubChem REST API and 3Dmol.js
- ⟳ **2D Sawhorse rotation** — step through all 6 rotational states (0°–300°) with conformational name, stability badge, description, and relative energy in kcal/mol
- ⮂ **Chair flip simulation** — toggle between two chair conformations with axial/equatorial labels, A-value based energy display, and stability analysis
- ⚡ **Unlimited molecule support** — procedural fallback algorithms generate valid data for any alcohol not in the hardcoded database
- 🛡️ **Full input validation** — alcohol-only restriction enforced at every entry point with clear, specific error messages
- 💾 **Session-scoped memory** — uses `sessionStorage` so stale data never persists across browser sessions
- 📱 **Responsive design** — works on desktop and mobile

---

## Project Structure

```
📁 project/
├── index.html              # Main 3D viewer and search page
├── conformations.html      # 2D Sawhorse conformation rotator
├── chair.html              # Chair flip analyzer
├── script.js               # Main viewer logic, search, routing, validation
├── conformations.js        # 2D rotation logic + getDynamicConformation()
├── chair.js                # Chair flip logic + getDynamicChair()
├── database.js             # Generated molecule dataset (128 alcohols)
├── generate_molecules.py   # Python script to regenerate database.js
├── style.css               # Shared stylesheet
└── README.md
```

---

## Pages & Tools

### 🏠 `index.html` — 3D Viewer
- Search any alcohol by name (PubChem-verified)
- Renders an interactive 3D model (rotate, zoom, pan)
- Displays molecular formula, weight, and IUPAC name
- Shows advanced stereochemistry analysis for featured molecules
- Dynamically reveals tool buttons based on what the molecule supports:
  - **Cyclic alcohols** → Chair Flip button
  - **Open-chain alcohols** → 2D Conformation Rotator button

### ⟳ `conformations.html` — 2D Conformation Rotator
- Sawhorse projection along the C1–C2 bond
- Rotate in 60° increments through all 6 states
- Each state displays:
  - Conformation name (Anti, Gauche, Eclipsed, Fully Eclipsed)
  - Stability badge (Most Stable / Stable / Unstable)
  - Description of strain interactions
  - **Relative energy in kcal/mol**
- Gauche-effect molecules (e.g. ethane-1,2-diol, 2-fluoroethanol) use an inverted energy scale where gauche is the global minimum
- Only accessible for **open-chain alcohols**

### ⮂ `chair.html` — Chair Flip Analyzer
- 2D SVG chair conformation diagram
- Toggle between standard and flipped chair
- Labels update with axial/equatorial positions and Up/Down stereochemistry
- Panel displays:
  - Conformation name and isomer type
  - Stability badge
  - **Relative energy in kcal/mol** based on A-values
  - Description of 1,3-diaxial interactions
- A-values used: OH = 0.87 | CH₃ = 1.74 | t-Bu = 5.90 kcal/mol
- Only accessible for **cyclic (cyclohexane-based) alcohols**

---

## Supported Molecules

### 2D Conformation Rotator

**128 molecules** with precise hardcoded data, plus unlimited procedural generation for any other open-chain alcohol.

| Family | Examples | Count |
|---|---|---|
| Primary alkanols (C1–C12) | methanol, ethanol, propan-1-ol … dodecan-1-ol | 12 |
| Secondary alkanols | propan-2-ol, butan-2-ol, pentan-3-ol | 6 |
| Branched alkanols | 2-methylpropan-1-ol, 2-ethylhexan-1-ol | 7 |
| Tertiary alkanols | 2-methylpropan-2-ol, 3-methylpentan-3-ol | 4 |
| Diols | ethane-1,2-diol, butane-1,4-diol, hexane-1,6-diol | 10 |
| Halohydrins | 2-chloroethanol, 4-bromobutan-1-ol | 13 |
| Amino alcohols | 2-aminoethanol, 6-aminohexan-1-ol | 7 |
| Thio alcohols | 2-mercaptoethanol, 4-mercaptobutan-1-ol | 3 |
| Ether alcohols | 2-methoxyethanol, 2-butoxyethanol | 6 |
| Nitro alcohols | 2-nitroethanol, 4-nitrobutan-1-ol | 3 |
| Cyano alcohols | 3-hydroxypropanenitrile, 5-hydroxypentanenitrile | 3 |
| Aryl alcohols | 2-phenylethanol, 4-phenylbutan-1-ol | 10 |
| Hydroxy acids | glycolic acid, lactic acid, mandelic acid | 6 |
| Hydroxy esters | methyl lactate, ethyl 3-hydroxypropanoate | 5 |
| Hydroxy aldehydes | glycolaldehyde, 4-hydroxybutanal | 4 |
| Hydroxy ketones | hydroxyacetone, 4-hydroxybutan-2-one | 3 |
| Unsaturated alcohols | prop-2-en-1-ol, but-3-yn-1-ol | 6 |
| Fluorinated alcohols | 2,2,2-trifluoroethanol, hexafluoropropan-2-ol | 5 |
| Sugar alcohols | glycerol, sorbitol, xylitol, mannitol | 5 |
| Misc / biological | benzyl alcohol, diethanolamine, cinnamyl alcohol | 9 |

Any alcohol not in this list is handled by `getDynamicConformation()`, which generates all 6 rotational states automatically.

---

### ⮂ Chair Flip Analyzer

**19 hardcoded entries** with precise A-value based energies, plus unlimited procedural generation for any other cyclohexanol.

| Group | Entries |
|---|---|
| Base | cyclohexanol |
| Cyclohexanediols | trans/cis 1,2 — trans/cis 1,3 — trans/cis 1,4 (6 total) |
| Methyl-cyclohexanols | trans/cis 1-methyl-2/3/4-cyclohexanol (6 total) |
| t-Butyl-cyclohexanols | trans/cis 1-tert-butyl-2/3/4-cyclohexanol (6 total) |

Any other cyclohexanol is handled by `getDynamicChair()`.

---

## How to Run

This is a static website — no server or build step is required.

**Option 1 — Open directly in browser:**
```
Open index.html in any modern browser (Chrome, Firefox, Edge, Safari)
```

**Option 2 — Local server (recommended to avoid CORS issues):**
```bash
# Python
python3 -m http.server 5500

# Node.js
npx serve .
```
Then open `http://localhost:5500` in your browser.

**To regenerate `database.js`** after editing `generate_molecules.py`:
```bash
python3 generate_molecules.py
```

---

## How to Use

### Searching a molecule
1. Type an alcohol name in the search bar on the main page (e.g. `cyclohexanol`, `ethanol`, `butan-1-ol`)
2. Press **Search**
3. The 3D model loads and tool buttons appear if the molecule supports them

### 2D Conformation Rotator
- Only available for **open-chain alcohols**
- Click **Rotate 60°** to step through conformations
- The panel updates with the conformation name, stability, energy, and description
- Click **← Back to 3D Viewer** to return with your molecule loaded

### Chair Flip Analyzer
- Only available for **cyclic (cyclohexane) alcohols**
- Click **Ring Flip ⇌** to toggle between the two chair conformations
- Labels on the diagram update with axial/equatorial positions
- The panel shows energy penalty in kcal/mol based on which substituents are axial
- Click **← Back to 3D Viewer** to return with your molecule loaded

---

## Technical Details

### Validation & Routing
- `isAlcohol(name)` — regex-based check run on every search and tool navigation
- `guardToolNav(event, destination)` — intercepts all tool link clicks and validates the molecule against the specific tool's requirements before navigating
- `sessionStorage` is used instead of `localStorage` so no molecule data persists across browser sessions or tabs

### Procedural Generation
Both tools have a fallback algorithm for molecules not in the hardcoded database:

- **`getDynamicConformation(name)`** in `conformations.js` — parses the molecule name to extract substituents, determines if the gauche effect applies, and builds all 6 rotational states
- **`getDynamicChair(name)`** in `chair.js` — generates a valid chair flip entry for any cyclohexanol using the OH A-value (0.87 kcal/mol)

### Energy Model
| Tool | Basis |
|---|---|
| 2D Rotator (standard) | Anti = 0.0, Gauche = 1.0, Eclipsed = 3.0, Fully Eclipsed = 5.5 kcal/mol |
| 2D Rotator (gauche effect) | Gauche = 0.0, Anti = 0.5, Eclipsed = 3.2, Fully Eclipsed = 5.5 kcal/mol |
| Chair Flip | Sum of axial substituent A-values (OH = 0.87, CH₃ = 1.74, t-Bu = 5.90 kcal/mol) |

### API
3D data is fetched live from the **PubChem REST API**:
```
https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{name}/SDF?record_type=3d
https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{name}/property/MolecularFormula,MolecularWeight,IUPACName/JSON
```

---

## Dependencies

| Library | Version | Purpose |
|---|---|---|
| [3Dmol.js](https://3dmol.csb.pitt.edu/) | 2.0.1 | 3D molecular rendering |
| [PubChem REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest) | — | Molecular structure & property data |

No npm, no build tools, no frameworks. Pure HTML, CSS, and JavaScript.

---

## Academic Info

| Field | Details |
|---|---|
| Subject | Stereochemistry |
| Group | 1 |
| Focus | Alcohol family — conformational analysis, chair flips, 3D structure |

---

> **Note:** An internet connection is required to fetch 3D molecular data from PubChem. All other features work offline.
