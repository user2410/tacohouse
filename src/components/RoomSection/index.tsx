import { mockRoomSection } from "@src/mock/roomSection";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RoomItem from "./RoomItem";

const data = mockRoomSection;

export default function RoomSection(): React.ReactElement {
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                contentContainerStyle={{
                    rowGap: 10,
                }}
                keyExtractor={(item) => `room-section-${item.id.toString()}`}
                renderItem={({ item }) => <RoomItem {...item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: '100%',
    }
});
