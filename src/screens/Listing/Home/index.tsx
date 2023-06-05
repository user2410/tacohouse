import {ListingNavigatorParams} from '@navigation/ListingNavigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import cities from './FeaturedCities';
import styles from './styles';
import ListingService from '@services/ListingService';
import {green100} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import ListingCard from '@components/listing/ListingCard';
import ListingList from '@components/listing/ListingList';

type ListingHomeScreenProps = BottomTabNavigationProp<
  ListingNavigatorParams,
  'Home'
>;

export default function ListingHomeScreen(): React.ReactElement {
  const navigation = useNavigation<ListingHomeScreenProps>();
  const route = useRoute<RouteProp<ListingNavigatorParams>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<ListingEntity[]>([]);
  const [error, setError] = useState<any>(null);

  const cityCode = route.params?.city as string;
  const city = cities[cityCode];

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const res = await ListingService.getNewListings();
        setItems(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Failed with error: {JSON.stringify(error)}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Find Home/Room in {city.name}</Text>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Featured Districts</Text>
          <View style={styles.sectionBody}>
            <View style={styles.grid}>
              {city.districts.map((item, index) => (
                <Pressable
                  key={index}
                  style={styles.districtCard}
                  onPress={() => console.log(`${item.name}`)}
                  android_ripple={styles.androidRipple}>
                  <Image
                    source={item.image}
                    style={styles.districtCardThumbnail}
                  />
                  <Text style={styles.districtCardTitle}>{item.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Listings for you</Text>
          <View style={styles.sectionBody}>
            <ListingList data={items} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
