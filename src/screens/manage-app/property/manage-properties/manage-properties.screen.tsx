import ErrorComponent from "@components/error/error";
import LoadingComponent from "@components/loading/loading";
import PropertyItem from "@components/property/property-item";
import { PropertyEntity } from "@models/property.entity";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { PropertyService } from "@services/property.service";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { Text as RNPText } from "react-native-paper";
import styles from "./styles";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ManagePropertiesScreen(): React.ReactElement {
  const isFocused = useIsFocused();
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'ManageProperties'>>();
  // const route = useRoute<RouteProp<ManageAppParamList, 'ManageProperties'>>();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({

  //   })
  // }, [navigation, route])

  const [properties, setProperties] = React.useState<PropertyEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(undefined);

  const [selectMode, setSelectMode] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleOnPress = (id: string) => {
    if(selectMode) {
      selectItem(id);
      console.log('onPress:', selectMode, selectedItems);
      return;
    }
    console.log('onPress:', selectMode, selectedItems);
    navigation.navigate('SingleProperty', { id });
  }

  const handleOnLongPress = (id: string) => {
    if(!selectMode) {
      setSelectMode(true);
    }
    selectItem(id);
    console.log('onLongPress:', selectMode, selectedItems);
  }

  const selectItem = (id: string) => {
    if(selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
      return;
    }
    setSelectedItems([...selectedItems, id]);
  }

  React.useEffect(() => {
    setSelectMode(false);
    setSelectedItems([]);
    (async () => {
      try {
        setIsLoading(true);
        const res = await PropertyService.getProperties();
        setProperties(res);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [isFocused]);

  React.useEffect(() => {
    if(!selectMode) {
      setSelectedItems([]);
      navigation.setOptions({
        headerStyle: {backgroundColor: '#eb344f'},
        headerTintColor: '#fff',
        headerTitle: 'Manage Properties',
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <MaterialCommunityIcon 
              name="home-plus" 
              size={24}
              color="white"
              onPress={() => navigation.navigate('CreateProperty')}/>
          </View>
        )
      })
      return;
    }
  }, [selectMode]);

  React.useEffect(() => {
    selectMode && navigation.setOptions({
      headerStyle: {backgroundColor: '#fff'},
      headerTintColor: '#000',
      headerTitle: `${selectedItems.length} items selected`,
      headerRight: (() => (
        <View style={styles.headerRightIcons}>
          <Pressable onPress={() => setSelectMode(false)}>
            <RNPText variant="titleSmall">
              Cancel
            </RNPText>
          </Pressable>
          <Pressable onPress={() => console.log(`Delete ${selectedItems.toString()} ?`)}>
            <RNPText variant="titleSmall">
              Delete
            </RNPText>
          </Pressable>
        </View>
      ))
    })
  }, [selectMode, selectedItems]);

  return isLoading ? (
    <LoadingComponent/>
  ) : error ? (
    <ErrorComponent error={error}/>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={properties}
        contentContainerStyle={{
          rowGap: 10,
        }}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => handleOnPress(item.id)}
            onLongPress={() => handleOnLongPress(item.id)}
            style={selectedItems.includes(item.id) && selectMode ? {backgroundColor: '#a0a0a0'} : null}>
            <PropertyItem property={item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}