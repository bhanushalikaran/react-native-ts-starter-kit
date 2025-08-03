import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useColorScheme } from "react-native";
import { ThemeColors, ThemeType } from "../../theme/types";
import { DarkThemeColors, LightThemeColors } from "../../theme/colors";

interface ThemeContextProps {
  theme: ThemeType;
  colors: typeof LightThemeColors;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  colors: LightThemeColors,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(systemColorScheme || "light");

  useEffect(() => {
    setTheme(systemColorScheme === "dark" ? "dark" : "light");
  }, [systemColorScheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const colors: ThemeColors = useMemo(
    () => (theme === "light" ? LightThemeColors : DarkThemeColors),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
