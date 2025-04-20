import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('should render the main content', () => {
    render(<Home />);

    const mainHeading = screen.getByRole('heading', { name: /Next.js!/i });

    const nextJsLogo = screen.getByAltText('Next.js logo');

    expect(mainHeading).toBeInTheDocument();
    expect(nextJsLogo).toBeInTheDocument();
  });
});
