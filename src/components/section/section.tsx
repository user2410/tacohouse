import { Color, FontSize, Margin, Padding } from "@assets/styles/global-styles";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  children: React.ReactNode;
  bodyStyle?: object;
}

export default function Section({title, children, bodyStyle = {}} : Props) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
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
  sectionTitle: {
    marginBottom: Margin.m_3xs,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
})