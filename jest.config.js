module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/setupJest.ts",
  preset: "react-native",
  transform: {
      "^.+\\.ts?$": "ts-jest",
      "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "<rootDir>/src/**/*.spec.{ts,tsx}"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    "text",
    "lcov"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[@./a-zA-Z0-9$_-]+\\.(png|gif)$": "RelativeImageStub"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-navigation|moment)"
  ],
  globals: {
    jest: true
  }
}
