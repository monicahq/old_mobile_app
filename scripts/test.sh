#!/bin/bash

mv babel.config.jstest babel.config.js

trap '' 2  
npm run test
trap 2

mv babel.config.js babel.config.jstest

