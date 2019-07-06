import React, { Component } from "react";
import { Card } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/FontAwesome";
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

class MyOrders extends Component {
  state = {
    collapsed1: true,
    name1: "angle-down",
    collapsed2: true,
    name2: "angle-down",
    fname: "",
    lname: ""
  };
  componentDidMount = () => {
    AsyncStorage.getItem("fristName").then(value =>
      this.setState({ fname: value })
    );
    AsyncStorage.getItem("lastName").then(value =>
      this.setState({ lname: value })
    );
  };
  toggleExpanded1 = () => {
    this.setState({ collapsed1: !this.state.collapsed1 });
    this.changeIconName1();
  };
  toggleExpanded2 = () => {
    this.setState({ collapsed2: !this.state.collapsed2 });
    this.changeIconName2();
  };
  changeIconName1 = () => {
    if (!this.state.collapsed1) this.setState({ name1: "angle-down" });
    else this.setState({ name1: "angle-up" });
  };
  changeIconName2 = () => {
    if (!this.state.collapsed2) this.setState({ name2: "angle-down" });
    else this.setState({ name2: "angle-up" });
  };
  render() {
    const { navigation } = this.props;
    return (
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

              <Text style={styles.buynow}>My Orders</Text>
              <Text style={styles.cusname}>Today</Text>
            </View>

            <Card containerStyle={styles.card}
            image={require("../.././res/carrot.jpeg")}
            imageStyle={{
              overflow: "hidden",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius:10,
              marginLeft:150

              
            }}>
              <Text style={styles.topic}>CARROT</Text>

              <Text style={styles.price}>250g - Rs.350.00</Text>
              <View style={{ flex: 2, flexDirection: "row" }}>
                <Text style={styles.ordr}>Location</Text>
                <Text style={styles.ordr}>My Store</Text>
              </View>

              <View style={{ backgroundColor: "white" }}>
                <BtnDft
                  h={40}
                  w={140}
                  name={"ORDER AGAIN"}
                  onPress={() => navigation.navigate("Menu")}
                />
              </View>
              <TouchableOpacity onPress={this.toggleExpanded1}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, fontSize: 18 }}>View More</Text>
                  <Icon name={this.state.name1} size={30} />
                </View>
              </TouchableOpacity>
              <Collapsible collapsed={this.state.collapsed1} align="center">
                <View>
                  <Text>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue
                    spare ribs Bacon ipsum dolor amet chuck turducken landjaeger
                    tongue spare ribs Bacon ipsum dolor amet chuck turducken
                    landjaeger tongue spare ribs
                  </Text>
                </View>
              </Collapsible>
            </Card>
            <Card containerStyle={styles.card}
            image={require("../.././res/tomato.jpeg")}
            imageStyle={{
              overflow: "hidden",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius:10,
              marginLeft:150
            }}>
             
              <Text style={styles.topic}>TOMATTO</Text>

              <Text style={styles.price}>500g - Rs.200.00</Text>
              <View style={{ flex: 2, flexDirection: "row" }}>
                <Text style={styles.ordr}>Location</Text>
                <Text style={styles.ordr}>My Store</Text>
              </View>
              <View style={{ backgroundColor: "white" }}>
                <BtnDft
                  h={40}
                  w={140}
                  name={"ORDER AGAIN"}
                  onPress={() => navigation.navigate("Menu")}
                />
              </View>
              <TouchableOpacity onPress={this.toggleExpanded2}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, fontSize: 18 }}>View More</Text>
                  <Icon name={this.state.name2} size={30} />
                </View>
              </TouchableOpacity>
              <Collapsible collapsed={this.state.collapsed2} align="center">
                <View>
                  <Text>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue
                    spare ribs Bacon ipsum dolor amet chuck turducken landjaeger
                    tongue spare ribs Bacon ipsum dolor amet chuck turducken
                    landjaeger tongue spare ribs
                  </Text>
                </View>
              </Collapsible>
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
    );
  }
}


export default MyOrders;