import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import * as mui from '@mui/material';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

jest.mock('@/components/MobileNavLinks/MobileNavLinks', () => ({
  MobileNavLinks: (props) => (
    <div data-testid="mobile-nav-links">{props.open ? 'open' : 'closed'}</div>
  ),
}));
jest.mock('../DesktopNavLinks/DesktopNavLinks', () => ({
  __esModule: true,
  default: () => <div data-testid="desktop-nav-links" />,
}));

// mock useMediaQuery
jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return { ...actual, useMediaQuery: jest.fn() };
});
const mediaMock = mui.useMediaQuery as jest.Mock;

describe('NavBar – Mobile layout', () => {
  beforeAll(() => mediaMock.mockReturnValue(false));
  beforeEach(() => jest.clearAllMocks());

  it('renders logo, menu button, and MobileNavLinks (closed)', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    // logo
    expect(screen.getByText('GS')).toBeInTheDocument();

    // menu button
    const btn = await screen.findByLabelText(/open menu/i);
    expect(btn).toBeInTheDocument();

    // MobileNavLinks rendered in closed state
    expect(screen.getByTestId('mobile-nav-links')).toHaveTextContent('closed');
  });

  it('toggles MobileNavLinks open/closed on menu button click', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    const btn = await screen.findByLabelText(/open menu/i);
    expect(screen.getByTestId('mobile-nav-links')).toHaveTextContent('closed');

    await user.click(btn);
    expect(screen.getByTestId('mobile-nav-links')).toHaveTextContent('open');
  });
});

describe('NavBar – Desktop layout', () => {
  beforeAll(() => mediaMock.mockReturnValue(true));
  beforeEach(() => jest.clearAllMocks());

  it('renders logo and DesktopNavLinks, hides mobile menu button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    // wait for any loading to finish
    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    expect(screen.getByText('GS')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-nav-links')).toBeInTheDocument();
    expect(screen.queryByLabelText(/open menu/i)).toBeNull();
  });
});
