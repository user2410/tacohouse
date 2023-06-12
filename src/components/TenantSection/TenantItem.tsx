import BigText from "@components/Texts/BigText";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TenantItemProps } from "./stypes";
import RegularText from "@components/Texts/RegularText";




export default function UserItem(props: TenantItemProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('@assets/images/avatar.jpg')} />
            <View>
                <BigText textStyles={{ fontSize: 22 }}>{props.userName}</BigText>
                <RegularText>{`Phone: ${props.phoneNumber}`}</RegularText>
                <BigText textStyles={{ fontSize: 21 }}>
                    <RegularText textStyles={{ fontWeight: 'normal' }}>Room: </RegularText>
                    {props.userRoom}
                </BigText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
    },
    image: {
        width: 100,
        height: 120,
        resizeMode: 'cover',
        marginRight: 20
    }
});
