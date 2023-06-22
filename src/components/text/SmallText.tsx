import React, { FunctionComponent } from "react";

// Types
import { TextProps } from "./types";
import { StyleSheet, Text } from "react-native";
import { Color } from "@assets/styles/global-styles";

const styles = StyleSheet.create({
  container: {
    fontSize: 13,
    color: Color.gray,
    textAlign: 'left',
    fontWeight: 'bold',
  }
});

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
    <Text style={[styles.container, props.textStyles]}>
      {props.children}
    </Text>
  );
}

export default SmallText;