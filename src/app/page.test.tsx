import Home from './page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('should render the main content', () => {
    render(<Home />);

    const mainHeading = screen.getByRole('heading', { name: /Home/i });

    expect(mainHeading).toBeInTheDocument();
  });
});
