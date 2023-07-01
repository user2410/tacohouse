import { Padding } from "@assets/styles/global-styles"
import { Pressable, StyleSheet } from "react-native"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface NavigationButtonProps {
  onPress: Function;
  next: boolean;
  disabled?: boolean;
}

export default function NavigationButton({ onPress, next, disabled }: NavigationButtonProps) {
  return (
    <Pressable onPress={() => onPress()} style={[
      styles.button, 
      {
        backgroundColor: disabled ? '#a0a0a0': next ? '#1167EE' : '#f0f0f0',
        borderWidth: next ? 0 : 1,
      }]}>
      <MaterialCommunityIcon name={next ? 'arrow-right' : 'arrow-left'} size={24} color={
        next ? '#fff' : '#000'
      } />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    aspectRatio: 1,
    padding: Padding.p_3xs
  }
})