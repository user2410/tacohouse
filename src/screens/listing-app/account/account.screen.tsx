import { AppStackParamList } from '@navigation/app.navigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './account.styles';

const options = [
  {
    title: 'My listings',
    icon: <FontAwesome5Icon name="list" />,
  },
  {
    title: 'Supports',
    icon: <MaterialIcon name="support" />,
  },
  {
    title: 'Share the app',
    icon: <MaterialIcon name="share" />,
  },
  {
    title: 'Logout',
    icon: <MaterialIcon name="logout" />,
  },
];

type AppNavProps = StackNavigationProp<AppStackParamList>;

export default function ListingAccountScreen() {
  const appNavigation = useNavigation<AppNavProps>();

  return (
    <SafeAreaView style={styles.flexFull}>
      {/* Header and avatar */}
      <ImageBackground
        source={require('@assets/images/menu-bg.jpeg')}
        style={styles.header}>
        <Image
          source={require('@assets/images/avatar_placeholder.jpg')}
          style={styles.headerAvatar}
        />
      </ImageBackground>
      <View style={styles.optionView}>
        <TouchableOpacity
          onPress={() => appNavigation.replace('ManageAppNav')}
          style={styles.optionItem}>
          <View style={styles.optionItemView}>
            <MaterialIcon name="dashboard" />
            <Text style={styles.optionItemTitle}>Admin App</Text>
          </View>
        </TouchableOpacity>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            style={styles.optionItem}>
            <View style={styles.optionItemView}>
              {item.icon}
              <Text style={styles.optionItemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}