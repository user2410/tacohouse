import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './home.styles';
import { Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '@navigation/app.navigator';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ManageAppParamList } from '@navigation/manage-app/manage-app.navigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HomeDrawerParamList } from '@navigation/manage-app/home/home.navigator';
import Section from '@components/section/section';

type AppHomeNavProps = StackNavigationProp<AppStackParamList>;
type ManageNavProps = BottomTabNavigationProp<ManageAppParamList>;
type ManageHomeNavProps = DrawerNavigationProp<HomeDrawerParamList>;

export default function HomeScreen() {
  const appNavigation = useNavigation<AppHomeNavProps>();
  const manageAppNavigation = useNavigation<ManageNavProps>();
  const manageHomeNavigation = useNavigation<ManageHomeNavProps>();

  return (
    <View style={styles.sectionContainer}>
      <Section title="Manage Items" bodyStyle={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: 15,
      }}>
        <>
          {[
            {
              imgSource: require('@assets/icons/manage-items/hostel.png'),
              title: 'Manage Hostel',
              onPress: () => manageHomeNavigation.navigate('ManageHostel'),
            },
            {
              imgSource: require('@assets/icons/manage-items/room.png'),
              title: 'Rooms',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/services.png'),
              title: 'Services',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/contract.png'),
              title: 'Contracts',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/water-tap.png'),
              title: 'Electric and Water',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/reservation.png'),
              title: 'Reservation',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/tenant.png'),
              title: 'Tenants',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/invoice.png'),
              title: 'Invoices',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/payment.png'),
              title: 'Payments',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/expenses.png'),
              title: 'Expenses',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/deposit.png'),
              title: 'Deposit',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/bussiness-analytics.png'),
              title: 'Business analytics',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/problem.png'),
              title: 'Problem',
              onPress: () => { },
            },
            {
              imgSource: require('@assets/icons/manage-items/appointment.png'),
              title: 'Appointment',
              onPress: () => { },
            },
          ].map((item, index) => (
            <Pressable
              key={index}
              style={styles.manageCard}
              onPress={item.onPress}>
              <Image source={item.imgSource} style={styles.manageCardImage} />
              <Text numberOfLines={2} style={styles.manageCardTitle}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </>
      </Section>
      <Section title="News">
        <Pressable onPress={() => appNavigation.replace('ListingAppNav')}>
          <Text>Go to listings</Text>
        </Pressable>
      </Section>
    </View>
  );
}
