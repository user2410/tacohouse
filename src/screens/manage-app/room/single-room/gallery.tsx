import { Color } from "@assets/styles/global-styles";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export const galleries = [
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg'
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg'
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg'
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg'
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg'
  },
  {
    imageSource: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg'
  },
];

const list = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
]

export default function Gallery(): React.ReactElement {
  return (
    <View style={styles.container}>
      {
        list.map((item, index) => index < 5 && (
          <Image key={index} style={styles.image} source={{ uri: item }} />
        ))
      }
      <View style={{
        ...styles.image,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Avatar.Text size={65} label={`${list.length - 5}+`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Color.neutral,
    borderRadius: 8,
    borderColor: '#DEEAFD',
    borderWidth: 1,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
  }
});