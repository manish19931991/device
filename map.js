import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE,Polyline } from "react-native-maps";
import { useState } from "react";
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from "react-native-maps";
const Map = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"AIzaSyC7bkO3o1273nyGJUKtM7JYkSkH7We2Lyo"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        {/* <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6} 
        />  */}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});