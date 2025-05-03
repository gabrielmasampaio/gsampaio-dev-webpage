import { createTheme } from '@mui/material/styles';

const rawColors = {
  white: '#f7f7f7',
  black: '#1d1d1f',
  grey: {
    100: '#f4f4f4',
    200: '#e2e2e2',
    700: '#4a4a4a',
    800: '#333333',
  },
  brand: {
    primary: {
      500: '#00d8fd',
      600: '#007a89',
      700: '#00455a',
    },
  },
  orangeWheel: '#f7811a',
  richBlack: '#000010',
  mediumBlack: '#000015',
  vividSkyBlue: '#00d8fc',
  blueMunsell: '#068bab',
  oxfordBlue: '#041e41',
};

const defaultTheme = createTheme();
const elevation = {
  level0: '0px 0px 0px 0px rgba(0,0,0,0)',
  level1:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  ...defaultTheme.shadows.slice(2),
};

const spacing = 8;

const typography = {
  fontFamily: 'var(--font-poppins)',
};

const shadows = elevation;

const shape = {
  borderRadius: 4,
};

const colorSchemes = {
  light: {
    palette: {
      primary: {
        main: rawColors.brand.primary[600],
        contrastText: rawColors.white,
      },
      text: {
        primary: '#00060e',
        secondary: rawColors.grey[700],
        brand: rawColors.brand.primary[600],
        disabled: rawColors.grey[200],
      },
      background: {
        default: rawColors.white,
        paper: rawColors.grey[100],
      },
      divider: rawColors.grey[200],
    },
  },
  dark: {
    palette: {
      primary: {
        main: rawColors.brand.primary[500],
        contrastText: rawColors.black,
      },
      text: {
        primary: rawColors.white,
        secondary: rawColors.grey[200],
        brand: rawColors.brand.primary[500],
        disabled: rawColors.grey[700],
      },
      background: {
        default: rawColors.richBlack,
        paper: rawColors.mediumBlack,
      },
      divider: rawColors.grey[700],
    },
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
};

export {
  rawColors,
  elevation,
  spacing,
  typography,
  shadows,
  shape,
  colorSchemes,
  components,
};
