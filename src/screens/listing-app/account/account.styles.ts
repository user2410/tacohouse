import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  header: {padding: 20},
  headerAvatar: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  optionView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  optionItem: {
    paddingVertical: 10,
  },
  optionItemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionItemTitle: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 15,
  },
});
