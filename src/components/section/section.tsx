import { Color, FontSize, Margin, Padding } from "@assets/styles/global-styles";
import { StyleSheet, Text, View } from "react-native";
import { Text as RNPText } from "react-native-paper";
import { VariantProp } from "react-native-paper/lib/typescript/src/components/Typography/types";

interface Props {
  title: string;
  titleVariant?: VariantProp<string>;
  children: React.ReactNode;
  bodyStyle?: object;
  titleRight?: React.ReactNode;
}

export default function Section({title, titleVariant = "headlineSmall", children, bodyStyle = {}, titleRight} : Props) {
  return (
    <View style={styles.sectionContainer}>
      <View style={[
        styles.sectionTitleView,
        {
          flexDirection: titleRight ? 'row' : 'column',
          justifyContent: titleRight ? 'space-between' : 'flex-start',
        }]}>
        <RNPText variant={titleVariant}>{title}</RNPText>
        {titleRight}
      </View>
      <View style={bodyStyle}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: Padding.p_mini,
    backgroundColor: Color.sectionBgColor
  },
  sectionTitleView: {
    marginBottom: Margin.m_3xs,
  },
})