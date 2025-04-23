'use client';

import * as React from 'react';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavigationRoute } from '@/lib/navigationRoutes';

interface MobileNavLinksProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  routes: NavigationRoute[];
}

/**
 * Component for rendering navigation links in a mobile menu.
 * @param {MobileNavLinksProps} props - Props including menu state and navigation routes.
 * @returns {JSX.Element} The Material UI Menu component.
 */
export const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  open,
  handleClose,
  anchorEl,
  routes,
}) => {
  const handleItemClick = () => {
    handleClose();
  };

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      {routes.map((route) => (
        <MenuItem key={route.href} onClick={handleItemClick}>
          <Link
            href={route.href}
            target={route.openInNewTab ? '_blank' : undefined}
          >
            {route.label}
            {route.openInNewTab && route.label === 'resume' && (
              <OpenInNewIcon sx={{ ml: 0.5, fontSize: '0.875rem' }} />
            )}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};
