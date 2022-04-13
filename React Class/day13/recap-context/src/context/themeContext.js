import { createContext } from "react";

export const theme = {
  dark: {
    body: {
      background: "#006064",
    },
    button: {
      color: "white",
      background: "#006064",
    },
    text: {
      color: "#B2DFDB",
    },
  },
  light: {
    body: {
      background: "#90CAF9",
    },
    button: {
      color: "black",
      background: "#90CAF9",
    },
    text: {
      color: "black",
    },
  },
};

const ThemeContext = createContext(theme.dark);

export default ThemeContext;
