import { Padding } from "@assets/styles/global-styles";
import { PolicyEntity } from "@models/policy.entity";
import React from "react";
import { StyleSheet, View } from "react-native";
import { List as RNPList, Text as RNPText, TextInput as RNPTextInput } from 'react-native-paper';

interface AddNoteModalProps {
  policyTitle: string,
  addedPolicies: PolicyEntity[],
  setAddedPolicies: React.Dispatch<React.SetStateAction<PolicyEntity[]>>;
  closeModal: () => void;
}

export default function AddPolicyNoteModal({policyTitle, addedPolicies, setAddedPolicies, closeModal}: AddNoteModalProps) {
  const [newPolicy, setNewPolicy] = React.useState<string>('');

  return (
    <View
      style={styles.modalView}
    // onTouchEnd={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <RNPList.Section>
          <RNPText variant="titleSmall">Add note to {policyTitle}</RNPText>
          <RNPTextInput
            mode="outlined"
            placeholder="note"
            value={newPolicy}
            onChangeText={(text) => setNewPolicy(text)}
            right={<RNPTextInput.Icon
              icon="plus"
              onPress={() => {
                const policy = addedPolicies.find(item => item.title === policyTitle)
                if (policy) {
                  policy.notes.push(newPolicy);
                  setAddedPolicies([
                    ...addedPolicies.filter(item => item.title !== policyTitle), 
                    policy
                  ]);
                }
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