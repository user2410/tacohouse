import { Color, FontFamily, FontSize, Margin, Padding } from "@assets/styles/global-styles"
import { Image, StyleSheet, Text, View } from "react-native"

export const ListingCard = ({listing}: {listing: ListingEntity}) => {
  return (
    <View style={styles.listingCard}>
    <Image
      style={styles.listingImage}
      resizeMode="cover"
      source={{uri: listing.thumbnailImg}}
    />
    <View style={styles.listingDetails}>
      <Text style={styles.listingTitle} numberOfLines={2}>{listing.title}</Text>
      <Text style={[styles.lisitingAddress, styles.frameParentSpaceBlock]} numberOfLines={2}>
        {listing.address}
      </Text>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={[styles.parent, styles.sqftFlexBox]}>
          <Text style={styles.listingPrice}>${listing.price}</Text>
          <Text style={[styles.month, styles.areaTypo]}>/month</Text>
        </View>
        <Text style={[styles.sqft, styles.areaTypo]}>{listing.area} sqft</Text>
      </View>
    </View>
    <Image
      style={styles.heartIcon}
      resizeMode="cover"
      source={require("@assets/icons/heart.png")}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  sqftFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  areaTypo: {
    textAlign: "right",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  listingImage: {
    height: 101,
    zIndex: 0,
    width: 157,
    borderRadius: Padding.p_8xs,
  },
  listingTitle: {
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.gray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  lisitingAddress: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    marginTop: 2,
    textAlign: "left",
    color: Color.gray_100,
  },
  listingPrice: {
    fontSize: FontSize.subheadlineBold_size,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  month: {
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  parent: {
    flexDirection: "row",
  },
  sqft: {
    fontSize: FontSize.size_smi,
    display: "flex",
    width: 56,
    alignItems: "center",
    alignSelf: "stretch",
    color: Color.gray_100,
  },
  frameParent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  listingDetails: {
    paddingTop: Padding.p_8xs,
    alignItems: "flex-end",
    zIndex: 1,
    width: 157,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    zIndex: 2,
  },
  listingCard: {
    // flex: 1,
    // width: "100%",
    width: 157,
    marginLeft: Margin.m_3xs
  },
})