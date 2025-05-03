'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavigationRoute } from '@/lib/navigationRoutes';

interface DesktopNavLinksProps {
  routes: NavigationRoute[];
}

/**
 * Component for rendering navigation links on desktop screens.
 * @param {DesktopNavLinksProps} props - Component props containing the navigation routes.
 * @returns {JSX.Element} A div containing navigation buttons.
 */
const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ routes }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          target={route.openInNewTab ? '_blank' : undefined}
        >
          <Button
            color={route.primary ? 'primary' : 'inherit'}
            variant={route.primary ? 'contained' : 'text'}
            component="span"
            sx={{ ml: 1, fontSize: '1rem' }}
          >
            {route.label}
            {route.openInNewTab && route.label === 'resume' && (
              <OpenInNewIcon
                className="mb-2.5"
                sx={{ ml: 0.5, fontSize: '0.875rem' }}
              />
            )}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavLinks;
