import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { Image } from 'react-native';

const managedItems = [
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Manage Hostel',
    link: 'ManageHostel',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Rooms',
    link: 'Rooms',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Tenants',
    link: 'Tenants',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Invoices',
    link: "Invoices",
  },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Contracts',
  //   link: "Contracts",
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Services',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Electric and Water',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Reservation',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Payments',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Expenses',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Deposit',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Business analytics',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Problem',
  // },
  // {
  //   imgSource: require('@assets/images/avatar_placeholder.jpg'),
  //   title: 'Appointment',
  // },
];

// Types 
import { StackScreenProps } from "@react-navigation/stack";
import { HomeDrawerParamList } from '@navigation/Home/HomeNavigator';

type Props = StackScreenProps<HomeDrawerParamList, "Home">;


export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Manage</Text>
        </View>
        <View style={styles.sectionBody}>
          {/* render list icon */}
          {managedItems.map((item, index) => (
            <Pressable
              key={`${index}-list-icon-home`}
              style={styles.manageCard}
              onPress={() => item.link ? navigation.navigate(item.link as never) : ''}>
              <Image source={item.imgSource} style={styles.manageCardImage} />
              <Text numberOfLines={2} style={styles.manageCardTitle}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>News</Text>
        </View>
        <View style={styles.sectionBody}></View>
      </View>
    </View>
  );
}
