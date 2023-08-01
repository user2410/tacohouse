import { Color } from "@assets/styles/global-styles";
import ErrorComponent from "@components/error/error";
import LoadingComponent from "@components/loading/loading";
import Section from "@components/section/section";
import { ListingEntity } from "@models/listing.entity";
import { ListingNavigatorParams } from "@navigation/listing-app/listing-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import ListingService from "@services/listing.service";
import React from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { List, Button as RNPButton, TextInput as RNPTextInput } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { DistrictCard } from "./district-card";
import styles from './home.styles';
import { ListingCard } from "./listing-card";
import { cities, districts } from "./static";

export default function ListingHomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<ListingNavigatorParams, 'Home'>>();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [currentCity, setCurrentCity] = React.useState<string>('hanoi');
  const [newListings, setNewListings] = React.useState<ListingEntity[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>();

  const getListings = async () => {
    try {
      setLoading(true);
      const res = await ListingService.getNewListings();
      setNewListings(res);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getListings()
  }, []);

  const handleChooseCity = (citySlug: string) => {
    setCurrentCity(citySlug);
  }

  const handlePressListing = (id: string) => {
    console.log('listing', id);
    navigation.navigate('SingleListing', { id });
  }

  return loading ? (
    <LoadingComponent />
  ) : error ? (
    <ErrorComponent error={error} />
  ) : (
    <SafeAreaView style={styles.androidLarge2}>

      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated>
        <View
          style={styles.modalView}
          onTouchEndCapture={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <List.Section>
              <List.Subheader>Choose city or province</List.Subheader>
              <ScrollView
                style={styles.modalScrollView}
              >
                {cities.map((item, index) => (
                  <Pressable
                    key={index}
                    android_ripple={{ color: Color.androidRipple }}
                    onPress={() => handleChooseCity(item.slug)}>
                    <List.Item title={`${item.name} ${item.type}`} />
                  </Pressable>
                ))}
              </ScrollView>
            </List.Section>
          </View>
        </View>
      </Modal>

      <StatusBar barStyle="default" />

      {/* Current selected city */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>City / Province</Text>
        <Pressable
          style={styles.locationButton}
          android_ripple={styles.locationButtonAndroidRipple}
          onPress={() => setShowModal(true)}>
          <Text>{cities.find(city => city.slug === currentCity)?.name}</Text>
          <FontAwesome5Icon name="chevron-down" />
        </Pressable>
      </View>

      {/* Search bar */}
      <View style={styles.searchAndFilterContainer}>
        <RNPTextInput
          style={styles.searchInput}
          mode="outlined"
          underlineStyle={styles.searchInputUnderLine}
          outlineColor={styles.searchInputOutline.color}
          right={<RNPTextInput.Icon style={{ marginTop: '50%' }} rippleColor={Color.androidRipple} icon="magnify" />}
          placeholder="Search by location"
        />
        <RNPButton mode="outlined" style={styles.filterButton} rippleColor={Color.androidRipple}>
          <FontAwesome5Icon name="list" color="black" />
        </RNPButton>
      </View>

      <ScrollView
        indicatorStyle="white"
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={getListings}
          />
        }
      >
        <Section title="Districts" bodyStyle={styles.districtGalery}>
          <>
            {districts.map((item, index) => (
              <DistrictCard item={item} key={index} />
            ))}
          </>
        </Section>
        <View style={[styles.frameContainer, styles.sectionContainer]}>
          <View style={[styles.sectionTitleGroup, styles.sectionTitleFlexbox]}>
            <Text style={[styles.sectionTitle]}>
              New Listings
            </Text>
            <Text style={styles.seeMore}>See more</Text>
          </View>
          <ScrollView
            style={styles.frameScrollview}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameRowScrollView}
          >
            {
              newListings.map((item, index) => (
                <Pressable key={index} onPress={() => handlePressListing(item.id.toString())} >
                  <ListingCard listing={item} />
                </Pressable>
              ))
            }
          </ScrollView>
        </View>
        <View style={[styles.frameContainer, styles.sectionContainer]}>
          <View style={[styles.sectionTitleGroup, styles.sectionTitleFlexbox]}>
            <Text style={[styles.sectionTitle]}>
              Listings For You
            </Text>
            <Text style={styles.seeMore}>See more</Text>
          </View>
          <ScrollView
            style={styles.frameScrollview}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameRowScrollView}
          >
            {
              newListings.map((item, index) => (
                <Pressable key={index} onPress={() => handlePressListing(item.id.toString())} >
                  <ListingCard listing={item} />
                </Pressable>
              ))
            }
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
