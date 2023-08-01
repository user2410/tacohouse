import BigText from "@components/text/BigText";
import RegularText from "@components/text/RegularText";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { TenantService } from "@services/user.service";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { history } from "./static";
import ShareButton from "@components/button";
import LoadingComponent from "@components/loading/loading";
import ErrorComponent from "@components/error/error";

export default function SingleTenantScreen() : React.ReactElement {
  const isFocused = useIsFocused();
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'SingleTenant'>>();
  const route = useRoute<RouteProp<ManageAppParamList, 'SingleTenant'>>();
  const id = route.params?.id;
  if (!id) {
    navigation.goBack();
  }

  const [tenant, setTenant] = React.useState<TenantEntity>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(undefined);

  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    (async () => {
      try {
        setIsLoading(true);
        const res = await TenantService.getTenantById(id);
        if (!res) {
          throw { message: 'Not found' }
        }
        setTenant(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [isFocused]);

  const handleChangeAvatar = () => {

  }

  return isLoading ? (
    <LoadingComponent/>
  ) : error ? (
    <ErrorComponent error={error}/>
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.header}>
          <Image style={styles.background} source={require("@assets/images/login_background.png")} />
          <View style={{ marginVertical: 10 }}>
            <Avatar.Image size={120} source={require('@assets/images/avatar.jpg')} />
            <TouchableOpacity
              onPress={handleChangeAvatar}
              activeOpacity={0.5}
            >
              <FontAwesome5Icon style={styles.camera} size={15} name="camera" color={'black'} />
            </TouchableOpacity>
          </View>
          <RegularText textStyles={{ fontSize: 25 }}>
            {tenant?.userName}
          </RegularText>
          <RegularText>
            {`${tenant?.userRoom} - ${tenant?.userBuilding}`}
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
            <EntypoIcon name="address" size={25} color='black' />
            <RegularText>
              {tenant?.address}
            </RegularText>
          </View>
          <View style={styles.inLine}>
            <FontAwesome5Icon name="address-card" size={25} color='black' />
            <RegularText>
              {tenant?.citizenNumber}
            </RegularText>
          </View>
          <View style={styles.inLine}>
            <FontAwesome5Icon name="phone" size={25} color='black' />
            <RegularText>
              {tenant?.phoneNumber}
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
              history.map((item, index) => (
                <View style={styles.inLine} key={`${item.id}-history-${tenant?.id}`}>
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
            <ShareButton buttonStyle={{ marginTop: 8, marginBottom: 15, backgroundColor: '#cf222e', width: "90%" }}>
              <RegularText textStyles={{ color: 'white', fontWeight: 'bold' }}>
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