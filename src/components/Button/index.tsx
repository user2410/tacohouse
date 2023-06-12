import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

export interface ShareButtonProps {
    onPress?: () => void,
    children: ReactNode,
    buttonStyle?: StyleProp<ViewStyle>;
}

const ShareButton: React.FC<ShareButtonProps> = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, props.buttonStyle]}
            onPress={props.onPress}
        >
            {props.children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2596be',
    },
});

export default ShareButton;