import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { InvoiceItemProps, mockInvoiceSection } from "./styles";
import InvoiceItem from "./InvoiceItem";

const data = mockInvoiceSection;

export default function InvoiceSection(): React.ReactElement {
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                contentContainerStyle={{
                    rowGap: 8,
                }}
                keyExtractor={(item : InvoiceItemProps) => `invoice-section-${item.id.toString()}`}
                renderItem={({ item }) => <InvoiceItem {...item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
});