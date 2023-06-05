import React, {FunctionComponent} from 'react';

// Types
import {TextProps} from './types';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontSize: 13,
    color: '#888',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

const SmallText: FunctionComponent<TextProps> = props => {
  return (
    <Text style={[styles.container, props.textStyles]}>{props.children}</Text>
  );
};

export default SmallText;
