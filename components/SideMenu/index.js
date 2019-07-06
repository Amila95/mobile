import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: ""
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("userDetails").then(value =>
      this.setState({ email: value })
    );
    AsyncStorage.getItem("fristName").then(value =>
      this.setState({ fname: value })
    );
    AsyncStorage.getItem("lastName").then(value =>
      this.setState({ lname: value })
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.sideMenuContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#4f932d", "#5d9b3e", "#a7e886"]}
          style={styles.headerContainer}
        >
          <View style={styles.sideMenuProfileIconContainer}>
            <Image
              source={require("../.././res/logo.png")}
              style={styles.sideMenuProfileIcon}
            />
          </View>
          <View style={{ justifyContent: "center", flex: 5 }}>
            <Text style={styles.uName}>
              {this.state.fname} {this.state.lname}
            </Text>
            <Text style={styles.uEmail}>{this.state.email}</Text>
          </View>
        </LinearGradient>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.sideMenuItem}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Image
              style={{ width: 20, height: 28 }}
              source={require("../.././res/profile.png")}
            />
            <Text style={styles.menuText}  onPress={() => navigation.navigate("Profile")}> My Profile </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem}>
            <Image
              style={styles.sideMenuIcon}
              source={require("../.././res/contact_us.png")}
            />
            <Text style={styles.menuText}> Contact Us </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem}>
            <Image
              style={styles.sideMenuIcon}
              source={require("../.././res/logout.png")}
            />
            <Text style={styles.menuText}> Logout </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />
      </View>
    );
  }
}
