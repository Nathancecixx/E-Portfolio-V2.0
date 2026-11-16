import '@testing-library/jest-dom';

// RTL 13 targets React 18.0's test-utils entry point. React 18.3 moved act
// into React itself; bridge that API without hiding console warnings.
jest.mock('react-dom/test-utils', () => ({
  ...jest.requireActual('react-dom/test-utils'),
  act: jest.requireActual('react').act,
}));
