# Perfumery - Interactive Aromachemical Explorer & Formula Builder

An interactive visualization and learning tool for exploring aromachemicals, building custom accords, and creating complete fragrance formulas. This project displays 51 essential perfume ingredients as an interactive network graph, provides curated classic and modern accords, and allows users to build and save their own fragrance formulations. These match the chemicals that can be bought [here](https://shop.perfumersapprentice.com/p-6632-beginners-aromachemical-kit.aspx). 

<img width="2352" height="1356" alt="CleanShot 2026-01-15 at 15 20 41@2x" src="https://github.com/user-attachments/assets/f188ad7f-7ec3-453c-ac3f-5daf42c6a763" />
<img width="2716" height="1554" alt="CleanShot 2026-01-13 at 23 37 50@2x" src="https://github.com/user-attachments/assets/e5338da3-a9e0-4d3b-8a62-95c38a0b9b4c" />


<img width="2714" height="1540" alt="CleanShot 2026-01-13 at 21 33 55@2x" src="https://github.com/user-attachments/assets/e16a4a7f-35ed-48aa-b4a2-2968c37f1406" />

<img width="2340" height="1342" alt="CleanShot 2026-01-13 at 21 44 55@2x" src="https://github.com/user-attachments/assets/cb0046a2-00ad-4e38-9fd3-e462d2afe691" />
<img width="2712" height="1554" alt="CleanShot 2026-01-13 at 21 33 38@2x" src="https://github.com/user-attachments/assets/cc9dc869-9353-4ff4-89ba-43e495dcb674" />

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

- **10 Pre-Defined Accords**: Includes famous building blocks such as:
  - **Classic Accords**: Fougère, Chypre, Oriental Amber, White Floral
  - **Modern Accords**: Aquatic/Ozonic, Rose Tea, Gourmand Praline, Woody Amber, Skin Musk
  - **Niche Accords**: Green Fig
- **Color-Coded Visualization**: Each accord displays a color band derived from its constituent aromachemicals' scent families
- **Smart Image Defaults**: Accords automatically inherit imagery from their most prominent aromachemical
- **Detailed Breakdowns**: See the exact percentage and role of each aromachemical in classic formulations
- **Rate & Review**: You can add your own notes and ratings to pre-defined accords

### Custom Accord & Formula Builder

- **Create Custom Accords**: Build your own signature accords by combining aromachemicals with precise percentage control
- **Formula Development**: Develop complete fragrance formulas with weight-based measurements
- **Dilution Tracking**: Specify dilution percentages for proper handling and safety
- **Personal Notes System**: Add notes to individual aromachemicals, ingredients in accords, and complete formulas
- **Local Storage**: Custom accords, formulas, ratings, and notes are saved locally

---

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
