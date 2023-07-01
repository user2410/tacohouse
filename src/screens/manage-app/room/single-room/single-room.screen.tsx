import ShareButton from "../../../../components/button";
import BigText from "@components/text/BigText";
import RegularText from "@components/text/RegularText";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Image, SafeAreaView, StyleSheet } from "react-native";

// Icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Facility from "./facility";
import Gallery from "./gallery";
import { Color } from "@assets/styles/global-styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RoomService } from "@services/room.service";
import { Button, Text } from "react-native-paper";
import LoadingComponent from "@components/loading/loading";
import ErrorComponent from "@components/error/error";

export function SingleRoomScreen(): React.ReactElement {
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'SingleRoom'>>();
  const route = useRoute<RouteProp<ManageAppParamList, 'SingleRoom'>>();
  const id = route.params?.id;
  if (!id) {
    navigation.goBack();
  }

  const [room, setRoom] = React.useState<any>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await RoomService.getRoom(id);
        if (!res) {
          throw { message: 'Not found' }
        }
        setRoom(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  return isLoading ? (
    <LoadingComponent/>
  ) : error ? (
    <ErrorComponent error={error}/>
  ) :(
    <SafeAreaView style={{
      backgroundColor: 'white',
      flex: 1,
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{uri: room.image}} />
        <View style={styles.body}>
          {/* Header */}
          <View style={styles.box}>
            <View style={styles.containerInlineGroup}>
              <View>
                <BigText textStyles={{ fontSize: 28 }}>{room.roomName}</BigText>
                <RegularText textStyles={{ fontSize: 14 }}>{room.address}</RegularText>
              </View>
              <View>
                <BigText textStyles={{ fontSize: 18 }}>{room.price.toLocaleString()} VND</BigText>
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
              ...styles.containerInlineGroup,
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
                <RegularText textStyles={{ fontSize: 14, fontWeight: 'bold' }}>{room.area} sqft</RegularText>
              </View>
            </View>
          </View>
          {/* End box - header */}
          {/* Reviews box */}
          <View style={styles.box}>
            <View style={styles.containerInlineGroup}>
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
          <View style={{ marginBottom: 5 }}>
            <BigText textStyles={{ fontSize: 24, marginVertical: 8 }}>Facilities</BigText>
            <Facility />
          </View>
          <View style={{ marginBottom: 5 }}>
            <BigText textStyles={{ fontSize: 24, marginVertical: 8 }}>Gallery</BigText>
            <Gallery />
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('EditRoom', { id })}
        style={{ padding: 2, marginTop: 4 }}
      >
        <RegularText textStyles={styles.editButton}>
          Edit
        </RegularText>
      </Pressable>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  containerInlineGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
    backgroundColor: Color.neutral,
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
  },
  editButton: {
    textAlign: 'center',
    backgroundColor: "#1a6985",
    borderRadius: 8,
    color: 'white',
    fontSize: 20,
    paddingVertical: 4,
  }
});
