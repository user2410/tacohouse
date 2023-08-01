import React from 'react';
import { StyleSheet, View } from 'react-native';

// Image picker
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";


export default function EditPropertyScreen(): React.ReactElement {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ManageAppParamList, 'EditProperty'>>();
  const id = route.params?.id;
  if (!id) {
    navigation.goBack();
  }

  return (
    <View></View>
  )
}

const styles = StyleSheet.create({
  
});