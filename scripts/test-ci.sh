#!/bin/bash

mv babel.config.jstest babel.config.js

trap '' 2  
npm run test -- --runInBand --coverage --testResultsProcessor="./node_modules/jest-junit-reporter" --no-watchman
trap 2

mv babel.config.js babel.config.jstest

