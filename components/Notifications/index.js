import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  ImageBackground
} from "react-native";
import { Card, CheckBox } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import BtnDft from "../Btn";
import styles from "./styles";

export default class Notifications extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: 'white',
      title: 'Notifications',
      headerBackground: (
        <LinearGradient
        colors={['#5d9b3e', '#a7e886']}
        style={{ flex: 1 }}
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 0}}
        />
      ),
      headerRight: (
        <View style={{paddingRight:35}} >
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Notifications")}>
            <Image source={require("../.././res/notification.png")} style={{height: 24, width: 28}}/>
          </TouchableWithoutFeedback>
          <View style={{ position: 'absolute', top: -1, right: 38 }}>
            <Text style={{color:'white'}}>2</Text>
          </View>
        </View>
      )
    };
  };
  render(){
    return(
      <ImageBackground source={require("../.././res/bgplain.png")} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <View style={{marginLeft:15}}>
            <Text style={styles.summaryText}>Order Summary</Text>
          </View>
          <Card title={"BuyAgain Reminder"} titleStyle={{ fontSize: 20}} containerStyle={styles.card}>
            <Text style={styles.itemText}>Organic Tomatoes</Text>
            <Text>250Kg - Rs.300.00</Text>
            <Text>Location: My store</Text>
            <BtnDft h={40} w={100} name={"BUY AGAIN"} />
          </Card>
        </ScrollView>
      </ImageBackground>
    )
  }
}
