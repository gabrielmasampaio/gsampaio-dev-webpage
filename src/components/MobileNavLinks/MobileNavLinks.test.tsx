import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MobileNavLinks } from './MobileNavLinks';
import '@testing-library/jest-dom';

const routes = [
  { label: 'resume', href: '/resume', openInNewTab: true },
  { label: 'projects', href: '/projects', openInNewTab: false },
  { label: 'now', href: '/now', openInNewTab: false },
  { label: 'about', href: '/about', openInNewTab: false },
  { label: 'contact', href: '/contact', openInNewTab: false },
];

describe('MobileNavLinks', () => {
  let anchorEl: HTMLElement;
  let handleClose: jest.Mock;

  beforeEach(() => {
    anchorEl = document.createElement('div');
    handleClose = jest.fn();
  });

  it('renders no menu items when open=false', () => {
    render(
      <MobileNavLinks
        open={false}
        handleClose={handleClose}
        anchorEl={anchorEl}
        routes={routes}
      />,
    );

    expect(screen.queryAllByRole('menuitem')).toHaveLength(0);
  });

  it('renders all menu items when open=true', () => {
    render(
      <MobileNavLinks
        open={true}
        handleClose={handleClose}
        anchorEl={anchorEl}
        routes={routes}
      />,
    );

    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(routes.length);

    routes.forEach(({ label, href, openInNewTab }) => {
      const menuItem = screen.getByRole('menuitem', {
        name: new RegExp(label, 'i'),
      });
      expect(menuItem).toHaveTextContent(label);

      const link = menuItem.querySelector('a');
      expect(link).toHaveAttribute('href', href);

      if (openInNewTab && label === 'resume') {
        expect(link).toHaveAttribute('target', '_blank');
      } else {
        expect(link).not.toHaveAttribute('target');
      }
    });
  });

  it('calls handleClose when a menu item is clicked', () => {
    render(
      <MobileNavLinks
        open={true}
        handleClose={handleClose}
        anchorEl={anchorEl}
        routes={routes}
      />,
    );

    routes.forEach(({ label }) => {
      const item = screen.getByRole('menuitem', {
        name: new RegExp(label, 'i'),
      });
      fireEvent.click(item);
    });

    expect(handleClose).toHaveBeenCalledTimes(routes.length);
  });

  it('renders external icon only for the resume route', () => {
    render(
      <MobileNavLinks
        open={true}
        handleClose={handleClose}
        anchorEl={anchorEl}
        routes={routes}
      />,
    );

    const resumeItem = screen.getByRole('menuitem', { name: /resume/i });
    expect(resumeItem.querySelector('svg')).toBeInTheDocument();

    routes
      .filter((r) => r.label !== 'resume')
      .forEach(({ label }) => {
        const item = screen.getByRole('menuitem', {
          name: new RegExp(label, 'i'),
        });
        expect(item.querySelector('svg')).not.toBeInTheDocument();
      });
  });
});
