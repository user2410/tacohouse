import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

// Icons
import ErrorComponent from "@components/error/error";
import GalleryComponent from "@components/gallery/gallery";
import LoadingComponent from "@components/loading/loading";
import Section from "@components/section/section";
import { amenityToDisplay } from "@models/amenity.entity";
import { PropertyEntity, propertyTypeToText } from "@models/property.entity";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { PropertyService } from "@services/property.service";
import MapView, { Marker } from "react-native-maps";
import { DataTable, Text as RNPText } from "react-native-paper";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

const ICON_SIZE = 20;

export function SinglePropertyScreen(): React.ReactElement {
  const isFocused = useIsFocused();
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'SingleProperty'>>();
  const route = useRoute<RouteProp<ManageAppParamList, 'SingleProperty'>>();
  const id = route.params?.id;
  if (!id) {
    navigation.goBack();
  }

  const [property, setProperty] = React.useState<PropertyEntity>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(undefined);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: property?.name || 'Property',
      headerRight: () => (
        <View style={styles.headerRightIcons}>
          <MaterialCommunityIcon 
            name="home-edit" 
            size={24} 
            color="white"
            onPress={() => navigation.navigate('EditProperty', {id})}/>
          <MaterialCommunityIcon 
            name="delete" 
            size={24} 
            color="white"
            onPress={() => console.log('delete')}/>
        </View>
      )
    })
  }, [navigation, route, property]);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await PropertyService.getPropertyById(id);
        if (!res) {
          throw { message: 'Not found' }
        }
        setProperty(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [isFocused]);

  return isLoading ? (
    <LoadingComponent />
  ) : error ? (
    <ErrorComponent error={error} />
  ) : (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section title="Property name">
          <RNPText>{property?.name}</RNPText>
        </Section>
        <Section title="Property type">
          <RNPText>{propertyTypeToText(property?.type)}</RNPText>
        </Section>
        <Section title="Address">
          <View>
            <RNPText>{property?.address}</RNPText>
            <DataTable>
              <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>District / Ward</DataTable.Cell>
                <DataTable.Cell>{property?.district}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>City / Province</DataTable.Cell>
                <DataTable.Cell>{property?.city}</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
            <MapView
              style={{
                width: '100%',
                height: 200,
              }}
              initialRegion={{
                latitude: property?.location.lat || 0,
                longitude: property?.location.lng || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{
                latitude: property?.location.lat || 0,
                longitude: property?.location.lng || 0,
              }} />
            </MapView>
          </View>
        </Section>
        <Section title="Detailed Information">
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>Year built</DataTable.Cell>
              <DataTable.Cell>{property?.district && ('NA')}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>Floors</DataTable.Cell>
              <DataTable.Cell>{property?.nFloors && ('NA')}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>Area (m2)</DataTable.Cell>
              <DataTable.Cell>{property?.area}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </Section>
        <Section title="Media">
          <Section title="Images">
            <GalleryComponent items={property?.media || []} tileSize={97} nShownItems={6} />
          </Section>
          <Section title="Videos">
          </Section>
        </Section>
        <Section title="Overview">
          <RNPText>{property?.overview}</RNPText>
        </Section>
        <Section title="Features">
          {property?.features?.map((item, index) => (
            <View key={index}>
              <RNPText style={{ fontWeight: 'bold' }}>{item.feature}:</RNPText>
              <RNPText>{item.description}</RNPText>
            </View>
          ))}
        </Section>
        <Section title="Amenities">
          {property?.type === 'block' ? (
            <RNPText>Building</RNPText>
            // <View>

            // </View>
          ) : (
            <View>
              {property?.amenities?.map((item, index) => {
                const display = amenityToDisplay(item.amenity);
                return (
                  <View key={index}>
                    <RNPText style={{ fontWeight: 'bold' }}>
                      {display.icon}
                      {display.fullName}
                    </RNPText>
                    {/* <RNPText>:{item.description}</RNPText> */}
                  </View>
                )
              })
              }
            </View>
          )}
        </Section>
        <Section title="Created Listings">
          
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}