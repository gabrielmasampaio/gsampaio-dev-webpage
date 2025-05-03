'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileNavLinks } from '@/components/MobileNavLinks/MobileNavLinks';
import { navigationRoutes } from '@/lib/navigationRoutes';
import DesktopNavLinks from '../DesktopNavLinks/DesktopNavLinks';

export const NavBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setLoading(false);
  }, [isDesktop]);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  if (loading) return <LinearProgress />;

  return (
    <AppBar
      className="lg:px-25"
      position="relative"
      elevation={0}
      color="paper"
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              flexShrink: 0,
              alignItems: 'center',
            }}
          >
            <picture>
              <source
                srcSet="/gsampaio-logo-white.svg"
                media="(prefers-color-scheme: dark)"
              />
              <Image
                src="/gsampaio-logo-black.svg"
                alt="GS Logo"
                width={65}
                height={50}
                priority
              />
            </picture>
          </Link>
        </Box>

        {isDesktop && (
          <Box sx={{ flexGrow: 0, mx: 4 }}>
            <DesktopNavLinks routes={navigationRoutes} />
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isDesktop ? null : (
            <>
              <IconButton
                size="large"
                edge="end"
                aria-label="open menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <MobileNavLinks
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                handleClose={handleMenuClose}
                routes={navigationRoutes}
              />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
