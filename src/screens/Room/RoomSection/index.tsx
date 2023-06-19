import { mockRoomSection } from "@src/mock/roomSection";
import React from "react";
import {
    FlatList, StyleSheet, View,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import RoomItem from "./RoomItem";
import { AnimatedFAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const data = mockRoomSection;



export default function RoomSection(): React.ReactElement {
    const [isExtended, setIsExtended] = React.useState(true);

    const navigation = useNavigation();

    const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    const handleCreateRoom = () => {
        navigation.navigate('CreateRoom');
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                onScroll={onScroll}
                contentContainerStyle={{
                    rowGap: 10,
                }}
                keyExtractor={(item) => `room-section-${item.id.toString()}`}
                renderItem={({ item }) => <RoomItem {...item} />}
                showsVerticalScrollIndicator={false}
            />
            <AnimatedFAB
                icon={'plus'}
                label={'Create rooms'}
                extended={isExtended}
                onPress={() => handleCreateRoom()}
                visible={true}
                animateFrom={'right'}
                iconMode={'static'}
                style={styles.fabStyle}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: '100%',
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
});
