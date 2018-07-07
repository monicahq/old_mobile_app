<p align="center"><img src="https://user-images.githubusercontent.com/5103928/40578970-c222a396-60eb-11e8-826f-6c6d4a42419f.png"></p>
<h1 align="center">Monica Mobile Application</h1>
<h3 align="center">Personal Relationship Manager</h3>

<p align="center">
  <a href="https://travis-ci.org/monicahq/chandler"><img src="https://travis-ci.org/monicahq/chandler.svg?branch=develop" alt="Build Status"></a>
  <a href="https://circleci.com/gh/monicahq/chandler"><img src="https://circleci.com/gh/monicahq/chandler.svg?style=shield" alt="Build Status"></a>
  <a href="https://codecov.io/gh/monicahq/chandler"><img src="https://codecov.io/gh/monicahq/chandler/branch/develop/graph/badge.svg" /></a>
</p>


<p align="center">
  <a class="badge-align" href="https://slack.monicahq.com"><img src="https://slack.monicahq.com/badge.svg"></a>
  <a class="badge-align" href="https://www.codacy.com/app/Mokto/chandler?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=monicahq/chandler&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/39824871b63643c0b19ce4326d5f8c28"/></a>
  <a href="https://david-dm.org/monicahq/chandler"><img src="https://david-dm.org/monicahq/chandler/status.svg" alt="License"></a>
  <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/monicahq/chandler.svg" /></a>
  <a href="https://github.com/djaiss/monica/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-AGPL-blue.svg" alt="License"></a>
</p>


* [Introduction](#introduction)
* [Get started](#get-started)
    * [With Monica official server](#with-monica-official-server)
    * [With a standalone server](#with-a-standalone-server)
* [Running the app locally](#running-the-app-locally)
* [Contribute](#contribute)
* [Contact](#contact)
* [Thank you, open source](#thank-you-open-source)
* [License](#license)

<!-- /MarkdownTOC -->


## Introduction

Chandler is [Monica](https://github.com/monicahq/monica)'s official mobile app. Monica is an open source personal relationship manager available as a web application. While the web app has many features, the mobile application currently has a limited set of features. It lets you read your data from your web account. However, we are actively working on it and you will soon be able to:

* add/edit a contact
* add/edit activities
* add/edit reminders
* add/edit notes
* add/edit calls
* add/edit debts
* add/edit tasks


* Chandler is developed with [React Native](https://facebook.github.io/react-native/), a Facebook technology which allows you to build *real native* apps using only javascript. The philosophy behind this is `learn once, write everywhere`. [Facebook's post about React Native](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/) explains it really well.
* CircleCI is running unit tests and checking typings. Travis is running E2E tests.

## Get started

### With Monica official server

If you are you using [Monica official server](https://app.monicahq.com), it's very simple. You just have to install the app from the [iOS App Store](https://itunes.apple.com/ca/app/monica-personal-crm/id1339447754) or the [Android Play Store](https://play.google.com/store/search?q=monica%20crm&c=apps). Easy peasy !

### With a standalone server

If you have installed Monica on a server accessible from outside (a local or global network), you will have to change the Monica Url server on the login page (set as https://app.monicahq.com by default).

:warning: You will also have to fill in the new MOBILE_CLIENT_ID and MOBILE_CLIENT_SECRET environment variables in your instance. If it's your first installation, you likely have to generate those keys from your server by running `php artisan passport:client --password`. [See the Monica docs for more information](https://github.com/monicahq/monica/blob/master/docs/installation/mobile.md).

## Running the app locally

[You can see more information on the dedicated documentation page](https://github.com/monicahq/chandler/blob/develop/docs/running-the-app.md)

## Contribute

Do you want to help? That's awesome. Here are simple things you can do.

### As a community

* Unlike Fight Club, the best way to help is **to actually talk about the project** as much as you can (blog post, articles, Twitter, Facebook).
* You can answer questions in [the issue tracker](https://github.com/monicahq/chandler/issues) to help other community members.
* You can support financially the project [on Patreon](https://www.patreon.com/monicahq) or [by subscribing to an account](https://monicahq.com/pricing).

## Contribute as a developer

* Read our [Contribution Guide](https://github.com/monicahq/monica/blob/master/CONTRIBUTING.md).
* Install the developer version locally so you can start contributing [instructions](https://github.com/monicahq/chandler/blob/develop/docs/running-the-app.md).
* Look for [issues labelled bugs](https://github.com/monicahq/chandler/issues?q=is%3Aopen+is%3Aissue+label%3Abug) if you are looking to have an immediate impact on the project.
* Look for [issues labelled Help wanted](https://github.com/monicahq/chandler/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) These are issues that you can solve relatively easily.
* Look for [issues labelled Good first issue](https://github.com/monicahq/chandler/labels/good%20first%20issue) These issues are for people who want to contribute, but try to work on a small feature first.
* If you are an advanced developer, you can try to tackle [issues labelled feature requests](https://github.com/monicahq/chandler/issues?q=is%3Aopen+is%3Aissue+label%3A%22feature+request%22). Beware though - they are harder to do and will require a lot of back and forth with the repository administrator in order to make sure we are going to the right direction with the product.

We welcome contributions of all kinds from anyone.


## Contact

If you need to talk, you can contact me at regis AT monicahq DOT com. You can also reach me [on Twitter](https://twitter.com/djaiss).

## Thank you, open source

Monica use a lot of open source projects and we thank them with all our hearts. We hope that providing Monica as an free, open source project will help other people the same way those softwares have helped us.

## License

Licensed under the AGPL License. [View license](/LICENSE).
