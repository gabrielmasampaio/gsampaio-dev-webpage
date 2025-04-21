import '@testing-library/jest-dom';
import React from 'react';
import PropTypes from 'prop-types';

global.mockUseRouter = jest.fn();

const LinkMock = ({ href, children }) => <a href={href}>{children}</a>;

LinkMock.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

jest.mock('next/link', () => LinkMock);
