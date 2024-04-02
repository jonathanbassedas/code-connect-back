/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: [
    'src',
    'node_modules'
  ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: '.',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{controller,model}.ts',
    '!src/**/*.spec.ts',
    '!src/main.ts',
  ],
  testRegex: '.*\\.spec\\.ts$',
};
