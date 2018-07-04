module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/setupJest.ts",
  preset: "react-native",
  transform: {
      "^.+\\.ts?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest"
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
  coveragePathIgnorePatterns : [
    "<rootDir>/node_modules/",
    "<rootDir>/src/redux/configureStore.ts",
    "<rootDir>/src/redux/rootReducer.ts",
    "<rootDir>/src/models/",
    "<rootDir>/src/navigator/",
    "<rootDir>/src/theme/",
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
