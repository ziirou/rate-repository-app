import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    white: '#ffffff',
    primary: '#0366d6',
    mainBg: '#e1e4e8',
    appBarBg: '#24292e',
    itemBg: '#ffffff',
    formBg: '#ffffff',
    fieldBg: '#f9f9f9',
    border: '#bfbfbf',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
