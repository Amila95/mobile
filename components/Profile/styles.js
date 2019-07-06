import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:160
      },
    
  logoContainer: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  card: {
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 100
  },
  iconContainer: {
   
    alignItems: "center",
    justifyContent: "center",
    top:50,
    right: 125,
    bottom: 30,
    position: "absolute"
  },
  icon: {
    width: 50,
    height: 50
  },
});

export default styles;
