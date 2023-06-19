import ShareButton from "@components/Button";
import BigText from "@components/Texts/BigText";
import RegularText from "@components/Texts/RegularText";
import React from "react";
import { Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Avatar } from "react-native-paper";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Gallery from "@screens/Room/Gallery";
import { invoiceStatusColor } from "@screens/Invoice/InvoiceSection/InvoiceItem";
import { FlatList } from "react-native";

const props = {
    id: 1,
    userName: "Nguyễn Chí Phèo",
    phoneNumber: "0912345678",
    userRoom: 'P302',
    userBuilding: "Tòa A1",
    address: "số 1 Đại Cồ Việt, Hà Nội, Việt Nam",
    citizenNumber: '01223123123',
    history: [
        {
            id: 1,
            date: '30/5/2022',
            status: invoiceStatusColor.overdue,
            money: 10000000,
        },
        {
            id: 2,
            date: '12/6/2023',
            status: invoiceStatusColor.paid,
            money: 12300000,
        },
        {
            id: 3,
            date: '12/7/2023',
            status: invoiceStatusColor.pending,
            money: 13400000,
        },
    ]
}

export default function SingleTenant() {

    const handleChangeAvatar = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.header}>
                    <Image style={styles.background} source={require("@assets/images/login_background.png")} />
                    <View style={{ marginVertical: 10 }}>
                        <Avatar.Image size={120} source={require('@assets/images/avatar.jpg')} />
                        <TouchableOpacity
                            onPress={handleChangeAvatar}
                            activeOpacity={0.5}
                        >
                            <FontAwesome5 style={styles.camera} size={15} name="camera" color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <RegularText textStyles={{ fontSize: 25 }}>
                        {props.userName}
                    </RegularText>
                    <RegularText>
                        {`${props.userRoom} - ${props.userBuilding}`}
                    </RegularText>
                    <ShareButton buttonStyle={{ marginTop: 8, marginBottom: 15, backgroundColor: '#E4E6EB', width: "80%" }}>
                        <RegularText>
                            Update profile
                        </RegularText>
                    </ShareButton>
                </View>
                {/* body */}
                <View style={styles.body}>
                    <BigText>
                        Introduction
                    </BigText>
                    <View style={styles.inLine}>
                        <Entypo name="address" size={25} color='black' />
                        <RegularText>
                            {props.address}
                        </RegularText>
                    </View>
                    <View style={styles.inLine}>
                        <FontAwesome5 name="address-card" size={25} color='black' />
                        <RegularText>
                            {props.citizenNumber}
                        </RegularText>
                    </View>
                    <View style={styles.inLine}>
                        <FontAwesome5 name="phone" size={25} color='black' />
                        <RegularText>
                            {props.phoneNumber}
                        </RegularText>
                    </View>
                </View>
                {/*  */}
                <View style={styles.body}>
                    <BigText>
                        Payment history
                    </BigText>
                    <RegularText textStyles={{ fontSize: 20, marginBottom: 10 }}>
                        Monthly payment date: 15
                    </RegularText>
                    <ScrollView style={{ maxHeight: 200 }}>
                        {
                            props.history.map((item, index) => (
                                <View style={styles.inLine} key={`${item.id}-history-${props.id}`}>
                                    <RegularText textStyles={{ color: `${item.status.backgroundColor}` }}>
                                        {item.date}
                                    </RegularText>
                                    <RegularText>
                                        {item.money.toLocaleString()} VND
                                    </RegularText>
                                </View>
                            ))
                        }
                    </ScrollView>
                    {/* Delete button */}
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <ShareButton buttonStyle={{ marginTop: 8, marginBottom: 15, backgroundColor: '#E4E6EB', width: "90%" }}>
                            <RegularText textStyles={{ color: '#cf222e', fontWeight: 'bold' }}>
                                Delete profile
                            </RegularText>
                        </ShareButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    background: {
        width: "100%",
        height: 120,
        resizeMode: 'cover',
    },
    camera: {
        position: 'absolute',
        bottom: -2,
        right: 2,
        padding: 10,
        backgroundColor: '#888888',
        borderRadius: 50,
    },
    body: {
        backgroundColor: 'white',
        margin: 15,
        padding: 12,
        borderRadius: 10,
    },
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginVertical: 2,
    }
});
