import { Border, Color, FontFamily, FontSize, Margin, Padding } from "@assets/styles/global-styles";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  // City modal
  modalView: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000099'
  },
  modalContainer: {
    width: '80%',
    maxHeight: '60%',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		paddingVertical: Padding.p_3xs,
		paddingHorizontal: Padding.p_mini,
  },
  modalScrollView: { 
    maxHeight: '85%' 
  },

  groupDropdownValue: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Roboto_semibold",
  },
  frameRowScrollView: {
    flexDirection: "row",
  },
  frameColScrollView: {
    flexDirection: "column",
  },
  
  sectionContainer: {
    padding: Padding.p_mini,
    backgroundColor: Color.sectionBgColor
  },
  sectionTitle: {
    marginBottom: Margin.m_3xs,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  sectionTitleFlexbox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  
  locationContainer: {
    backgroundColor: Color.sectionBgColor,
    // position: "absolute",
    // left: 0,
    // top: 0,
    flexDirection: 'row',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    // alignSelf
  },
  locationTitle: {
    color: Color.black,
    fontSize: FontSize.subheadlineBold_size,
    height: '100%'
  },
  locationButton: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginLeft: 15
  },
  locationButtonAndroidRipple: {
    color: Color.androidRipple
  },
  // =================================

  // District
  districtGalery: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 20,
  },
  // =================================

  // Search and filter bar
  searchAndFilterContainer: {
    width: '100%',
    backgroundColor: Color.sectionBgColor,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    height: 38,
    backgroundColor: '#fff',
    top: -3
  },
  searchInputOutline: {
    color: '#d3d3d3'
  },
  searchInputUnderLine: {
    display: 'none'
  },
  filterButton: {
    height: 40,
    width: 40,
    borderColor: '#d3d3d3',
    borderRadius: 5,
  },
  // =================================

  frameView: {
    top: 117,
  },
  frameGroup: {
    width: 330,
    height: 214,
    marginTop: 15,
  },
  seeMore: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.darkslateblue,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  sectionTitleGroup: {
    alignSelf: "stretch",
  },
  parent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  // =================================
  
  frameScrollview: {
    marginTop: 15,
    width: "100%",
  },
  frameContainer: {
    marginTop: 10,
  },

  androidLarge2: {
    backgroundColor: "#d9d9d9",
    flex: 1,
  },
});
