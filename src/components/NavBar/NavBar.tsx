'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
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

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <AppBar position="static" color="paper">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link href={'/'}>
                <Typography variant="button" component="div">
                  GS
                </Typography>
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
      )}
    </>
  );
};
