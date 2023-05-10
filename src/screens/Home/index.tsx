import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {};

export default function HomeScreen({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>
        Reload the App to see a splash screen
      </Text>
    </View>
  );
}
