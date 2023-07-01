import { StyleSheet, Text, View } from "react-native";

export default function ErrorComponent({error}: {error: any}) {
  return (
    <View style={styles.container}>
      <Text>{error.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  }
})