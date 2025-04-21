import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppMenu } from './AppMenu';
import '@testing-library/jest-dom';

describe('AppMenu', () => {
  const menuItems = [
    { text: 'Resume', href: '/resume' },
    { text: 'Projects', href: '/projects' },
    { text: 'Now', href: '/now' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];
  const anchorEl = document.createElement('div');
  const handleClose = jest.fn();

  it('renders the menu and all items when open=true', () => {
    render(
      <AppMenu open={true} handleClose={handleClose} anchorEl={anchorEl} />,
    );

    // the <Menu> wrapper should be present
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // each label should appear
    menuItems.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('does not render anything when open=false', () => {
    render(
      <AppMenu open={false} handleClose={handleClose} anchorEl={anchorEl} />,
    );

    expect(screen.queryByRole('menu')).toBeNull();
    menuItems.forEach(({ text }) => {
      expect(screen.queryByText(text)).toBeNull();
    });
  });

  it('calls handleClose once per click on a menu item', () => {
    render(
      <AppMenu open={true} handleClose={handleClose} anchorEl={anchorEl} />,
    );

    menuItems.forEach(({ text }) => {
      fireEvent.click(screen.getByText(text));
    });

    expect(handleClose).toHaveBeenCalledTimes(menuItems.length);
  });

  it('renders each item as a link with the correct href', () => {
    render(
      <AppMenu open={true} handleClose={handleClose} anchorEl={anchorEl} />,
    );

    menuItems.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toHaveAttribute('href', href);
    });
  });
});
