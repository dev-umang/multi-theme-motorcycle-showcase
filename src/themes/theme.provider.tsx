import { FC, ReactNode, createContext, useState } from "react";
import { THEMES, ThemeKey } from "./themes";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext<{
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}>({ theme: "auroraGreen", setTheme: () => {} });

export const ThemesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeKey>("auroraGreen"); // state of the selected theme key

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={THEMES[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
