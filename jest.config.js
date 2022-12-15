module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(<rootDir>/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  clearMocks: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-elements|rneui|@rneui|@react-native-community|@react-navigation/*)',
  ],
  cacheDirectory: '.jest/cache',
};
