import React, { useLayoutEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import MapView, { Circle, Marker  } from "react-native-maps";
import * as location from "expo-location"

const Home = () => {

  let [lat, setLat] = useState(9.0034)
  let [lng, setLng] = useState(38.0034)

  const changable = () => {
    location.getForegroundPermissionsAsync().then((Response) => {
      if (Response.granted) {
        location.getCurrentPositionAsync({
          accuracy: location.Accuracy.Highest
        }).then((position) => {
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        })
      }
    })
   
  }
useLayoutEffect(() => {
    changable()
})
 
     
     
       return <View>
        <MapView
        style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
        >
          <Marker 
          coordinate={{latitude: lat, longitude: lng}}
          />
          <Circle 
          center={{latitude: lat, longitude: lng}}
          radius={15}
          strokeColor="#B2B377"
          strokeWidth={2}
          fillColor="#EBC49F"
          /> 
           </MapView>          
    </View>
   
    
}

export default Home