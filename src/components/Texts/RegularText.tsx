import React, { FunctionComponent } from "react";

// Types
import { TextProps } from "./types";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
    }
});



const RegularText: FunctionComponent<TextProps> = (props) => {
    return (
        <Text style={[styles.container, props.textStyles]}>
            {props.children}
        </Text>
    );
}

export default RegularText;