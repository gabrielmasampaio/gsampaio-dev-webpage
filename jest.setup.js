// jest.setup.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

global.mockUseRouter = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: global.mockUseRouter,
    // adicione outros métodos e propriedades do router que você usa
  }),
}));
