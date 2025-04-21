import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

interface AppMenuProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
}

export const AppMenu: React.FC<AppMenuProps> = ({
  open,
  handleClose,
  anchorEl,
}) => {
  const handleItemClick = () => {
    handleClose();
  };

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <MenuItem onClick={handleItemClick}>
        <Link href="/resume">Resume</Link>
      </MenuItem>
      <MenuItem onClick={handleItemClick}>
        <Link href="/projects">Projects</Link>
      </MenuItem>
      <MenuItem onClick={handleItemClick}>
        <Link href="/now">Now</Link>
      </MenuItem>
      <MenuItem onClick={handleItemClick}>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem onClick={handleItemClick}>
        <Link href="/contact">Contact</Link>
      </MenuItem>
    </Menu>
  );
};
