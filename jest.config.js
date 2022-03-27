module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.ts'],
  coveragePathIgnorePatterns: [],
  coverageReporters: [
    //   'clover',
    //   'json',
    // 'json-summary',
    'text',
    // 'text-summary',
    'html',
    //   'lcov',
  ],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],
  verbose: true,
};
