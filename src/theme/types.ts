export type ThemeType = 'light' | 'dark';

export type ButtonStateColors = {
  idle: {
    background: string;
    text: string;
    border?: string;
  };
  pressed: {
    background: string;
    text: string;
    border?: string;
  };
  disabled?: {
    background: string;
    text: string;
    border?: string;
  };
};

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  card: string;
  border: string;

  // Alerts
  success?: string;
  error?: string;
  warning?: string;
  muted?: string;

  button: {
    primary: ButtonStateColors;
    secondary: ButtonStateColors;
    tertiary: ButtonStateColors;
  };
}
