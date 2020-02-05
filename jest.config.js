// const tsJest = require('ts-jest/jest-preset');
// const mongoJest = require('@shelf/jest-mongodb/jest-preset');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/*.(ts|js)'],
  coverageReporters: ['lcov', 'text'],
  preset: 'ts-jest',
  testTimeout: 10 * 1000,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.spec.(ts|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
