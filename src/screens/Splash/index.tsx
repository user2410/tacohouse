import React, {useEffect} from 'react';
import {ActivityIndicator, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {AppStackParamList} from '@navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type SplashScreenProp = StackNavigationProp<AppStackParamList, 'Splash'>;

export default function SplashScreen(): JSX.Element {
  const navigation = useNavigation<SplashScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GettingStarted');
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size="small" color={styles.activityIndicator.color} />
      <Text>Home sweet home</Text>
    </SafeAreaView>
  );
}
