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
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const bottomItems = [
  {
    icon: <Ionicons name="share-social-outline" size={22} />,
    title: 'Tell a Friend',
  },
  {
    icon: <MaterialIcons name="miscellaneous-services" size={22} />,
    title: 'Settings',
  },
  {
    icon: <Ionicons name="exit-outline" size={22} />,
    title: 'Sign out',
  },
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('@assets/images/menu-bg.jpeg')}
        style={styles.header}>
        <Image
          source={require('@assets/images/avatar_placeholder.jpg')}
          style={styles.headerAvatar}
        />
        <Text style={styles.headerUsername}>John Doe</Text>
      </ImageBackground>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{backgroundColor: '#8200d6'}}
      >
        <View style={styles.bodyView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerView}>
        {bottomItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            style={styles.footerItem}>
            <View style={styles.footerItemView}>
              {item.icon}
              <Text style={styles.footerItemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {padding: 20},
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
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  footerView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerItem: {paddingVertical: 10},
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

export default CustomDrawer;
