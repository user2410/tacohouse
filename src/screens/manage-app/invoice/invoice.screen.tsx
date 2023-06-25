import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import InvoiceItem from "./invoice-item";
import { InvoiceService } from "@services/invoice.service";
import { InvoiceEntity } from "@models/invoice.entity";

export default function ManageInvoiceScreen(): React.ReactElement {
  const [invoices, setInvoices] = React.useState<InvoiceEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await InvoiceService.getInvoices();
        setInvoices(res);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  return isLoading ? (
      <View><Text>Loading...</Text></View>
    ) : error ? (
      <View><Text>{JSON.stringify(error)}</Text></View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={invoices}
          contentContainerStyle={{
            rowGap: 8,
          }}
          keyExtractor={(item: InvoiceEntity) => `invoice-section-${item.id.toString()}`}
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
    backgroundColor: 'white',
    flex: 1,
  }
});