// src/components/home/Hero/Hero.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme/theme';
import Hero from './Hero';

describe('Hero component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>,
    );
  });

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Crafting Digital Solutions Through Code/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the “View my Projects” link with correct attributes', () => {
    const projLink = screen.getByRole('link', {
      name: /View my Projects/i,
    });
    expect(projLink).toHaveAttribute('href', '/projects');
    expect(projLink).toHaveClass('MuiButton-containedWarning');
    expect(
      projLink.querySelector('[data-testid="fa-icon"]'),
    ).toBeInTheDocument();
  });

  it('renders the “View my Resume” link with correct attributes and icon', () => {
    const resumeLink = screen.getByRole('link', {
      name: /View my Resume/i,
    });
    expect(resumeLink).toHaveAttribute('href', '/gabriel-sampaio-resume.pdf');
    expect(resumeLink).toHaveAttribute('target', '_blank');
    expect(resumeLink).toHaveClass('MuiButton-outlinedPrimary');
    expect(
      resumeLink.querySelector('svg[data-testid="FileOpenIcon"]'),
    ).toBeInTheDocument();
  });
});
