import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconMenu: {
    paddingLeft: 10
  },
  greeting: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 20,
    color: "#ffffff"
  },
  cusname: {
    textAlign: "left",
    fontSize: 30,
    marginLeft: 20,
    color: "#ffffff"
  },
  buynow: {
    textAlign: "left",
    fontSize: 40,
    marginLeft: 20,
    color: "#ffffff"
  },
  topic: {
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 100,
    fontSize: 40
  },
  price: {
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 100,
    color: "#FF0000",
    fontSize: 25
  },
  card: {
    borderRadius: 10,
    marginBottom: 20
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 30,
    position: "absolute"
  },
  icon: {
    width: 80,
    height: 80
  },
  tabIcon: {
    width: 30,
    height: 30
  },
  cartItems: {
    position: "absolute",
    top: 18,
    right: 22
  }
});

export default styles;
