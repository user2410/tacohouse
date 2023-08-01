import { Padding } from "@assets/styles/global-styles";
import { PolicyEntity } from "@models/policy.entity";
import React from "react";
import { StyleSheet, View } from "react-native";
import { List as RNPList, Text as RNPText, TextInput as RNPTextInput } from 'react-native-paper';

interface AddPolicyModalProps {
  setAddedPolicies: React.Dispatch<React.SetStateAction<PolicyEntity[]>>;
  closeModal: () => void;
}

export default function AddPolicyModal({setAddedPolicies, closeModal}: AddPolicyModalProps) {
  const [newPolicy, setNewPolicy] = React.useState<string>('');

  return (
    <View
      style={styles.modalView}
    // onTouchEnd={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <RNPList.Section>
          <RNPText variant="titleSmall">Add policy</RNPText>
          <RNPTextInput
            mode="outlined"
            placeholder="Add more policy"
            value={newPolicy}
            onChangeText={(text) => setNewPolicy(text)}
            right={<RNPTextInput.Icon
              icon="plus"
              onPress={(e) => {
                setAddedPolicies(prev => [...prev, {
                  title: newPolicy,
                  notes: [],
                }]);
                closeModal();
              }}
            />}
          />
        </RNPList.Section>
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
    width: '80%',
    maxHeight: '60%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
  },
});