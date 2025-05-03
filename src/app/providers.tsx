'use client';

import * as React from 'react';
import { NavBar } from '@/components/NavBar/NavBar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '@/Theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
