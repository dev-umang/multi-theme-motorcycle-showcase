import { DefaultTheme } from "styled-components";
// import snBlue from "../assets/supernovaBlue.png";
const SupportedThemes = [
  "auroraGreen",
  "auroraBlue",
  "supernovaBlue",
  "supernovaRed",
  "fireballRed",
] as const; // List of supported themes.

export type ThemeKey = (typeof SupportedThemes)[number]; // Holds the key of the theme from supported themes

// Fireball Red Theme
const fireballRed: DefaultTheme = {
  info: {
    key: "fireballRed",
    label: "Fireball Red",
    bikeImage: "fbRed",
    tankImage: "fbRedTank",
  },
  colors: {
    bgBody: "#952728",
    fgBody: "#defbff",
    bgPrimary: "#222021",
    textPrimary: "#EBE8E8",
  },
};

// Aurora Green Theme
const auroraGreen: DefaultTheme = {
  info: {
    key: "auroraGreen",
    label: "Fireball Blue",
    bikeImage: "arGreen",
    tankImage: "arGreenTank",
  },
  colors: {
    bgBody: "#518768",
    fgBody: "#defbff",
    bgPrimary: "#dbc695",
    textPrimary: "#111111",
  },
};

// Aurora Blue Theme
const auroraBlue: DefaultTheme = {
  info: {
    key: "auroraBlue",
    label: "Aurora Blue",
    bikeImage: "arBlue",
    tankImage: "arBlueTank",
  },
  colors: {
    bgBody: "#394a5f",
    fgBody: "#defbff",
    bgPrimary: "#d5e4f6",
    textPrimary: "#141414",
  },
};

// Supernova Blue Theme
const supernovaBlue: DefaultTheme = {
  info: {
    key: "supernovaBlue",
    label: "Supernova Blue",
    bikeImage: "snBlue",
    tankImage: "snBlueTank",
  },
  colors: {
    bgBody: "#29a1c0",
    fgBody: "#121212",
    bgPrimary: "#3d3634",
    textPrimary: "#F7F7F7",
  },
};

// Supernova Red Theme
const supernovaRed: DefaultTheme = {
  info: {
    key: "supernovaRed",
    label: "Supernova Red",
    bikeImage: "snRed",
    tankImage: "snRedTank",
  },
  colors: {
    bgBody: "#ab2526",
    fgBody: "#defbff",
    bgPrimary: "#342d2b",
    textPrimary: "#E2E2E2",
  },
};

export const THEMES: Record<ThemeKey, DefaultTheme> = {
  auroraGreen,
  auroraBlue,
  supernovaRed,
  supernovaBlue,
  fireballRed,
};
