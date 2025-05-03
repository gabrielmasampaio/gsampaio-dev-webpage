import '@testing-library/jest-dom';
import React from 'react';
import PropTypes from 'prop-types';

global.mockUseRouter = jest.fn();

const LinkMock = ({ href, children, target }) => (
  <a href={href} target={target}>
    {children}
  </a>
);

LinkMock.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string || undefined,
};

jest.mock('next/link', () => LinkMock);

jest.mock('@/components/FontAwesomeSvgIcon/FontAwesomeSvgIcon', () => ({
  FontAwesomeSvgIcon: () => <span data-testid="fa-icon" />,
}));

// Example usage of logging the testing playground URL in the console:
// screen.logTestingPlaygroundURL();
