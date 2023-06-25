import BigText from "@components/text/BigText";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import RegularText from "@components/text/RegularText";

export default function TenantItem({tenant, onPressHandler}: {tenant: TenantEntity, onPressHandler: Function}): React.ReactElement {

  return (
    <Pressable style={styles.container} onPress={() => onPressHandler()}>
      <Image style={styles.image} source={require('@assets/images/avatar.jpg')} />
      <View>
        <BigText textStyles={{ fontSize: 22 }}>{tenant.userName}</BigText>
        <RegularText>{`Phone: ${tenant.phoneNumber}`}</RegularText>
        <BigText textStyles={{ fontSize: 21 }}>
          <RegularText textStyles={{ fontWeight: 'normal' }}>Room: </RegularText>
          {tenant.userRoom}
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