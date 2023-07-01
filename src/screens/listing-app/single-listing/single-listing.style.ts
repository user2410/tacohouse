import { Margin, Padding } from "@assets/styles/global-styles";
import { Dimensions, StyleSheet } from "react-native";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
export const HEADER_MAX_HEIGHT = 136;
export const UPPER_HEADER_HEIGHT = 60;
export const LOWER_HEADER_HEIGHT = 200;
export const ICON_SIZE = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: '100%',
  },
  upperHeaderTransparent: {
    width: '100%',
    // backgroundColor: '#AF0C6E',
    position: 'absolute',
    height: UPPER_HEADER_HEIGHT,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  upperHeaderLight: {
    height: UPPER_HEADER_HEIGHT,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },

  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: 'white',
  },
  section: {
    padding: Padding.p_mini,
    flexDirection: 'column',
    gap: 15
  },
  divider: {
    height: 2,
    backgroundColor: "#e2e3e4"
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 24,
    zIndex: 20,
  },
  price: {
    fontSize: 18,
    color: '#42658a',
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  paragraph: {
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
})