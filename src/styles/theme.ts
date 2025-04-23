import { createTheme } from '@mui/material/styles';
import { colorSchemes, components, typography } from '@/Theme/themePrimitives';

const theme = createTheme({
  colorSchemes: {
    ...colorSchemes,
  },
  cssVariables: {
    colorSchemeSelector: '[data-theme]',
  },
  components: {
    ...components,
  },
  typography: {
    ...typography,
  },
});

export default theme;
