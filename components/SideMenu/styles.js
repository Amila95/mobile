import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({

  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 50,
    height: 50,
  },

  sideMenuProfileIconContainer:{
    flex: 2,
    justifyContent:'center',
    alignItems:'center'
  },

  sideMenuItem:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    height: 40
  },

  sideMenuIcon:
  {
    width: 28,
    height: 28,
  },

  menuText:{
    fontSize: 15,
    color: '#222222',
    paddingLeft: 10
  },
  uName:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  uEmail:{
    fontSize: 15,
    color: 'white'
  },
  headerContainer:{
    flexDirection: 'row',
    flex: 1
  },
  bottomContainer:{
    width: '100%',
    paddingLeft: 15,
    paddingTop: 15,
    flex: 8,
  }

});

export default styles;
