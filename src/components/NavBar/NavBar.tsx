'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { MobileNavLinks } from '@/components/MobileNavLinks/MobileNavLinks';
import { navigationRoutes } from '@/lib/navigationRoutes';
import DesktopNavLinks from '../DesktopNavLinks/DesktopNavLinks';

/**
 * Navigation Bar Component.
 * @returns {JSX.Element} navbar element.
 */
export const NavBar = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [isLargeScreen]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (loading) return <LinearProgress />;

  return (
    <AppBar position="static" color="paper">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Link href={'/'}>
            <Image
              src="/gsampaio-logo-white.svg"
              alt="GS Logo"
              width={65}
              height={50}
            />
          </Link>
        </div>

        {isLargeScreen ? (
          <DesktopNavLinks routes={navigationRoutes} />
        ) : (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <MobileNavLinks
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
              routes={navigationRoutes}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
