import { Border, Margin } from "@assets/styles/global-styles";
import { MediaEntity } from "@models/media.entity";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Text as RNPText } from "react-native-paper";

interface Props {
  items: MediaEntity[];
  tileSize: number;
  onItemPress?: (item: MediaEntity) => void;
}

export default function GalleryComponent({items, tileSize = 97, onItemPress}: Props) {
  return (
    <FlatList
      data={items.slice(0, 6)}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({ item, index }) => (
        index === 5 ? (
          <View style={[
            styles.tile,
            {
              width: tileSize,
              height: tileSize,
            }
          ]}>
            <View style={styles.cover}>
              <RNPText variant="headlineMedium" style={styles.extraImageNumber}>
                +{items.length - 5}
              </RNPText>
            </View>
          </View>
        ) : (
          <View style={[
            styles.tile,
            {
              width: tileSize,
              height: tileSize,
            }
          ]}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item.url }}
            />
          </View>
        ))
      }
      numColumns={3}
      scrollEnabled={false}
    />
  )
}

const styles = StyleSheet.create({
  tile: { 
    // flex: 1, 
    justifyContent: 'center', 
    marginVertical: Margin.m_3xs,
    marginHorizontal: Margin.m_3xs,
  },
  cover: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: Border.br_8xs,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    borderRadius: Border.br_8xs,
    width: '100%',
    height: '100%',
  },
  extraImageNumber: { 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});