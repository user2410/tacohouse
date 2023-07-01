import { Padding } from "@assets/styles/global-styles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Headline } from "react-native-paper";

interface CreateListingLayoutProps {
  title: string;
  children: React.ReactNode;
  leftNavBtn?: React.ReactNode;
  rightNavBtn?: React.ReactNode;
}

export default function CreateListingLayout({title, children, leftNavBtn, rightNavBtn} : CreateListingLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Headline>{title}</Headline>
      </View>
      <View style={styles.childrenView}>
        {children}
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomBarContainer}>
          {leftNavBtn}
          {rightNavBtn}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flex: 1.5,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
  },
  childrenView: {
    flex: 16,
    paddingHorizontal: Padding.p_mini,
  },
  listingItemView: {
    marginVertical: Padding.p_3xs,
  },
  bottomView: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#cab'
  },
  bottomBarContainer: {
    width: '100%',
    // backgroundColor: '#bac',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Padding.p_mini,
  },
});