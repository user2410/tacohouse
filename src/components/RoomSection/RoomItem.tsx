import React from "react";
import { RoomItemProps } from "./types";
import { mockRoomItem } from "@src/mock/roomSection";
import { Image, StyleSheet, View } from "react-native";
import SmallText from "@components/Texts/SmallText copy";

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import BigText from "@components/Texts/BigText";
import RegularText from "@components/Texts/RegularText";

export default function RoomItem( props: RoomItemProps):React.ReactElement {
    return(
        <View style={styles.container}>
            <View style={{ position: 'relative'}}>
                <Image style={styles.image} source={require('@assets/images/room1.jpg')} />
                <Ionicons size={20} color={'red'} style={styles.heart} name={props.liked ? "heart" : 'heart-outline'} />
            </View>
            <View>
                <BigText textStyles={{ marginBottom: 2}}>{props.roomName}</BigText>
                <RegularText>{props.address}</RegularText>
            </View>
            <View style={styles.containerInlineGroup}>
                <View style={styles.containerInlineGroup}>
                    <BigText textStyles={{ fontSize: 24 }}>{props.price.toLocaleString()} VND</BigText>
                    <RegularText> /Month</RegularText>
                </View>
                <View>
                    <RegularText>{props.area} sqft</RegularText>
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {

    },
    image: {
        height: 160,
        width: '100%',
        borderRadius: 16,
    },
    heart: {
        position: 'absolute',
        top: 7,
        right: 7,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    containerInlineGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemInlineGroup: {
        
    }
});