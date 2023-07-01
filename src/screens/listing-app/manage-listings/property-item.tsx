import { Color, FontFamily, FontSize } from "@assets/styles/global-styles";
import { Image, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_SIZE = 24;

interface PropertyItemProps {
  property: PropertyEntity;
}

export default function PropertyItem({ property }: PropertyItemProps) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: property.images[0] }}
        style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={[
          styles.propertyTypeWrapper,
          {
            backgroundColor:
              property.propertyType === 'Apartment' ? '#007bff' :
              property.propertyType === 'Room' ? '#dc3545' :
              property.propertyType === 'Single Residence' ? '#ffc107' :
              '#f0f0f0'
          }]}>
          <Text style={[
            styles.propertyTypeText,
            {
              color:
                // property.propertyType === 'Apartment' ? '#fff' :
                // property.propertyType === 'Room' ? '#fff' :
                // property.propertyType === 'Single Residence' ? '#fff' :
                '#f0f0f0'
            }
          ]}>{property.propertyType}</Text>
        </View>
        <Text style={styles.propertyName} numberOfLines={1}>
          {property.name}
        </Text>
        <Text style={styles.propertyAddress} numberOfLines={1}>
          {property.address}
        </Text>
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
              quantity: property.area,
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
    </View>
  );
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
    marginLeft: 12,
    flex: 1,
  },
  propertyTypeWrapper: {
    borderRadius: 4,
    // borderStyle: "solid",
    // borderColor: "#000",
    // borderWidth: 1,
    padding: 4,
    alignSelf: "flex-start",
  },
  propertyTypeText: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  propertyName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSemibold,
    lineHeight: 20,
    letterSpacing: 0,
    color: Color.black,
    // marginTop: 2,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  propertyAddress: {

  }
});