// const tsConfig = require('./tsconfig.json')

module.exports = function (wallaby) {
  return {
    name: 'Chandler',
    files: [
      'src/**/*.ts',
      'src/**/*.tsx',
      {pattern: 'src/**/*.json', instrument: false},
      {pattern: 'setupJest.ts', instrument: false},
      'tsconfig.json',
      'package.json',
      '!src/**/*.spec.ts',
      '!src/**/*.spec.tsx',
    ],
    tests: [
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({module: "es2015", jsx: "react"})
    },
    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {
          sourceMap: true,
          plugins: ['transform-es2015-modules-commonjs'],
          presets: ['jest']
        })
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },

    slowTestThreshold: 500,
    lowCoverageThreshold: 85,
  };
};
