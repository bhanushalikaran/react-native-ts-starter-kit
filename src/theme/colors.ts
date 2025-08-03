import { ThemeColors } from "./types";

export const LightThemeColors: ThemeColors = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#3366FF',
  card: '#F3F4F6',
  border: '#D1D5DB',
  muted: '#6B7280',

  button: {
    primary: {
      idle: {
        background: '#0066CC',
        text: '#FFFFFF',
      },
      pressed: {
        background: '#004F9E',
        text: '#FFFFFF',
      },
    },
    secondary: {
      idle: {
        background: 'white',
        text: '#0066CC',
        border: '#0066CC',
      },
      pressed: {
        background: '#E6F2FD',
        text: '#0066CC',
        border: '#0066CC',
      },
    },
    tertiary: {
      idle: {
        background: 'transparent',
        text: '#0066CC',
      },
      pressed: {
        background: '#E6F2FD',
        text: '#0066CC',
      },
    },
  },
};

export const DarkThemeColors: ThemeColors = {
  background: '#121212',
  text: '#FFFFFF',
  primary: '#90CAF9',
  card: '#1E1E1E',
  border: '#333',
  muted: '#9CA3AF',

  button: {
    primary: {
      idle: {
        background: '#43ABFF',
        text: '#2F2F2F',
      },
      pressed: {
        background: '#13223C',
        text: '#43ABFF',
      },
    },
    secondary: {
      idle: {
        background: '#292B2D',
        text: '#43ABFF',
        border: '#43ABFF',
      },
      pressed: {
        background: '#13223C',
        text: '#43ABFF',
        border: '#43ABFF',
      },
    },
    tertiary: {
      idle: {
        background: 'transparent',
        text: '#43ABFF',
      },
      pressed: {
        background: '#13223C',
        text: '#43ABFF',
      },
    },
  },
};
