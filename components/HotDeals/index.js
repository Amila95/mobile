import React, { Component } from "react";
import { Card } from "react-native-elements";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from "react-native";
import BtnDft from "../Btn";
import styles from "./styles";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: ""
    };
  }
  componentDidMount = () => {
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
      <View>
        <View>
          <ImageBackground
            source={require("../.././res/bglogocorner.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <ScrollView>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ width: 100, height: 60 }} />
                <Text style={styles.greeting}>Hello !</Text>
                <Text style={styles.cusname}>
                  {this.state.fname} {this.state.lname}
                </Text>
                <Text style={styles.buynow}>HOT DEALS</Text>
              </View>
              <Card
                containerStyle={styles.card}
                image={require("../.././res/carrot.jpeg")}
                imageStyle={{
                  overflow: "hidden",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }}
              >
                <Text style={styles.topic}>CARROT</Text>
                <Text style={styles.price}>1 Kg - Rs.350.00</Text>
                <View style={{ alignItems: "center" }}>
                  <BtnDft
                    h={40}
                    w={100}
                    name={"BUY NOW"}
                    onPress={() => navigation.navigate("Cart")}
                  />
                </View>
              </Card>
              <Card
                containerStyle={styles.card}
                image={require("../.././res/tomato.jpeg")}
                imageStyle={{
                  overflow: "hidden",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }}
              >
                <Text style={styles.topic}>TOMATTO</Text>
                <Text style={styles.price}>1 Kg - Rs.200.00</Text>
                <View style={{ alignItems: "center" }}>
                  <BtnDft
                    h={40}
                    w={100}
                    name={"BUY NOW"}
                    onPress={() => navigation.navigate("Cart")}
                  />
                </View>
              </Card>
            </ScrollView>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.navigate("Cart")}
            >
              <Image
                style={styles.icon}
                source={require("../.././res/cart2.png")}
              />
              <View style={styles.cartItems}>
                <Text style={{ color: "white" }}>1</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
