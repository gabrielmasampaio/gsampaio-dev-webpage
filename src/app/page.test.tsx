import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

jest.mock('next/image', () => (props: any) => <img {...props} alt="" />);

jest.mock('@/components/home/Hero/Hero', () => ({
  __esModule: true,
  default: () => <div data-testid="hero-section">[Hero]</div>,
}));
jest.mock('@/components/home/About/About', () => ({
  __esModule: true,
  default: () => <div data-testid="about-section">[About]</div>,
}));

describe('Home page', () => {
  it('renders both Hero and About sections', () => {
    render(<Home />);

    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
  });
});
