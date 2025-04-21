import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import * as mui from '@mui/material';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return { ...actual, useMediaQuery: jest.fn() };
});
const mediaMock = mui.useMediaQuery as jest.Mock;

describe('NavBar – Mobile layout', () => {
  beforeAll(() => mediaMock.mockReturnValue(false));
  beforeEach(() => jest.clearAllMocks());

  it('shows logo and menu button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    expect(screen.getByText('GS')).toBeInTheDocument();
    expect(await screen.findByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it('switches to desktop when screen size changes', async () => {
    mediaMock.mockReturnValue(false);
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    expect(screen.queryByLabelText(/open menu/i)).toBeInTheDocument();

    mediaMock.mockReturnValue(true);
    rerender(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    await waitFor(() =>
      expect(screen.queryByLabelText(/open menu/i)).toBeNull(),
    );
  });
});

describe('NavBar – Desktop', () => {
  beforeAll(() => {
    mediaMock.mockReturnValue(true); // force desktop layout
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays the GS logo on large screens', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    expect(screen.getByText('GS')).toBeInTheDocument();
  });

  it('renders navigation links after loading', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    // wait for the loading spinner to disappear
    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    ['Resume', 'Projects', 'Now', 'About', 'Contact'].forEach((label) => {
      const navLink = screen.getByRole('link', {
        name: new RegExp(label, 'i'),
      });
      expect(navLink).toBeInTheDocument();
    });
  });

  it('renders links with correct hrefs', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    const mapping = {
      Resume: '/resume',
      Projects: '/projects',
      Now: '/now',
      About: '/about',
      Contact: '/contact',
    } as const;

    for (const [label, href] of Object.entries(mapping)) {
      const link = screen.getByRole('link', { name: new RegExp(label, 'i') });
      expect(link).toHaveAttribute('href', href);
    }
  });

  it('does not render the mobile menu button on large screens', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    expect(screen.queryByLabelText(/open menu/i)).toBeNull();
  });
});

describe('NavBar – Common Behavior', () => {
  it('never leaves a lingering loading spinner', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    expect(screen.queryByRole('progressbar')).toBeNull();
  });
});
