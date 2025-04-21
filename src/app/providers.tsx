'use client';

import * as React from 'react';
import { NavBar } from '@/components/Header/NavBar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProviderProps } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import InitColorSchemeScript from '@mui/system/InitColorSchemeScript';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider>
        <NavBar />
        {children}
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
}
