import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import * as mui from '@mui/material';
import theme from '@/Theme/theme';
import { ThemeProvider } from '@mui/material/styles';

jest.mock('@/components/MobileNavLinks/MobileNavLinks', () => ({
  MobileNavLinks: (props: { open: boolean }) => (
    <div data-testid="mobile-nav-links">{props.open ? 'open' : 'closed'}</div>
  ),
}));
jest.mock('../DesktopNavLinks/DesktopNavLinks', () => ({
  __esModule: true,
  default: () => <div data-testid="desktop-nav-links" />,
}));

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: jest.fn(),
  };
});
const mediaMock = mui.useMediaQuery as jest.Mock;

describe('NavBar – Mobile layout', () => {
  beforeAll(() => mediaMock.mockReturnValue(false));
  beforeEach(() => jest.clearAllMocks());

  it('renders logo (75×75 black), mobile button and closed MobileNavLinks', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    const logo = screen.getByAltText('GS Logo') as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      expect.stringContaining('gsampaio-logo-black.svg'),
    );
    expect(logo).toHaveAttribute('width', '75');
    expect(logo).toHaveAttribute('height', '75');

    const menuBtn = await screen.findByLabelText(/open menu/i);
    expect(menuBtn).toBeInTheDocument();

    expect(screen.getByTestId('mobile-nav-links')).toHaveTextContent('closed');
  });

  it('toggles MobileNavLinks open/closed on button click', async () => {
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

  it('renders logo (100×100 black), desktop links, and no mobile button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    const logo = screen.getByAltText('GS Logo') as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      expect.stringContaining('gsampaio-logo-black.svg'),
    );
    expect(logo).toHaveAttribute('width', '100');
    expect(logo).toHaveAttribute('height', '100');

    expect(screen.getByTestId('desktop-nav-links')).toBeInTheDocument();
    expect(screen.queryByLabelText(/open menu/i)).toBeNull();
  });
});
