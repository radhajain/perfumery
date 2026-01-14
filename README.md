# Perfumery - Interactive Aromachemical Explorer & Formula Builder

An interactive visualization and learning tool for exploring aromachemicals, building custom accords, and creating complete fragrance formulas. This project displays 51 essential perfume ingredients as an interactive network graph, provides curated classic and modern accords, and allows users to build and save their own fragrance formulations.

<img width="2712" height="1554" alt="CleanShot 2026-01-13 at 21 33 38@2x" src="https://github.com/user-attachments/assets/cc9dc869-9353-4ff4-89ba-43e495dcb674" />
<img width="2714" height="1540" alt="CleanShot 2026-01-13 at 21 33 55@2x" src="https://github.com/user-attachments/assets/e16a4a7f-35ed-48aa-b4a2-2968c37f1406" />
<img width="2688" height="1560" alt="CleanShot 2026-01-13 at 21 34 12@2x" src="https://github.com/user-attachments/assets/d8968f9f-b86d-4b98-b11e-f9956ee617de" />
<img width="2340" height="1342" alt="CleanShot 2026-01-13 at 21 44 55@2x" src="https://github.com/user-attachments/assets/cb0046a2-00ad-4e38-9fd3-e462d2afe691" />

## What It Does

Perfumery is a React-based web app that provides a comprehensive toolkit for learning and practicing perfumery:

### Aromachemical Explorer

- **Interactive Network Graph**: Visualize all 51 aromachemicals organized by scent family (citrus, floral, woody, musk, etc.) and note position (top, middle, base)
- **Search Functionality**: Quickly find specific aromachemicals by name
- **Detailed Information Panel**: Click any node to view comprehensive details including:
  - Chemical structure and manufacturer
  - Scent description and origin story
  - Famous perfumes that use the ingredient
  - Substantivity (longevity), impact, and sillage characteristics
  - Pairing suggestions with other aromachemicals
  - IFRA limits and dilution recommendations
- **Visual Pairing Relationships**: See connections between aromachemicals that work well together
- **Color-Coded Families**: Each scent family has a distinct color for easy navigation

### Classic & Modern Accords Library

- **10 Pre-Defined Accords**: Explore famous building blocks including:
  - **Classic Accords**: Fougère, Chypre, Oriental Amber, White Floral
  - **Modern Accords**: Aquatic/Ozonic, Rose Tea, Gourmand Praline, Woody Amber, Skin Musk
  - **Niche Accords**: Green Fig
- **Color-Coded Visualization**: Each accord displays a color band derived from its constituent aromachemicals' scent families
- **Smart Image Defaults**: Accords automatically inherit imagery from their most prominent aromachemical
- **Detailed Breakdowns**: See the exact percentage and role of each aromachemical in classic formulations
- **Rate & Review**: Add your own notes and ratings to pre-defined accords

### Custom Accord & Formula Builder

- **Create Custom Accords**: Build your own signature accords by combining aromachemicals with precise percentage control
- **Formula Development**: Develop complete fragrance formulas with weight-based measurements
- **Dilution Tracking**: Specify dilution percentages for proper handling and safety
- **Personal Notes System**: Add notes to individual aromachemicals, ingredients in accords, and complete formulas
- **Persistent Storage**: All your custom accords, formulas, ratings, and notes are saved locally

## Why Use This Tool

This tool bridges the gap between theory and practice in perfumery:

- **Learn the Architecture**: Understand how top notes (fleeting), middle notes (the heart), and base notes (long-lasting fixatives) work together
- **Study the Masters**: Deconstruct classic accords to learn composition techniques used in legendary fragrances
- **Experiment Safely**: Build and iterate on formulas digitally before investing in expensive materials
- **Track Your Progress**: Keep detailed notes and ratings as you develop your olfactory skills
- **Visualize Relationships**: See how different scent families and aromachemicals interact and complement each other

---

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
