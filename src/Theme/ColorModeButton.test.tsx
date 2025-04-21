import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorModeButton from './ColorModeButton';
import '@testing-library/jest-dom';
import { useColorScheme } from '@mui/material';

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useColorScheme: jest.fn(),
  };
});

describe('ColorModeButton', () => {
  it('renders LightModeIcon when mode is "light"', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: jest.fn(),
    });

    render(<ColorModeButton />);

    // Assert
    expect(screen.getByTestId('LightModeRoundedIcon')).toBeInTheDocument();
  });

  it('renders DarkModeIcon when mode is "dark"', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'dark',
      setMode: jest.fn(),
    });

    render(<ColorModeButton />);

    // Assert
    expect(screen.getByTestId('DarkModeRoundedIcon')).toBeInTheDocument();
  });

  it('calls setMode with "dark" when mode is "light"', () => {
    // Arrange
    const setModeMock = jest.fn();
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light',
      setMode: setModeMock,
    });

    render(<ColorModeButton />);

    // Act
    fireEvent.click(screen.getByRole('button'));

    // Assert
    expect(setModeMock).toHaveBeenCalledWith('dark');
  });

  it('calls setMode with "light" when mode is "dark"', () => {
    // Arrange
    const setModeMock = jest.fn();
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'dark',
      setMode: setModeMock,
    });

    render(<ColorModeButton />);

    // Act
    fireEvent.click(screen.getByRole('button'));

    // Assert
    expect(setModeMock).toHaveBeenCalledWith('light');
  });

  it('renders nothing if mode is undefined (e.g. before hydration)', () => {
    // Arrange
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: undefined,
      setMode: jest.fn(),
    });

    render(<ColorModeButton />);

    // Assert
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
