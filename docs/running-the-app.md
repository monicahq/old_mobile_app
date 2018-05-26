## Summary

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Installing dependencies](#installing-dependencies)
* [Building the IOS app](#building-the-ios-app)
* [Building the Android app](#building-the-android-app)


## Introduction

To be able to run the app locally, you can read the excellent guide on the [React Native Website](https://facebook.github.io/react-native/docs/getting-started.html). Click on `Building Projects with Native Code` and choose your platform.

You can find a summary of what you need to install on your computer below.

## Prerequisites

* `nodeJS`
* `watchman` (macOS)
* `python2` (windows)
* `Java JDK 8` to build the Android application
* `Android Studio` to build and run the Android application
* `Xcode + command line tools` to build the ios application
* Recommended : [yarn](https://yarnpkg.com/en/)

## Installing dependencies

To install dependencies you will have to run `npm install` from the root directory of the project. If you have installed yarn (which we recommend), simply run `yarn`.

## Building the IOS app

The Xcode project uses by default private Monica credentials.

![ios1](https://user-images.githubusercontent.com/5103928/40523204-948493c6-5fa2-11e8-907e-f4df2f1997fd.png)

What you will need to do is to toggle the `Automatically manage signing`. Then remove the team or set one of your own.

![ios2](https://user-images.githubusercontent.com/5103928/40523205-94945fcc-5fa2-11e8-8c21-051f3e4a250d.png)

If you don't set a development team, you will not be able to run the app on a real device. But you will still be able to help us by running the app on a simulator.

:warning: Beware of not commiting these particular files in your Pull Request.

When you are done, simply **run the App from Xcode.**


## Building the Android app

When installing Android Studio, make sure those boxes are checked : 

* `Android SDK`
* `Android SDK Platform`
* `Performance (Intel HAXM)`
* `Android Virtual Device` 

Then install the `Android 6.0 (Marshmallow)` with those items :

* `Google APIs`
* `Android SDK Platform 23`
* `Intel x86 Atom_64 System Image`
* `Google APIs Intel x86 Atom_64 System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details". Look for and expand the "Android SDK Build-Tools" entry, then make sure that 23.0.1 is selected.

![android](https://facebook.github.io/react-native/docs/assets/GettingStartedAndroidSDKManagerSDKToolsMacOS.png)

Finally, configure the ANDROID_HOME environment variable :

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

All set to go !

You can now run `npm run android [-- --device]` or `yarn android [--device]` to run the application.
