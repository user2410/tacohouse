import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from "react-native";

export default function LoadingComponent() {
  // A loading component displayed when data is being fetched
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  }
});