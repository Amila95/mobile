import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

class BtnDft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button
        TouchableComponent={TouchableOpacity}
        onPress={this.props.onPress}
        title={this.props.name}
        buttonStyle={[
          styles.buttons,
          { height: this.props.h, width: this.props.w }
        ]}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#e23142", "#f26573"],
          start: { x: 0, y: 0.5 },
          end: { x: 1.5, y: 1 }
        }}
      />
    );
  }
}

const styles = {
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5
  }
};

export default BtnDft;
