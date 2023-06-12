    import React from "react";
    import { TenantItemProps, TenantSectionProps } from "./stypes";
    import UserItem from "./TenantItem";
    import { AnimatedFAB } from "react-native-paper";
    import {
        View,
        FlatList,
        StyleSheet,
        Platform,
        NativeSyntheticEvent,
        NativeScrollEvent,
    } from 'react-native';

    const props: TenantSectionProps = {
        data: [
            {
                id: 1,
                userName: "Nguyễn Chí Phèo",
                phoneNumber: "0912345678",
                userRoom: 'P302',
            },
            {
                id: 2,
                userName: "Nguyễn Thị Nở",
                phoneNumber: "0912345679",
                userRoom: 'P301',
            },
            {
                id: 3,
                userName: "Nguyễn Chí Phèo",
                phoneNumber: "0912345678",
                userRoom: 'P302',
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
                userRoom: 'P301',
            },
        ],
    }

    export default function UserSection(): React.ReactElement {
        const [isExtended, setIsExtended] = React.useState(true);

        const isIOS = Platform.OS === 'ios';

        const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent> ) => {
            const currentScrollPosition =
                Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

            setIsExtended(currentScrollPosition <= 0);
        };

        const handleCreateTenant = () => {
            console.log("Create new tenant");
        }

        return (
            <View style={styles.container}>
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
