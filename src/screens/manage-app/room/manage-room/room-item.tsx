import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

// Icons
import BigText from "@components/text/BigText";
import RegularText from "@components/text/RegularText";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RoomItem({room, onPressHandler}: {room: RoomEntity, onPressHandler: Function}): React.ReactElement {
  return (
    <Pressable 
      style={styles.container} 
      onPress={() => onPressHandler()}>
      <View style={{ position: 'relative' }}>
        <Image style={styles.image} source={require('@assets/logo.png')} />
        <Ionicons size={20} color={'red'} style={styles.heart} name={room.liked ? "heart" : 'heart-outline'} />
      </View>
      <View>
        <BigText textStyles={{ marginBottom: 2 }}>{room.roomName}</BigText>
        <RegularText>{room.address}</RegularText>
      </View>
      <View style={styles.containerInlineGroup}>
        <View style={styles.containerInlineGroup}>
          <BigText textStyles={{ fontSize: 24 }}>{room.price.toLocaleString()} VND</BigText>
          <RegularText> /Month</RegularText>
        </View>
        <View>
          <RegularText>{room.area} sqft</RegularText>
        </View>
      </View>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 16,
  },
  heart: {
    position: 'absolute',
    top: 7,
    right: 7,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  containerInlineGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInlineGroup: {

  }
});