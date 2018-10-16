import Expo from 'expo';
import React from "react";
import Setup from "./src/boot/setup.native.js";


export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}
Expo.registerRootComponent(App);