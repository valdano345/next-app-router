import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load
  dir: "./",
});

// Add any custom config to be passed to Jest

/** @type {import('jest').Config} */

const config = {
  // Add more setup options before each test is run
  //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  modulePaths: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.type.ts",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/src/app/api/**",
    "!<rootDir>/src/app/lib/**",
    "!<rootDir>/src/app/middlewares/**",
    "!<rootDir>/src/app/middlewares.ts/**",
  ],

  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure
export default createJestConfig(config);
