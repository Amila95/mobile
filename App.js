import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import NavigationService from "./NavigationService";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Splash from "./components/Splash";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import Cart from "./components/Cart";
import MyOrders from "./components/MyOrders";
import HotDeals from "./components/HotDeals";
import Notifications from "./components/Notifications";
import Location from "./components/Location";
import {AsyncStorage} from 'react-native';
///////////////
// import {Provider} from 'react-redux';
import store from './store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import setAuthToken from './src/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './src/actions/authAction';
import Profile from "./components/Profile";
import styles from  './components/Menu/styles';
// import TabMenu from "./components/TabMenu";

const TabMenu = createBottomTabNavigator(
  {
    BUY: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={styles.tabIcon}
            //  source={require("../.././res/buy.png")}
             source={require("./res/buy.png")}
            tintColor={tintColor}
          />
        )
      }
    },
    "MY ORDERS": {
      screen:MyOrders,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={styles.tabIcon}
            // source={require("../.././res/myorder.png")}
            source={require("./res/myorder.png")}
            tintColor={tintColor}
          />
        )
      }
    },
    "HOT DEALS": {
      screen: HotDeals,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={styles.tabIcon}
            // source={require("../.././res/hotdeal.png")}
            source={require("./res/hotdeal.png")}
            tintColor={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e23142",
      style: {
        height: 70
      },
      labelStyle: {
        fontSize: 14
      }
    }
  }
);


const RootStack = createStackNavigator(
  {  //merged
    //Define your screens.
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Menu: {
      screen: TabMenu,
      navigationOptions: {
        headerBackground: (
          <LinearGradient
            colors={["#5d9b3e", "#a7e886"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 0 }}
          />
        )
        ,
        headerLeft: (
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => NavigationService.drawer()}
            >
              <Image
                source={require("./res/hamburgher.png")}
                style={{ height: 20, width: 30, marginLeft: 10 }}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => NavigationService.navigate("Notifications")}
            >
              <Image
                source={require("./res/notification.png")}
                style={{ height: 24, width: 28, marginLeft: 20 }}
              />
            </TouchableWithoutFeedback>
            <View style={{ position: "absolute", top: -1, right: 3 }}>
              <Text style={{ color: "white" }}>2</Text>
            </View>
          </View>
        )
      }
    },
    Cart: { screen: Cart },
    MyOrders: { screen: MyOrders },
    HotDeals: { screen: HotDeals },
    Location: { screen: Location },
    Notifications: { screen: Notifications },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Menu"
  }
);




const MyDrawerNavigator = createAppContainer(
  createDrawerNavigator(
    {
      MainStack: {
        screen: RootStack
      }
    },
    {
      contentComponent: SideMenu,
      drawerWidth: Dimensions.get("window").width * 0.7
    }
  )
);

//Check for token
if(AsyncStorage .jwtToken){
  //Set Auth token header auth
  setAuthToken(AsyncStorage .jwtToken);
  //Decode token get user info and exp
  const decoded = jwt_decode(AsyncStorage .jwtToken);
//set User and isAuthenticated
store.dispatch(setCurrentUser(decoded));

const currentTime = Date.now()/1000;
if(decoded.exp< currentTime){
  store.dispatch(logoutUser());
  window.location.href='/login'
}


}

class App extends Component{
  render() {
    const { navigation } = this.props;
    return (
      <Provider store={store}>
      <MyDrawerNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
     
      </Provider>
    );
  }
}

export default App;
