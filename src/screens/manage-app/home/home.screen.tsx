import Section from '@components/section/section';
import { AppStackParamList } from '@navigation/app.navigator';
import { ManageAppParamList } from '@navigation/manage-app/manage-app.navigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CustomDrawer from './custom-drawer';
import styles from './home.styles';

type AppHomeNavProps = StackNavigationProp<AppStackParamList>;
type ManageNavProps = BottomTabNavigationProp<ManageAppParamList>;

export default function ManageHomeScreen() {
  const appNavigation = useNavigation<AppHomeNavProps>();
  const manageAppNavigation = useNavigation<ManageNavProps>();
  const manageAppRoute = useRoute<RouteProp<ManageAppParamList, 'Home'>>();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    manageAppNavigation.setOptions({
      headerTitle: 'Dashboard',
      headerLeft: () =>
        <FontAwesome5Icon
          name="bars"
          size={24}
          color="white"
          style={{ marginLeft: 15 }}
          onPress={() => setIsDrawerOpen(prev => !prev)}
        />,
    })
  }, [manageAppNavigation, manageAppRoute])

  return (
    <Drawer
      open={isDrawerOpen}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
      renderDrawerContent={() => (
        <View style={styles.modalView} onTouchEndCapture={() => setIsDrawerOpen(false)}>
          <CustomDrawer />
        </View>
      )}
      drawerType="front"
    >

      <View style={styles.sectionContainer}>
        <Section title="Manage Items" bodyStyle={styles.manageCardContainer}>
          <>
            {[
              // {
              //   imgSource: require('@assets/icons/manage-items/hostel.png'),
              //   title: 'Hostels',
              //   onPress: () => { },
              // },
              {
                imgSource: require('@assets/icons/manage-items/room.png'),
                title: 'Properties',
                onPress: () => manageAppNavigation.navigate('ManageProperties'),
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
              // {
              //   imgSource: require('@assets/icons/manage-items/water-tap.png'),
              //   title: 'Electric and Water',
              //   onPress: () => { },
              // },
              {
                imgSource: require('@assets/icons/manage-items/reservation.png'),
                title: 'Reservation',
                onPress: () => { },
              },
              {
                imgSource: require('@assets/icons/manage-items/tenant.png'),
                title: 'Tenants',
                onPress: () => manageAppNavigation.navigate('ManageTenants'),
              },
              {
                imgSource: require('@assets/icons/manage-items/invoice.png'),
                title: 'Invoices',
                onPress: () => manageAppNavigation.navigate('ManageInvoices'),
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
    </Drawer>
  );
}
