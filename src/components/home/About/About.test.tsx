import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme/theme';
import About from './About';

jest.mock('@/components/SocialLinks/SocialLinks', () => () => (
  <div data-testid="social-links" />
));

describe('About component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>,
    );
  });

  it('renders the “Who am I?” heading', () => {
    const heading = screen.getByRole('heading', {
      level: 4,
      name: /Who am I\?/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the profile image with correct src', () => {
    const img = screen.getByAltText(/profile/i);

    expect(img).toHaveAttribute('src');
    const srcAttribute = img.getAttribute('src');
    expect(srcAttribute).toContain('profile-pic.jpeg');
    expect(srcAttribute).toContain('_next/image');
  });

  it('renders the three info paragraphs', () => {
    expect(
      screen.getByText(
        /My name is Gabriel \(Gabe\) Sampaio, and I am a Fullstack Developer/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/I am currently available for freelance work/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit/i,
      ),
    ).toBeInTheDocument();
  });

  it('renders the “More about me” link with icon and correct href', () => {
    const moreLink = screen.getByRole('link', { name: /More about me/i });
    expect(moreLink).toHaveAttribute('href', '/about');
    expect(
      moreLink.querySelector('[data-testid="fa-icon"]'),
    ).toBeInTheDocument();
  });

  it('renders the SocialLinks component', () => {
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });
});
