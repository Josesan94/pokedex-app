const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // This file will contain setup like importing @testing-library/jest-dom
  // If you're using TypeScript with strict mode, you might need to add some path aliases depending on your tsconfig setup
  moduleNameMapper: {
    // Handle module aliases (These paths need to match with tsconfig paths)
    '^@components/(.*)$': '<rootDir>/components/$1',
    // You can add more mappings if you use other aliases
  },
  // Add more settings here to match your needs
};

// Create the actual config using Next.js and your custom configuration
module.exports = createJestConfig(customJestConfig);