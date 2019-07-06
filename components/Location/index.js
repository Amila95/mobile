import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 7.8731;
const LONGITUDE = 80.7718;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default class Location extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackground: (
        <LinearGradient
        colors={['#5d9b3e', '#a7e886']}
        style={{ flex: 1 }}
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 0}}
        />
      ),
      headerLeft: (
        <View style={{ marginLeft:20, flexDirection:"row" }}>
          <Icon
            name="bars"
            size={24}
            color="white"
            onPress={() => NavigationService.drawer()}
          />
          <Image source={require("../.././res/notification.png")} style={{height: 24, width: 24, marginLeft:20}}/>
        </View>
      ),
      
     
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: {
        coordinate: {
          latitude: 4,
          longitude: 4
        },
        key: id,
        color: randomColor()
      },
      searchVal:""
    };
  }
  onMapPress(e) {
    this.setState({
      markers: {
        coordinate: e.nativeEvent.coordinate,
        key: id++,
        color: randomColor()
      }
    });

    SaveAddress = () => {
      console.log(JSON.stringify(this.state.markers[0].coordinate.latitude));
    };
  }
  _search(){}
  _cancel(){}
  render() {   
    return (
    <View >
      
      <MapView
        style={styles.map}
        provider={this.props.provider}        
        initialRegion={this.state.region}
        onPress={e => this.onMapPress(e)}
      >      
        <Marker
          key={this.state.markers.key}
          coordinate={this.state.markers.coordinate}
          pinColor={this.state.markers.color}
        >
          <View style={styles.marker}>
            <Text style={styles.text}>
              {JSON.stringify(this.state.markers.coordinate)}
            </Text>
          </View>
        </Marker>
      </MapView>
      <TextInput
        ref='searchBar'
        placeholder='Search Location'
        value={this.state.search} 
        onChangeText={searchVal => this.setState({searchVal})} 
        onSubmitEditing={()=>this.search()}       
        style={{position:'absolute'}}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {    
    height: Dimensions.get('window').height * 0.9
    // position: 'absolute'
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
