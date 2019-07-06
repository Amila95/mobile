import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250
  },
  logoContainer: {
    flex: 1.25,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },
  touchableSty: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  gradientSty: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 50,
    borderRadius: 50
  },
  googleIcon: {
    height: 30,
    width: 30,
    backgroundColor: "white"
  },
  inputs: {
    backgroundColor: "white",
    marginBottom: 15,
    width: "80%",
    borderRadius: 5,
    height: 50
  },
  inputSty: {
    borderWidth: 0,
    height: 40
  },
  or: {
    fontSize: 16,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
    color: "black"
  }
});

export default styles;
