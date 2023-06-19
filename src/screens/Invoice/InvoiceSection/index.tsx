import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { InvoiceItemProps, mockInvoiceSection } from "./styles";
import InvoiceItem from "./InvoiceItem";
import { AnimatedFAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeSyntheticEvent } from "react-native";
import { NativeScrollEvent } from "react-native";

const data = mockInvoiceSection;

export default function InvoiceSection(): React.ReactElement {
    const [isExtended, setIsExtended] = React.useState(true);
    const navigation = useNavigation();

    const handleCreateTenant = () => {
        console.log("Create new tenant");
        // navigation.navigate("CreateInvoice");
    };

    const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                onScroll={onScroll}
                contentContainerStyle={{
                    rowGap: 12,
                }}
                keyExtractor={(item: InvoiceItemProps) => `invoice-section-${item.id.toString()}`}
                renderItem={({ item }) => <InvoiceItem {...item} />}
                showsVerticalScrollIndicator={false}
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
}

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        flex: 1,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
});