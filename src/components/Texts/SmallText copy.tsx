import React, { FunctionComponent } from "react";

// Types
import { TextProps } from "./types";
import { StyleSheet, Text } from "react-native";
import { colors } from "@src/utils/colors";

const styles = StyleSheet.create({
    container: {
        fontSize: 13,
        color: colors.gray,
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