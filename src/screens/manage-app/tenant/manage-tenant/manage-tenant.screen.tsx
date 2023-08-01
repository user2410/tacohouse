import React from "react";
import TenantItem from "./tenant-item";
import { AnimatedFAB } from "react-native-paper";
import {
  View,
  FlatList,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import RegularText from "@components/text/RegularText";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import BigText from "@components/text/BigText";
import { TenantService } from "@services/user.service";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ManageAppParamList } from "@navigation/manage-app/manage-app.navigator";
import { useNavigation } from "@react-navigation/native";

export default function ManageTenantsScreen(): React.ReactElement {
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'ManageTenants'>>();

  const [isExtended, setIsExtended] = React.useState(true);
  const [tenants, setTenants] = React.useState<TenantEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await TenantService.getTenants();
        setTenants(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [])

  const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const handleCreateTenant = () => {
    console.log("Create new tenant");
  }

  const calcNumberFloor = (tenants: TenantEntity[]) => { 
    let sum = 0;
    let floors: Array<number> = [];

    if(tenants.length === 0) return 0;

    tenants.map(item => {
        let floor  = parseInt(item.userRoom.slice(1, -2));
        const foundValue = floors.find((element) => element === floor);

        if (!foundValue) {
            floors.push(floor);
            sum += 1;
        }
    });

    return sum;
};

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, }}>
          <FontAwesome5Icon name="hotel" size={35} color='black' />
          <BigText>
            Tòa chung cư số 1
          </BigText>
        </View>
        <RegularText textStyles={{ fontSize: 20 }}>
          Number tenants: {tenants.length}
        </RegularText>
        <RegularText textStyles={{ fontSize: 20 }}>
          Number Floor: {calcNumberFloor(tenants)}
        </RegularText>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={{
          gap: 10
        }}
        data={tenants}
        keyExtractor={(item) => `user-section${item.id}`}
        renderItem={({ item }) => <TenantItem tenant={item} onPressHandler={() => navigation.navigate('SingleTenant', {id: item.id})} />}
      />
      <AnimatedFAB
        icon={'plus'}
        label={'Create tenant'}
        extended={isExtended}
        onPress={() => handleCreateTenant()}
        visible={true}
        animateFrom={'right'}
        iconMode={'static'}
        style={styles.fabStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});