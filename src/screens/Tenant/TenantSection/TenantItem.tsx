import BigText from "@components/Texts/BigText";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TenantItemProps } from "./stypes";
import RegularText from "@components/Texts/RegularText";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";




export default function UserItem(props: TenantItemProps): React.ReactElement {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('SingleTenant');
    }
    return (
        <Pressable style={styles.container} onPress={() => handleNavigate()}>
            <Image style={styles.image} source={require('@assets/images/avatar.jpg')} />
            <View>
                <BigText textStyles={{ fontSize: 22 }}>{props.userName}</BigText>
                <RegularText>{`Phone: ${props.phoneNumber}`}</RegularText>
                <BigText textStyles={{ fontSize: 21 }}>
                    <RegularText textStyles={{ fontWeight: 'normal' }}>Room: </RegularText>
                    {props.userRoom}
                </BigText>
            </View>
        </Pressable>
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
