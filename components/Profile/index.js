import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import BtnDft from "../Btn";
import styles from "./styles";
import { Card } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: "white",
      title: "My Profile",
      headerBackground: (
        <LinearGradient
          colors={["#5d9b3e", "#a7e886"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.6, y: 0 }}
        />
      ),
      headerRight: (
        <View style={{ paddingRight: 35 }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              source={require("../.././res/notification.png")}
              style={{ height: 24, width: 28 }}
            />
          </TouchableWithoutFeedback>
          <View style={{ position: "absolute", top: -1, right: 38 }}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      )
    };
  };
  

  render() {
    const { navigation } = this.props;
    
    return (
      <View>
       
        <ImageBackground
          source={require("../.././res/bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            //update button
            <View style={styles.logoContainer}>
              <Image
                style={styles.avatar}
                source={require("../.././res/prof.png")}
               
                
              />
              
              <TouchableOpacity
                style={styles.iconContainer}
               
              >
                <Image
                  style={styles.icon}
                  source={require("../.././res/cam.png")}
                  onPress={() => navigation.navigate("Cart")}
                />
                
              </TouchableOpacity>
              
              
          
            </View>

            <Card containerStyle={styles.card}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  User Name :
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  First Name :
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Last Name :
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Email :
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  justifyContent: "space-evenly"
                }}
              >
                <BtnDft h={40} w={100} name={"Update"} />
                <BtnDft h={40} w={100} name={"Log out"} />
              </View>
            </Card>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
