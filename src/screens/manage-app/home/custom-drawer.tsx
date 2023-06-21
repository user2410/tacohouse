import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_SIZE = 22;

const bodyItems = [
  {
    icon: <FontAwesome5Icon name="home" size={ICON_SIZE} />,
    title: 'Dashboard',
  },
  {
    icon: <FontAwesome5Icon name="building" size={ICON_SIZE} />,
    title: 'Manage Hostels',
  },
  {
    icon: <FontAwesome5Icon name="building" size={ICON_SIZE} />,
    title: 'Services',
  },
  {
    icon: <FontAwesome5Icon name="faucet" size={ICON_SIZE} />,
    title: 'Electric and water',
  },
  {
    icon: <FontAwesome5Icon name="file-contract" size={ICON_SIZE} />,
    title: 'Contracts',
  },
  {
    icon: <FontAwesome5Icon name="users" size={ICON_SIZE} />,
    title: 'Tenants',
  },
  {
    icon: <MaterialCommunityIcon name="finance" size={ICON_SIZE} />,
    title: 'Finance',
  },
  {
    icon: <MaterialIcon name="report-problem" size={ICON_SIZE} />,
    title: 'Reports',
  },
  {
    icon: <Ionicon name="chatbox-ellipses-sharp" size={ICON_SIZE} />,
    title: 'Chat',
  },
  {
    icon: <Ionicon name="analytics" size={ICON_SIZE} />,
    title: 'Bussiness and Analytics',
  },
  {
    icon: <FontAwesome5Icon name="house-damage" size={ICON_SIZE} />,
    title: 'Problems',
  },
  {
    icon: <FontAwesome5Icon name="building" size={ICON_SIZE} />,
    title: 'Assets Management',
  },
  {
    icon: <FontAwesome5Icon name="user-lock" size={ICON_SIZE} />,
    title: 'Roles and Permissions',
  },
];

const bottomItems = [
  {
    icon: <Ionicon name="share-social-outline" size={ICON_SIZE} />,
    title: 'Tell a Friend',
  },
  {
    icon: <MaterialIcon name="miscellaneous-services" size={ICON_SIZE} />,
    title: 'Settings',
  },
  {
    icon: <Ionicon name="exit-outline" size={ICON_SIZE} />,
    title: 'Sign out',
  },
];

function CustomDrawerItem({ icon, title, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={() => { }}
      style={styles.footerItem}>
      <View style={styles.footerItemView}>
        <View style={{width: ICON_SIZE+1, height: ICON_SIZE+1}}>{icon}</View>
        <Text style={styles.footerItemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function CustomDrawer() {
  return (
    <View style={styles.drawer}>
      <ImageBackground
        source={require('@assets/images/menu-bg.jpeg')}
        style={styles.header}>
        <Image
          source={require('@assets/images/avatar_placeholder.jpg')}
          style={styles.headerAvatar}
        />
        <Text style={styles.headerUsername}>John Doe</Text>
      </ImageBackground>
      {/* <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{backgroundColor: '#8200d6'}}
      >
        <View style={styles.bodyView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView> */}
      <ScrollView style={styles.bodyView}>
        {bodyItems.map((item, index) => (
          <CustomDrawerItem
            key={index}
            icon={item.icon}
            title={item.title}
            onPress={() => { }}
          />
        ))}
      </ScrollView>
      <View style={styles.footerView}>
        {bottomItems.map((item, index) => (
          <CustomDrawerItem
            key={index}
            icon={item.icon}
            title={item.title}
            onPress={() => { }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: '60%',
    height: '100%',
    flexDirection: 'column',
  },
  header: {
    padding: 20
  },
  headerAvatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  headerUsername: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  footerView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  footerItem: { paddingVertical: 10 },
  footerItemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItemTitle: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 15,
  },
});