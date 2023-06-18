import { Border, Color, Padding } from "@assets/styles/global-styles"
import { Image, StyleSheet, Text, View } from "react-native"

export const DistrictCard = ({ item }: { item: { imageSource: any, title: string } }) => {
  return (
    <View style={styles.districtCard}>
      <Image
        style={styles.districtCardImage}
        resizeMode="cover"
        source={item.imageSource}
      />
      <Text style={styles.districtCardTitle}>
        {item.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  districtCard: {
    position: 'relative',
  },
  districtCardImage: {
    borderRadius: Border.br_8xs,
    width: 97,
    height: 97,
    zIndex: 0,
  },
  districtCardTitle: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    bottom: Padding.p_8xs,
    color: Color.sectionBgColor,
  },
})