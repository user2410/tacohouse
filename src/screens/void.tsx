import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const VoidScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@assets/images/no-data.jpg')}
        style={styles.icon}
      />
      <Text>Void screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'capitalize',
    fontFamily: 'sans-serif',
    fontSize: 24,
    marginTop: 1,
  },
  icon: {
    width: 150,
    height: 150,
  },
});
