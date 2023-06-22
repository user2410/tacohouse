import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import RoomItem from "./room-item";
import { RoomService } from "@services/room.service";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export default function ManageRoomsScreen(): React.ReactElement {
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'ManageRooms'>>();

  const [rooms, setRooms] = React.useState<RoomEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await RoomService.getRooms();
        setRooms(res);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  return isLoading ? (
    <View><Text>Loading...</Text></View>
  ) : error ? (
    <View><Text>{JSON.stringify(error)}</Text></View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={rooms}
        contentContainerStyle={{
          rowGap: 10,
        }}
        keyExtractor={(item) => `room-section-${item.id.toString()}`}
        renderItem={({ item }) => <RoomItem room={item} onPressHandler={(() => navigation.navigate('SingleRoom', {id: item.id}))} />}
        showsVerticalScrollIndicator={false}
      />
      <Pressable onPress={() => navigation.navigate('CreateRoom')}>
        <Text>Create Room</Text>
      </Pressable>
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