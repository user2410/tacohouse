import RegularText from "@components/Texts/RegularText";
import { colors } from "@src/utils/colors";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

const list = [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
]

export default function Gallery(): React.ReactElement {
    return (
        <View style={styles.container}>
            {
                list.map((item, index) => index < 5 && (
                    <Image key={`gallery-item-${index}`} style={styles.image} source={{ uri:  item}}/>
                ))
            }
            <View style={{
                ...styles.image,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Avatar.Text size={65} label={`${list.length - 5}+`} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.neutral,
        borderRadius: 8,
        borderColor: '#DEEAFD',
        borderWidth: 1,
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 16,
    },
    text: {
        fontSize: 14,
    }
});