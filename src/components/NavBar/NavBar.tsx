'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { AppMenu } from '../AppMenu/AppMenu'; // Import the AppMenu component

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
                <Typography variant="button" component="div" type={'button'}>
                  GS
                </Typography>
              </Link>
            </div>

            {isLargeScreen ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href={'/resume'}>
                  <Button color="inherit">Resume</Button>
                </Link>
                <Link href={'/projects'}>
                  <Button color="inherit"> Projects </Button>
                </Link>
                <Link href={'/now'}>
                  <Button color="inherit"> Now </Button>
                </Link>
                <Link href={'/about'}>
                  <Button color="inherit"> About </Button>
                </Link>
                <Link href={'/contact'}>
                  <Button color="inherit"> Contact </Button>
                </Link>
              </div>
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
                <AppMenu
                  open={open}
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                />
              </>
            )}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
