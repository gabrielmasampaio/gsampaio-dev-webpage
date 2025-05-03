'use client';

import { createTheme } from '@mui/material/styles';
import {
  colorSchemes,
  components as primComponents,
  shadows,
  shape,
  spacing,
  typography as primTypography,
} from './themePrimitives';

const theme = createTheme({
  colorSchemes,
  cssVariables: true,
  spacing,
  shape,
  shadows,
  typography: primTypography,
  components: primComponents,
});

export default theme;
