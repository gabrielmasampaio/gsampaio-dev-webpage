import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import outUrls from '@/lib/outUrls';

describe('SocialLinks', () => {
  it('renders all external links with the right URLs, target and icons', () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);

    const cases = [
      { url: outUrls.linkedIn },
      { url: outUrls.github },
      { url: outUrls.youtube },
      { url: outUrls.twitch },
    ];

    links.forEach((link, i) => {
      expect(link).toHaveAttribute('href', cases[i].url);
      expect(link).toHaveAttribute('target', '_blank');

      expect(link.querySelector('[data-testid="fa-icon"]')).toBeInTheDocument();
    });
  });
});
