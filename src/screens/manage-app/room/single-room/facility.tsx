import { Color } from "@assets/styles/global-styles";
import RegularText from "@components/text/RegularText";
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

const list = [
  'Car Parking',
  'GYM & Fitness',
  'Wi-fi',
  'Restaurant',
  'Laundry',
  'Garden',
  'Camera',
  'Sport Center',
];

export default function Facility(): React.ReactElement {
  return (
    <View style={styles.container}>
      {
        list.map((item, index) => (
          <View key={index} style={styles.item}>
            <RegularText>{item}</RegularText>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Color.neutral,
    borderRadius: 8,
    borderColor: '#DEEAFD',
    borderWidth: 1,
  },
  text: {

  }
});