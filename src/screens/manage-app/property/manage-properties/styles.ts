import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerRightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    backgroundColor: "#1a6985",
    borderRadius: 8,
    color: 'white',
    fontSize: 20,
    paddingVertical: 4,
  }
});