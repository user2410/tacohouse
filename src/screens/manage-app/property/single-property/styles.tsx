import { Color } from "@assets/styles/global-styles";
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
  containerInlineGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  body: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  box: {
    backgroundColor: Color.neutral,
    padding: 16,
    borderRadius: 16,
    marginVertical: 10,
    borderColor: '#DEEAFD',
    borderWidth: 1.5,
  },
  furniture: {
    flexDirection: 'row',
    alignItems: "center",
    columnGap: 5,
  },
  editButton: {
    textAlign: 'center',
    backgroundColor: "#1a6985",
    borderRadius: 8,
    color: 'white',
    fontSize: 20,
    paddingVertical: 4,
  }
});
