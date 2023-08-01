import { Color, FontFamily, FontSize } from "@assets/styles/global-styles";
import { ListingEntity } from "@models/listing.entity";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_SIZE = 24;

interface ListingItemProps {
  listing: ListingEntity;
}

export default function ListingItem({ listing }: ListingItemProps) {
  return (
    <Pressable style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: listing.property.media[0].url }}
        style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.listingTitle} numberOfLines={1}>
          {listing.title}
        </Text>
        <Text style={styles.listingAddress} numberOfLines={1}>
          {listing.property.address}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.listingPrice}>${listing.price}</Text>
          <Text style={styles.perMonth}>/month</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 15,
        }}>
          {[
            {
              icon: <MaterialCommunityIcon name="sofa-outline" size={ICON_SIZE} />,
              quantity: 1,
            },
            {
              icon: <MaterialCommunityIcon name="bed" size={ICON_SIZE} />,
              quantity: 3,
            },
            {
              icon: <MaterialCommunityIcon name="bathtub" size={ICON_SIZE} />,
              quantity: 2,
            },
            {
              icon: <MaterialCommunityIcon name="crop-square" size={ICON_SIZE} />,
              quantity: listing.property.area,
            },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                gap: 5
              }}>
              {item.icon}
              <Text style={{ fontWeight: 'bold' }}>{item.quantity}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "flex-end",
    justifyContent: 'space-between'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  listingTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSemibold,
    lineHeight: 20,
    letterSpacing: 0,
    color: Color.black,
    // marginTop: 2,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  listingAddress: {

  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  listingPrice: {
    fontSize: FontSize.subheadlineBold_size,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  perMonth: {
    textAlign: "right",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.black,
  }
})