import React from 'react';
import { render, screen } from '@testing-library/react';
import DesktopNavLinks from './DesktopNavLinks';
import '@testing-library/jest-dom';
import { NavigationRoute } from '@/lib/navigationRoutes';

describe('DesktopNavLinks', () => {
  const routes: NavigationRoute[] = [
    { label: 'resume', href: '/resume', openInNewTab: true },
    { label: 'projects', href: '/projects', openInNewTab: false },
    { label: 'now', href: '/now', openInNewTab: false },
    { label: 'about', href: '/about', openInNewTab: false },
    { label: 'contact', href: '/contact', openInNewTab: false },
  ];

  it('renders one link per route with correct href', () => {
    render(<DesktopNavLinks routes={routes} />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(routes.length);

    routes.forEach((route) => {
      const link = screen.getByRole('link', {
        name: new RegExp(route.label, 'i'),
      });
      expect(link).toHaveAttribute('href', route.href);
    });
  });

  it('adds target="_blank" only for routes with openInNewTab', () => {
    render(<DesktopNavLinks routes={routes} />);

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toHaveAttribute('target', '_blank');

    routes
      .filter((r) => !r.openInNewTab)
      .forEach((r) => {
        const link = screen.getByRole('link', {
          name: new RegExp(r.label, 'i'),
        });
        expect(link).not.toHaveAttribute('target');
      });
  });

  it('renders an external icon only for the resume route', () => {
    render(<DesktopNavLinks routes={routes} />);

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink.querySelector('svg')).toBeInTheDocument();

    routes
      .filter((r) => r.label !== 'resume')
      .forEach((r) => {
        const link = screen.getByRole('link', {
          name: new RegExp(r.label, 'i'),
        });
        expect(link.querySelector('svg')).not.toBeInTheDocument();
      });
  });
});
