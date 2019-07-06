import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Picker,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Card, CheckBox } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-snap-carousel";
import BtnDft from "../Btn";
import styles from "./styles";

const cartItems = [
  {
    title: "Organic Tomatoes",
    unitPrice: "1 kg- Rs.300.00",
    amount: "Kilogram : 5",
    price: "Rs.1500.00"
  },
  {
    title: "Potatoes",
    unitPrice: "1 kg- Rs.250.00",
    amount: "Kilogram : 3",
    price: "Rs.750.00"
  },
  {
    title: "Potatoes",
    unitPrice: "1 kg- Rs.250.00",
    amount: "Kilogram : 3",
    price: "Rs.750.00"
  }
];

export default class Cart extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: "white",
      title: "My Cart",
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

  constructor(props) {
    super(props);
    this.state = {
      deliver: true,
      pickup: false,
      location: null,
      payMethod: null,
      date: null,
      buyAgain: null
    };
  }

  onChangeCheck() {
    this.setState({
      deliver: !this.state.deliver,
      pickup: !this.state.pickup
    });
  }

  _renderItem({ item, index }) {
    return (
      <Card
        title={item.title}
        titleStyle={{ fontSize: 20 }}
        containerStyle={styles.card}
      >
        <Text style={styles.itemText}>{item.unitPrice}</Text>
        <Text>{item.amount}</Text>
        <Text>
          Price: <Text style={styles.itemText}>{item.price}</Text>
        </Text>
        <BtnDft h={40} w={100} name={"REMOVE"} />
      </Card>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={require("../.././res/bgplain.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Carousel
          layout={"default"}
          data={cartItems}
          renderItem={this._renderItem}
          itemWidth={Dimensions.get("window").width * 0.8}
          sliderWidth={Dimensions.get("window").width}
          activeSlideAlignment="start"
        />
        <View>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.summaryText}>Order Summary</Text>
          </View>
          <Card containerStyle={styles.card}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                title="Deliver"
                checked={this.state.deliver}
                containerStyle={styles.checkbox}
                checkedColor={"#e23142"}
                checkedIcon={"check-square"}
                onIconPress={this.onChangeCheck.bind(this)}
              />
              <CheckBox
                title="Pickup"
                checked={this.state.pickup}
                containerStyle={styles.checkbox}
                checkedColor={"#e23142"}
                checkedIcon={"check-square"}
                onIconPress={this.onChangeCheck.bind(this)}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Deliver to:
              </Text>
              <Picker
                selectedValue={this.state.location}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ location: itemValue })
                }
              >
                <Picker.Item label="MyShop" value="shop" />
                <Picker.Item label="MyOffice" value="office" />
              </Picker>
              <Text
                style={{ color: "#e23142", fontWeight: "bold", fontSize: 16 }}
                onPress={() => navigation.navigate("Location")}
              >
                +ADD NEW
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Payment Method
              </Text>
              <Picker
                selectedValue={this.state.payMethod}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ payMethod: itemValue })
                }
              >
                <Picker.Item label="VISA/ MASTER" value="card" />
                <Picker.Item label="Cash" value="cash" />
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Delivery/ Pickup Time
              </Text>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2018-05-01"
                maxDate="2019-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Buy Again Reminder
              </Text>
              <Picker
                selectedValue={this.state.buyAgain}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ buyAgain: itemValue })
                }
              >
                <Picker.Item label="one day" value="day" />
                <Picker.Item label="one week" value="week" />
                <Picker.Item label="one month" value="month" />
              </Picker>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 15 }}>Total Amount</Text>
              <Text style={styles.total}>Rs.300.00</Text>
              <BtnDft h={40} w={100} name={"CHECKOUT"} />
            </View>
          </Card>
        </View>
      </ImageBackground>
    );
  }
}
