import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import { useColorScheme } from '@mui/material';

// Mocks useColorScheme from MUI
jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useColorScheme: jest.fn(),
  };
});

describe('NavBar', () => {
  it('renders the logo text "GS"', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: jest.fn(),
    });
    render(<NavBar />);

    // Assert
    expect(screen.getByText('GS')).toBeInTheDocument();
  });

  it('renders all navigation buttons', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: jest.fn(),
    });
    render(<NavBar />);

    // Assert
    expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /now/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it('renders LightModeIcon when mode is light', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: jest.fn(),
    });
    render(<NavBar />);

    // Assert
    expect(screen.getByTestId('LightModeRoundedIcon')).toBeInTheDocument();
  });

  it('renders DarkModeIcon when mode is dark', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'dark',
      setMode: jest.fn(),
    });
    render(<NavBar />);

    // Assert
    expect(screen.getByTestId('DarkModeRoundedIcon')).toBeInTheDocument();
  });

  it('calls setMode with "dark" when mode is light and button is clicked', () => {
    // Arrange
    const setModeMock = jest.fn();
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: setModeMock,
    });
    render(<NavBar />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: '' })); // IconButton has no accessible name

    // Assert
    expect(setModeMock).toHaveBeenCalledWith('dark');
  });

  it('calls setMode with "light" when mode is dark and button is clicked', () => {
    // Arrange
    const setModeMock = jest.fn();
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'dark',
      setMode: setModeMock,
    });
    render(<NavBar />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: '' }));

    // Assert
    expect(setModeMock).toHaveBeenCalledWith('light');
  });
});
