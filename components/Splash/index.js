import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default class Splash extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("SignIn");
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../.././res/main.png")}
        />
      </View>
    );
  }
}
