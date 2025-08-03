import { useContext } from 'react';
import { ThemeContext } from '../../services/context/ThemeContext';

export const useTheme = () => {
  const { colors, theme, toggleTheme } = useContext(ThemeContext);
  return { colors, theme, toggleTheme };
};
