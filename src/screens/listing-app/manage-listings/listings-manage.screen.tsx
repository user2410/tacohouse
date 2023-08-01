import { Margin } from '@assets/styles/global-styles';
import ErrorComponent from '@components/error/error';
import LoadingComponent from '@components/loading/loading';
import { ListingEntity } from '@models/listing.entity';
import { ListingNavigatorParams } from '@navigation/listing-app/listing-app.navigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import ListingService from '@services/listing.service';
import React from 'react';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { SceneMap, TabView } from 'react-native-tab-view';
import ListingItem from './listing-item';

type ListingManageProps = BottomTabNavigationProp<
  ListingNavigatorParams,
  'ManageListings'
>;

export default function ListingManageScreen() {
  const navigation = useNavigation<ListingManageProps>();

  const [tabViewIndex, setTabViewIndex] = React.useState<number>(0);
  const [tabViewRoutes] = React.useState<any[]>([
    { key: 'active', title: 'Active Listings' },
    { key: 'inactive', title: 'Archived Listings' },
  ]);

  return (
    <SafeAreaView style={styles.flexFull}>
      <TabView
        navigationState={{ index: tabViewIndex, routes: tabViewRoutes }}
        renderScene={SceneMap({
          active: ListingView('active'),
          inactive: ListingView('inactive'),
        })}
        onIndexChange={setTabViewIndex}
      // initialLayout={{ width: Dimensions.get('window').width }}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => navigation.navigate('CreateLisiting')} />
    </SafeAreaView>
  );
}

const ListingView = (type : 'active' | 'inactive') => {
  return () => {
    const [refreshing, setRefreshing] = React.useState<boolean>(false);
    const [listings, setListings] = React.useState<ListingEntity[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<any>();

    const loadDataCreator = (refreshing: boolean) => async () => {
      try {
        refreshing ? setRefreshing(true) : setLoading(true); 
        const res = await ListingService.getNewListings(
          type === 'active' ? 4 : 2,
          type === 'active' ? 0 : 4,
        );
        setListings(res);
      } catch (error) {
        setError(error);
      } finally {
        refreshing ? setRefreshing(false) : setLoading(false);
      }
    }

    React.useEffect(() => {
      loadDataCreator(false)();
    }, []);

    return loading ? (
      <LoadingComponent/>
    ) : error ? (
      <ErrorComponent error={error}/>
    ) : (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={listings}
        renderItem={({ item }) => <View style={{ marginVertical: Margin.m_3xs, marginHorizontal: Margin.m_mini }}><ListingItem listing={item} /></View>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadDataCreator(true)}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 12,
  },
});
