import { Color, FontFamily, FontSize } from "@assets/styles/global-styles";
import { PropertyEntity } from "@models/property.entity";
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
        source={{ uri: property.media[0].url }}
        style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={[
          styles.typeWrapper,
          {
            backgroundColor:
              property.type === 'apartment' ? '#007bff' :
              property.type === 'room' ? '#dc3545' :
              property.type === 'single_residence' ? '#ffc107' :
              '#f0f0f0'
          }]}>
          <Text style={[
            styles.typeText,
            {
              color:
                // property.type === 'Apartment' ? '#fff' :
                // property.type === 'Room' ? '#fff' :
                // property.type === 'Single Residence' ? '#fff' :
                '#f0f0f0'
            }
          ]}>{property.type}</Text>
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
              icon: <MaterialCommunityIcon name="kettle" size={ICON_SIZE} />,
              quantity: property.units[0].nKitchens,
            },
            {
              icon: <MaterialCommunityIcon name="bed" size={ICON_SIZE} />,
              quantity: property.units[0].nBedrooms,
            },
            {
              icon: <MaterialCommunityIcon name="bathtub" size={ICON_SIZE} />,
              quantity: property.units[0].nBathrooms,
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
  typeWrapper: {
    borderRadius: 4,
    // borderStyle: "solid",
    // borderColor: "#000",
    // borderWidth: 1,
    padding: 4,
    alignSelf: "flex-start",
  },
  typeText: {
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