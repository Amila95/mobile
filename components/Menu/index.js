import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { ThemeProvider, Card } from "react-native-elements";
import axios from 'react-native-axios';
import { setOrder } from '../../src/actions/orderAction';
import { loginUser } from '../../src/actions/authAction';
import { connect } from 'react-redux';
import store from '../../store.js';

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
import MyOrders from "../MyOrders";
import HotDeals from "../HotDeals";
import styles from "./styles";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      username: ""
    };
  }
  
    componentDidMount(){
      AsyncStorage.getItem("userDetails").then(value =>
        this.setState({ username: value })
      );
      this.getProducts();
    }
    // Fetch Initial Set of Products from external API
    getProducts() {
      let url =
          "http://192.168.1.19:8080/batch-service/get-all-batches";
      axios.get(url).then(response => {
          this.setState({
              products: response.data
          });
          console.log(this.state.products);
      });
  }

  onOrder =(name,price)=>{
    
    const data = {
      name: name,
      price: price
    };
    // console.log("store", store.getState())
    this.props.setOrder(data);
    console.log("store", store.getState());

    
};
  // submitOrder =(name,price)=>{
  //   if (this.state.products.trim () ==="")
  //   {
  //     return;
  //   }
  //   this.props.AddtoCart
  // };  

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("dataIn");
    console.log(user);

    const card = this.state.products.map(product =>(
      <Card
                containerStyle={styles.card}
                image={{uri:product.product.images[0].path}}
                             imageStyle={{
                  overflow: "hidden",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }}
              >
                <Text style={styles.topic}>{product.product.name}</Text>

                <Text style={styles.price}>1 Kg - {product.unitPrice}</Text>

                <View style={{ alignItems: "center" }}>
                  <BtnDft
                    h={40}
                    w={100}
                    name={"BUY NOW"}
                    // onPress={() => navigation.navigate("Cart")}
                    // onPress={() => navigation.navigate("Cart")}
                    onPress={() => this.onOrder(product.product.name,product.unitPrice)}
                  />
                </View>
              </Card>
    ))
    return (
      <View>
        <ThemeProvider theme={styles}>
          <ImageBackground
            source={require("../.././res/bglogocorner.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <ScrollView>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ width: 100, height: 60 }} />

                <Text style={styles.greeting}>Hello !</Text>

                <Text style={styles.cusname}>{this.state.username}</Text>

                <Text style={styles.buynow}>BUY NOW</Text>
              </View>

              {card} 

             
            </ScrollView>
          </ImageBackground>
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
        </ThemeProvider>

        
      </View>


    );
  }
}


// export const TabMenu = createBottomTabNavigator(
//   {
//     BUY: {
//       screen: Menu,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             style={styles.tabIcon}
//             source={require("../.././res/buy.png")}
//             tintColor={tintColor}
//           />
//         )
//       }
//     },
//     "MY ORDERS": {
//       screen:MyOrders,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             style={styles.tabIcon}
//             source={require("../.././res/myorder.png")}
//             tintColor={tintColor}
//           />
//         )
//       }
//     },
//     "HOT DEALS": {
//       screen: HotDeals,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             style={styles.tabIcon}
//             source={require("../.././res/hotdeal.png")}
//             tintColor={tintColor}
//           />
//         )
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "#e23142",
//       style: {
//         height: 70
//       },
//       labelStyle: {
//         fontSize: 14
//       }
//     }
//   }
// );

//  export default TabMenu;


const mapStateToProps = (state) =>({
  auth: state.auth,
  errors: state.errors,
  order: state.order
})
export default connect(mapStateToProps, { setOrder })(Menu);
