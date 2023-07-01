import { Color, Padding } from "@assets/styles/global-styles";
import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { List as RNPList } from "react-native-paper";

interface SelectTypeModalProps {
  handleSelectType: (type: string) => void;
  closeModal: () => void;
}

const propertyTypes = ['Apartment', 'Single Residence', 'Room'];
export default function SelectPropertyTypeModal({ handleSelectType, closeModal }: SelectTypeModalProps) {
  return (
    <View 
      style={styles.modalView}
      onTouchEnd={() => closeModal()}>
      <View style={styles.modalContainer}>
        <RNPList.Section>
          <RNPList.Subheader>Select type of your property</RNPList.Subheader>
          <ScrollView
            style={styles.modalScrollView}
          >
            {propertyTypes.map((item, index) => (
              <Pressable
                key={index}
                android_ripple={{ color: Color.androidRipple }}
                onPress={() => handleSelectType(item)}>
                <RNPList.Item title={item} />
              </Pressable>
            ))}
          </ScrollView>
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
  modalScrollView: { 
    maxHeight: '85%' 
  },
});