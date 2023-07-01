import { Padding } from "@assets/styles/global-styles";
import ErrorComponent from "@components/error/error";
import LoadingComponent from "@components/loading/loading";
import { CreateLisitingNavigatorParams } from "@navigation/listing-app/create-listing.navigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PropertyService } from "@services/property.service";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PropertyItem from "../property-item";
import CreateListingLayout from "./layout";
import NavigationButton from "./navigation-button";

export default function SelectPropertyScreen() {
  const navigation = useNavigation<StackNavigationProp<CreateLisitingNavigatorParams, 'SelectProperty'>>();

  // const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [properties, setProperties] = React.useState<PropertyEntity[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>();
  const [selectedProperty, setSelectedProperty] = React.useState<string>();
  
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await PropertyService.getProperties();
        setProperties(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return (
    <CreateListingLayout
      title="Select your property"
      leftNavBtn={<Pressable onPress={() => navigation.replace('QuickCreateProperty')}><Text>Create quick listing</Text></Pressable>}
      rightNavBtn={<NavigationButton next disabled={selectedProperty === undefined} onPress={() => navigation.navigate('CreateListingDetails')} />}
    >
      {
        loading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          <View>
          <FlatList
            data={properties}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View 
                style={[styles.listingItemView, item.id === selectedProperty ? {backgroundColor: '#a0a0a0'} : {}]}
                onTouchEnd={() => setSelectedProperty(item.id)}>
                <PropertyItem property={item} />
              </View>
            )}
          />
          <Pressable style={{alignSelf: 'center'}} onPress={() => setSelectedProperty(undefined)}>
            <Text>Clear selection</Text>
          </Pressable>
          </View>
        )
      }
    </CreateListingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flex: 1.5,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
  },
  listView: {
    flex: 16,
    paddingHorizontal: Padding.p_mini,
  },
  listingItemView: {
    marginVertical: Padding.p_3xs,
  },
  bottomView: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#cab'
  },
  bottomBarContainer: {
    width: '100%',
    // backgroundColor: '#bac',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Padding.p_mini,
  },
})