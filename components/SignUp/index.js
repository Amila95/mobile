import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { TextPasswordStrengthDisplay } from "react-native-password-strength-meter";
import NavigationService from "../../NavigationService";
import BtnDft from "../Btn";
import styles from "./styles";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      password: "",
      cPassword: "",
      passwordMsg: "",
      passwordOk: true,
      iconColor: "#ffffff00",
      email: "",
      emailMsg: "",
      emailOk: true,
      errorMsg: "",
      statusCode: 0
    };
  }

  validate() {
    var reg = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (reg.test(this.state.email)) {
      this.setState({ emailMsg: "" });
      this.setState({ emailOk: true });
      return true;
    } else {
      this.setState({ emailMsg: "Invalid Email" });
      this.setState({ emailOk: false });
      return false;
    }
  }
  onChangeP = password => this.setState({ password });
  onChangeCP = cpword => {
    this.setState({ cPassword: cpword });
    if (cpword === this.state.password) {
      this.setState({ iconColor: "#0de511" });
      this.setState({ passwordMsg: "" });
      this.setState({ passwordOk: true });
      return true;
    } else {
      this.setState({ passwordMsg: "Passwords do not match" });
      this.setState({ iconColor: "#ffffff00" });
      this.setState({ passwordOk: false });
      return false;
    }
  };
  onSubmit = () => {
    if (
      this.state.fName.length > 0 &&
      this.state.lName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.cPassword.length > 0
    ) {
      if (this.state.emailOk) {
        if (this.state.passwordOk) {
          const data = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            username: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.cPassword
          };

          fetch("http://192.168.8.100:8763/api/users/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
              "cache-control": "no-cache"
            }
          })
            .then(responseJson => {
              this.setState({ statusCode: responseJson.status });
              return responseJson.json();
            })
            .then(response => {
              const data = response;
              console.log(data);
              if (this.state.statusCode == 201) {
                NavigationService.navigate("SignIn");
              } else {
                this.setState({ errorMsg: data.username });
              }
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          this.setState({ errorMsg: "*Passwords do not match!" });
        }
      } else {
        this.setState({ errorMsg: "*Please enter a valid email" });
      }
    } else {
      this.setState({ errorMsg: "*Please fill all the fields" });
    }
  };

  render() {
    const { password } = this.state;
    const { passwordMsg } = this.state;
    const { iconColor } = this.state;
    const { emailMsg } = this.state;
    return (
      <ImageBackground
        source={require("../.././res/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView contentContainerStyle={styles}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../.././res/logo.png")}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.or}>Sign Up with</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.touchableSty}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradientSty}
              >
                <Icon name="facebook" size={24} color={"#ffffff"} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableSty}>
              <View
                style={[styles.gradientSty, { backgroundColor: "#ffffff" }]}
              >
                <Image
                  style={styles.googleIcon}
                  source={require("../.././res/google.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 30, marginBottom: 5 }}>
            <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
              {this.state.errorMsg}
            </Text>
          </View>
          <View style={styles.container}>
            <Input
              containerStyle={styles.inputs}
              placeholder="  First Name"
              ref="fname"
              onChangeText={fName => this.setState({ fName })}
            />
            <Input
              containerStyle={styles.inputs}
              placeholder="  Last Name"
              ref="lname"
              onChangeText={lName => this.setState({ lName })}
            />
            <Input
              containerStyle={styles.inputs}
              placeholder="  Email"
              ref="email"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              onBlur={() => this.validate()}
              rightIcon={<Text style={{ color: "red" }}>{emailMsg}</Text>}
            />
            <Input
              containerStyle={styles.inputs}
              placeholder="  Password"
              ref="pword"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              rightIcon={
                <TextPasswordStrengthDisplay
                  password={password}
                  labelStyle={{ fontSize: 14 }}
                  minLength={3}
                  levels={[
                    {
                      label: "Weak",
                      labelColor: "#ff0800",
                      activeBarColor: "#ff0800"
                    },
                    {
                      label: "Average",
                      labelColor: "#ff8c00",
                      activeBarColor: "#ff8c00"
                    },
                    {
                      label: "Strong",
                      labelColor: "#10c400",
                      activeBarColor: "#10c400"
                    }
                  ]}
                />
              }
              rightIconContainerStyle={{ marginBottom: 10 }}
            />
            <Input
              containerStyle={styles.inputs}
              placeholder="  Confirm Password"
              ref="cpword"
              secureTextEntry={true}
              onChangeText={this.onChangeCP}
              rightIcon={
                <View style={{ flexDirection: "row" }}>
                  <Icon name="check" color={iconColor} size={24} />
                  <Text style={{ color: "red" }}>{passwordMsg}</Text>
                </View>
              }
            />

            <BtnDft h={40} w={100} name={"SIGN UP"} onPress={this.onSubmit} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
