import {ListingNavigatorParams} from '@navigation/listing-app/listing-app.navigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';

type ListingManageProps = BottomTabNavigationProp<
  ListingNavigatorParams,
  'ManageListings'
>;

export default function ListingManageScreen() {
  const navigation = useNavigation<ListingManageProps>();

  return (
    <SafeAreaView style={styles.flexFull}>
      <FAB style={styles.fab} icon="plus" />
    </SafeAreaView>
  );
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
