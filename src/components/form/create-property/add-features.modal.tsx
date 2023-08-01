import { Padding } from "@assets/styles/global-styles";
import { getArrayUnion } from "@utils/array";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button as RNPButton, Checkbox, Text as RNPText, TextInput as RNPTextInput } from "react-native-paper";

interface AddFeaturesModalProps {
  initialItems: string[];
  selectedFeatures: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
}

// const defaultFeatures = ['Air Conditioning', 'Balcony', 'Dishwasher', 'Garden', 'Heating', 'Parking', 'Pool', 'Terrace', 'Washing Machine'];

export default function AddFeaturesModal({ 
  initialItems,
  selectedFeatures, 
  setSelectedFeatures, 
  closeModal,
 }: AddFeaturesModalProps) {
  const [newFeature, setNewFeature] = React.useState<string>('');
  const [features, setFeatures] = React.useState<string[]>(
    getArrayUnion(initialItems, selectedFeatures)
  );

  return (
    <View style={styles.modalView}>
      <View style={styles.modalContainer}>
        <View style={styles.editContainer}>
          <RNPText variant="titleSmall">Add feature</RNPText>
          <RNPTextInput
            mode="outlined"
            placeholder="Create more feature"
            value={newFeature}
            onChangeText={(text) => setNewFeature(text)}
            right={<RNPTextInput.Icon
              icon="plus"
              onPress={(e) => {
                if (newFeature) {
                  setFeatures(prev => [...prev, newFeature]);;
                  setSelectedFeatures(prev => [...prev, newFeature]);
                  setNewFeature('');
                }
              }} />}
          />
          <ScrollView>
            <View style={styles.featuresContainer}>
              {features.map((item, index) => (
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }} key={index}>
                  <Checkbox
                    status={selectedFeatures.includes(item) ? 'checked' : 'unchecked'}
                    onPress={() => {
                      selectedFeatures.includes(item) ?
                        setSelectedFeatures(prev => prev.filter(feature => feature !== item)) :
                        setSelectedFeatures(prev => [...prev, item]);
                    }}
                  />
                  <RNPText variant="labelMedium">{item}</RNPText>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.btnContainer}>
          <RNPButton mode="elevated" onPress={() => setSelectedFeatures([])}>Clear</RNPButton>
          <RNPButton mode="contained" onPress={() => closeModal()}>Save</RNPButton>
        </View>
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
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16
  },
  editContainer: {
    marginVertical: 16,
  },
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8
  },
});