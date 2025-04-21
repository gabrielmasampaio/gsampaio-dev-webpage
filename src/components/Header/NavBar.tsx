'use client';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ColorModeButton from '@/Theme/ColorModeButton';

/**
 * Header Component.
 * @returns {JSX.Element} header element.
 */
export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar className="justify-between">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            GS
          </Typography>
        </IconButton>

        <div>
          <Button color="inherit"> Resume </Button>
          <Button color="inherit"> Projects </Button>
          <Button color="inherit"> Now </Button>
          <Button color="inherit"> About </Button>
          <Button color="inherit"> Contact </Button>
          <ColorModeButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};
