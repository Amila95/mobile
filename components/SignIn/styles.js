import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250
  },
  logoContainer: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
    height: 40,
    flex: 1
  },
  iconStyle: {
    height: 24,
    width: 20,
    padding: 10,
    justifyContent: "center",
    marginLeft: 15
  },
  inputContainer: {
    backgroundColor: "white",
    width: "80%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginBottom: 15
  },
  or: {
    fontSize: 16,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
    color: "black"
  },
  orContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  dhContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});

export default styles;
