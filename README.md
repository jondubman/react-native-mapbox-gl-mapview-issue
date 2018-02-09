# react-native-mapbox-gl-mapview-issue

The purpose of this repo is to illustrate a sizing issue with the otherwise awesome https://github.com/mapbox/react-native-mapbox-gl.

In the iOS Simulator, the apparent size of the map is nondeterministic, as it might be if there were a race condition on launch; sometimes it is correctly sized in the center of the device screen, and sometimes it overflows its View component, extending off the screen to the right and bottom.

Hitting Command-R to refresh in the simulator should repro the issue after a few attempts, but it's not specific to a refresh scenario.

The iOS folder contains screenshots and a video demonstrating the issue.

To build, `npm install` (or `yarn install`), then, using Cocoapds:

    cd ios
    pod install

`react-native run-ios`
