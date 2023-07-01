import { Padding } from "@assets/styles/global-styles";
import { StyleSheet, View } from "react-native";
import MatterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text as RNPText, Button as RNPButton } from 'react-native-paper';

interface SuccessModalProps {
  closeModal: () => void;
}

export default function SuccessModal({closeModal}: SuccessModalProps) {
  return (
    <View
      style={styles.modalView}
    // onTouchEnd={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <MatterialCommunityIcon name="check-circle" size={48} color="green"/>
        <RNPText variant="titleSmall">Successfully created a new listing</RNPText>
        <RNPButton 
          style={{backgroundColor: 'green'}} 
          textColor="white"
          onPress={() => closeModal()}>
          OK
        </RNPButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  modalContainer: {
    // height: '60%',
    maxHeight: '60%',
    backgroundColor: '#fff',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
  },
})