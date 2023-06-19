import React from "react";
import { TenantItemProps, TenantSectionProps } from "./stypes";
import UserItem from "./TenantItem";
import { AnimatedFAB } from "react-native-paper";
import {
    View,
    FlatList,
    StyleSheet,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import BigText from "@components/Texts/BigText";
import RegularText from "@components/Texts/RegularText";
import { useNavigation } from "@react-navigation/native";

const props: TenantSectionProps = {
    data: [
        {
            id: 1,
            userName: "Nguyễn Chí Phèo",
            phoneNumber: "0912345678",
            userRoom: 'P201',
        },
        {
            id: 2,
            userName: "Nguyễn Thị Nở",
            phoneNumber: "0912345679",
            userRoom: 'P234',
        },
        {
            id: 3,
            userName: "Nguyễn Chí Phèo",
            phoneNumber: "0912345678",
            userRoom: 'P203',
        },
        {
            id: 4,
            userName: "Nguyễn Thị Nở",
            phoneNumber: "0912345679",
            userRoom: 'P301',
        },
        {
            id: 5,
            userName: "Nguyễn Chí Phèo",
            phoneNumber: "0912345678",
            userRoom: 'P302',
        },
        {
            id: 6,
            userName: "Nguyễn Thị Nở",
            phoneNumber: "0912345679",
            userRoom: 'P303',
        },
    ],
}

export default function TenantSection(): React.ReactElement {
    const [isExtended, setIsExtended] = React.useState(true);

    const navigation = useNavigation();

    const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    const handleCreateTenant = () => {
        console.log("Create new tenant");
        navigation.navigate("CreateTenant");
    }

    const calcNumberFloor = (section: TenantSectionProps) => { 
        let sum = 0;
        let floors: Array<number> = [];

        if(section.data.length === 0) return 0;

        section.data.map(item => {
            let floor  = parseInt(item.userRoom.slice(1, -2));
            const foundValue = floors.find((element) => element === floor);

            if (!foundValue) {
                floors.push(floor);
                sum += 1;
            }
        });

        return sum;
    };

    calcNumberFloor(props);

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
                    Number tenants: {props.data.length}
                </RegularText>
                <RegularText textStyles={{ fontSize: 20 }}>
                    Number Floor: {calcNumberFloor(props)}
                </RegularText>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                onScroll={onScroll}
                contentContainerStyle={{
                    gap: 10
                }}
                data={props.data}
                keyExtractor={(item: TenantItemProps) => `user-section${item.id}`}
                renderItem={({ item }) => <UserItem {...item} />}
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
