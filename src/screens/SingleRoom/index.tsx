import ShareButton from "@components/Button";
import { RoomItemProps } from "@components/RoomSection/types";
import BigText from "@components/Texts/BigText";
import RegularText from "@components/Texts/RegularText";
import { mockRoomItem } from "@src/mock/roomSection";
import { colors } from "@src/utils/colors";
import { shareStyles } from "@src/utils/shareStyles";
import React from "react";
import { ScrollView, View } from "react-native";
import { Image, SafeAreaView, StyleSheet } from "react-native";

// Icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Facility from "./Facility";
import Gallery from "./Gallery";

const prop = mockRoomItem;

export function SingleRoom(): React.ReactElement {
    return (
        <SafeAreaView style={{
            backgroundColor: 'white',
            flex: 1,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={require('@assets/images/room1.jpg')} />
                <View style={styles.body}>
                    {/* Header */}
                    <View style={styles.box}>
                        <View style={[shareStyles.containerInlineGroup,]}>
                            <View>
                                <BigText textStyles={{ fontSize: 28 }}>{prop.roomName}</BigText>
                                <RegularText textStyles={{ fontSize: 14 }}>{prop.address}</RegularText>
                            </View>
                            <View>
                                <BigText textStyles={{ fontSize: 18 }}>{prop.price.toLocaleString()} VND</BigText>
                                <RegularText
                                    textStyles={{
                                        fontSize: 16,
                                        color: 'blue',
                                        textAlign: 'center',
                                    }}
                                >/Day</RegularText>
                            </View>
                        </View>
                        {/* furniture */}
                        <View style={{
                            ...shareStyles.containerInlineGroup,
                            marginTop: 8,
                        }}>
                            <View style={styles.furniture}>
                                <FontAwesome5 size={20} name="bed" color="black" />
                                <RegularText textStyles={{ fontSize: 14, fontWeight: 'bold' }}>Bedroom</RegularText>
                            </View>
                            <View style={styles.furniture}>
                                <FontAwesome5 size={20} name="bath" color="black" />
                                <RegularText textStyles={{ fontSize: 14, fontWeight: 'bold' }}>Bathroom</RegularText>
                            </View>
                            <View style={styles.furniture}>
                                <MaterialCommunityIcons size={20} name="vector-square" color="black" />
                                <RegularText textStyles={{ fontSize: 14, fontWeight: 'bold' }}>{prop.area} sqft</RegularText>
                            </View>
                        </View>
                    </View>
                    {/* End box - header */}
                    {/* Reviews box */}
                    <View style={styles.box}>
                        <View style={shareStyles.containerInlineGroup}>
                            <BigText textStyles={{ fontSize: 22 }}>Reviews</BigText>
                            <View>
                                <View style={{ flexDirection: 'row', columnGap: 8, alignItems: 'center' }}>
                                    <MaterialIcons size={28} name="star" color="#E6C228" />
                                    <BigText textStyles={{ fontSize: 25 }}>4.5</BigText>
                                </View>
                                <RegularText textStyles={{ fontSize: 16 }}>
                                    {`(1290 Reviews)`}
                                </RegularText>
                            </View>
                        </View>
                    </View>
                    {/* End box review */}
                    {/* Box overview */}
                    <View style={{
                        marginVertical: 10,
                        paddingLeft: 2,
                    }}>
                        <BigText textStyles={{ fontSize: 22 }}>Overview</BigText>
                        <RegularText textStyles={{ fontSize: 16 }}>
                            Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks we were in Europe.
                            Thanks for making our visit to Florence that much better.
                        </RegularText>
                    </View>
                    {/* End overview */}
                    {/* Booking */}
                    <ShareButton>
                        <BigText textStyles={{ color: 'white', marginRight: 20, fontSize: 24 }}>
                            Booking Now
                        </BigText>
                        <FontAwesome5 size={26} name="arrow-right" color={'white'} />
                    </ShareButton>
                    {/* Facilities */}
                    <View style={{ marginBottom: 5}}>
                        <BigText textStyles={{ fontSize: 24, marginVertical: 8 }}>Facilities</BigText>
                        <Facility />
                    </View>
                    <View style={{ marginBottom: 5}}>
                        <BigText textStyles={{ fontSize: 24, marginVertical: 8 }}>Gallery</BigText>
                        <Gallery />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    body: {
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    box: {
        backgroundColor: colors.neutral,
        padding: 16,
        borderRadius: 16,
        marginVertical: 10,
        borderColor: '#DEEAFD',
        borderWidth: 1.5,
    },
    furniture: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 5,
    }
});