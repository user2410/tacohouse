import { Margin, Padding } from "@assets/styles/global-styles";
import { Header } from "@react-navigation/elements";
import { translateAddress } from "@utils/address";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MapView, { Address, Marker } from "react-native-maps";
import { Text as RNPText } from 'react-native-paper';

export type Coordinate = {
  latitude: number;
  longitude: number;
};

interface MapModalProps {
  setLocation: (coordinate: Coordinate) => void;
  setAddressObj: (address: Address) => void;
  closeModal: () => void;
}

export const MapModal = ({setLocation, setAddressObj, closeModal} : MapModalProps) => {
  const mapRef = React.useRef<MapView>(null);
  const [coordinate, setCoordinate] = React.useState<Coordinate>();
  const [address, setAddress] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      if(mapRef.current && coordinate) {
        const address = await mapRef.current.addressForCoordinate(coordinate);
        console.log(address);
        setLocation(coordinate);
        setAddressObj(address);
        setAddress(translateAddress(address));
      }
    })()
  }, [coordinate]);

  return (
  <>
    <Header
      title="Pick location"
      headerRight={(props) => (
        <Pressable onPress={() => closeModal()}>
          <RNPText>Done</RNPText>
        </Pressable>
      )}
    />
    <MapView 
      ref={mapRef}
      style={StyleSheet.absoluteFillObject} 
      showsMyLocationButton={true}
      showsUserLocation={true}
      initialRegion={{
        latitude: 21.007076103786403,
        longitude: 105.84310564167778,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }}
      onPress={(event) => setCoordinate(event.nativeEvent.coordinate)}
    >
      { coordinate ? <Marker coordinate={coordinate}/> : null }
    </MapView>
    <View style={{ 
      position: 'absolute', 
      width: '90%',
      alignSelf: 'center',
      marginTop: Margin.m_mini
    }}>
      <View style={{
        borderRadius: 16,
        backgroundColor: 'white',
        padding: Padding.p_3xs,

      }}>
        <RNPText>Coordination: {coordinate ? `${coordinate.latitude.toFixed(4)} - ${coordinate.longitude.toFixed(4)}` : null}</RNPText>
        <RNPText>Address: {address}</RNPText>
      </View>
    </View>
    {/* <Pressable style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: Padding.p_3xs
    }}>
      <MaterialCommunityIcon name="crosshairs-gps" size={ICON_SIZE} color="green" />
    </Pressable> */}
  </>
)
}