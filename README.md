<p align="center"><img src="https://app.monicahq.com/img/small-logo.png"></p>
<h1 align="center">Chandler</h1>

<p align="center">
<a href="https://travis-ci.org/monicahq/chandler"><img src="https://travis-ci.org/monicahq/chandler.svg?branch=master" alt="Build Status"></a>
<a class="badge-align" href="https://www.codacy.com/app/Mokto/chandler?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=monicahq/chandler&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/39824871b63643c0b19ce4326d5f8c28"/></a>
<a href="https://codecov.io/gh/monicahq/chandler"><img src="https://codecov.io/gh/monicahq/chandler/branch/develop/graph/badge.svg" /></a>
<a href="https://david-dm.org/monicahq/chandler"><img src="https://david-dm.org/monicahq/chandler/status.svg" alt="License"></a>
<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/monicahq/chandler.svg" /></a>
<a href="https://github.com/djaiss/monica/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-AGPL-blue.svg" alt="License"></a>
</p>


## Introduction

Chandler is the official [Monica](https://github.com/monicahq/monica) mobile app. It is not yet available on the App Store and the Play Store as it is (really) on its early stage.

We will soon post more information regarding the way you could contribute.

## Installation

This project is a react-native project.

$ yarn

## Run the project for development

$ `npm start` will serve the files in development

$ Then `npm run ios [-- --device]` or `npm run android [-- --device]` to run the app on your device/simulator.

## Environments

There are 3 environments :

- Development : 
- Staging : Will be used for beta testing purposes (Testflight + Google Play Developer)
- Production : Will be available on the Stores

## AppCenter + Codepush

- AppCenter (from Microsoft) is used for general insights (on production only) and crash reports (staging + production)
- CodePush will allow us to push new versions faster (without going through the Store Validation processs)

## Instructions to change splash screens

* https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae

## Contact

If you need to talk, you can contact me at regis AT monicahq DOT com. You can also reach me [on Twitter](https://twitter.com/djaiss).

## Thank you, open source

Monica use a lot of open source projects and we thank them with all our hearts. We hope that providing Monica as an free, open source project will help other people the same way those softwares have helped us.

## License

Licensed under the AGPL License. [View license](/LICENSE).
