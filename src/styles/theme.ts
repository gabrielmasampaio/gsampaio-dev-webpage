import { createTheme } from '@mui/material/styles';
import { colorSchemes } from '@/Theme/themePrimitives';

const theme = createTheme({
  colorSchemes: {
    ...colorSchemes,
  },
  cssVariables: {
    colorSchemeSelector: 'class',
    cssVarPrefix: '',
  },
});

export default theme;
