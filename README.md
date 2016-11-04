# React-Native-Simple-Calculator
Basic four functioning calculator in React Native

## Libraries/tools

This project uses libraries and tools like:
- es6 syntax and [babel](https://babeljs.io)
- [react-native](https://facebook.github.io/react-native) for the iOS & Android Apps
- [redux](http://redux.js.org/docs/introduction/) to organize the data flow management

## Basic philosophy

All the code is contained in the `src` directory, especially the 3 main entry files that are used for the builds:
- `index.ios.js` & `index.android.js` are the ones used to build the iOS & Android Apps
- `index.js` is the one used to build the iOS & Android Apps as the code is strictly the same.

# How to build/run the projects

## General requirements before running project

- `npm install` to install all the dependencies, React and React Native among others.

## The Mobile Apps (iOS & Android)

### Requirements for React Native

#### iOS

- OS X
- Xcode (Xcode only runs on Mac).
- Homebrew is the recommended way to install node.
- `brew install node`

#### Android

- Follow the official documentation guide here: http://facebook.github.io/react-native/docs/getting-started.html#android-setup (includes experimental Windows & Linux support)

### Running the Mobile Apps

#### iOS

- Open Calculator.xcodeproj and hit run in Xcode.
- Hit cmd+R in your iOS simulator to reload the app and see your change!

#### OR From CommandLine

-Run the `react-native run-ios` in the root of this project.

#### Android

- Open an emulator. (run `android avd`)
- Run the `react-native run-android` in the root of this project.
- If trying to run on a device, read the following guide: http://facebook.github.io/react-native/docs/running-on-device-android.html#content

Congratulations! You've just successfully run the project as an iOS or Android App.



