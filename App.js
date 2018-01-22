import React, { Component } from "react";
import Expo from "expo";
import Screen1 from "./src/Screen1"
import Screen2 from "./src/Screen2"
import Screen3 from "./src/Screen3"

import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
      return <Screen2 />
    
  }
}