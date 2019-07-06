import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AsyncStorage
} from "react-native";
import jwt_decode from "jwt-decode";
import LinearGradient from "react-native-linear-gradient";
import BtnDft from "../Btn";
import styles from "./styles";
import { loginUser } from '../../src/actions/authAction';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMsg: "",
      statusCode: 0
    };
  }
  // onSubmit = () => {
  //   const { navigation } = this.props;
  //   this.setState({ errMsg: "" });
  //   if (this.state.email.length > 0 && this.state.password.length > 0) {
  //     const data = {
  //       username: this.state.email,
  //       password: this.state.password
  //     };
  //     fetch("http://192.168.8.100:8763/api/users/login", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "content-type": "application/json",
  //         "cache-control": "no-cache"
  //       }
  //     })
  //       .then(response => {
  //         this.setState({ statusCode: response.status });
  //         return response.json();
  //       })
  //       .then(responseJson => {
  //         const data = responseJson;
  //         console.log(data);
  //         if (this.state.statusCode == 200) {
  //           const info = jwt_decode(data.token);
  //           console.log(info);
  //           AsyncStorage.setItem("userDetails", info.username);
  //           AsyncStorage.setItem("fristName", info.fristName);
  //           AsyncStorage.setItem("lastName", info.lastName);
  //           navigation.navigate("Menu");
  //         } else if (this.state.statusCode == 401) {
  //           this.setState({ errMsg: "Invalid Email or Password" });
  //         }
  //         return responseJson.Promise;
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   } else {
  //     this.setState({ errMsg: "*Please fill all fields!" });
  //   }
  // };
  

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.navigation.navigate('Menu')
    }
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }
  }

  onSubmit =() =>{
    this.setState({ errMsg: "" });
    if (this.state.email.length > 0 && this.state.password.length > 0) {
    const data = {
            username: this.state.email,
            password: this.state.password
    };
    this.props.loginUser(data);
  }else {
        this.setState({ errMsg: "*Please fill all fields!" });
      }
}

  render() {
    const { navigation } = this.props;
    const {errors} = this.state;
    return (
      <View>
        <ImageBackground
          source={require("../.././res/bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../.././res/logo.png")}
              />
            </View>
            <View style={{ alignItems: "center", flex: 0.5 }}>
              <Text style={styles.or}>Sign In with</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.touchableSty}>
                <LinearGradient
                  colors={["#4c669f", "#3b5998", "#192f6a"]}
                  style={styles.gradientSty}
                >
                  <Icon name="facebook" size={28} color={"#ffffff"} />
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
                {this.state.errMsg}
              </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../.././res/user.png")}
                  style={styles.iconStyle}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="  Email"
                  onChangeText={email => this.setState({ email })}
                  keyboardType="email-address"
                />
                
               
              </View>
              {/* <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}></Text> */}
              {/* <View style={{ marginLeft: 30, marginBottom: 0 , marginTop:-10}}> */}
              {errors &&
                <Text style={{ color: "red", fontSize: 16, fontWeight: "bold",marginLeft: 0, marginBottom: 0 , marginTop:-10 }}>
                {errors.username}
              </Text>
              
                }
                {/* </View> */}
              <View style={styles.inputContainer}>
                <Image
                  source={require("../.././res/password.png")}
                  style={styles.iconStyle}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="  Password"
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                />
                
              </View>
              {errors &&
                <Text style={{ color: "red", fontSize: 16,fontWeight: "bold",marginLeft: 0, marginBottom: 0 , marginTop:-10}}>
                {errors.password}
              </Text>
                }
              <BtnDft h={40} w={100} name={"SIGN IN"} onPress={this.onSubmit} />
            </View>

            <View style={styles.dhContainer}>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
              >
                Don't have an account ?
                <Text
                  style={{ color: "#f44242", fontWeight: "bold", fontSize: 15 }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  {" "}
                  Signup here
                </Text>
              </Text>
            </View>
            <View style={{ flex: 2 }} />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}


const mapStateToProps = (state) =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{ loginUser})(Login);