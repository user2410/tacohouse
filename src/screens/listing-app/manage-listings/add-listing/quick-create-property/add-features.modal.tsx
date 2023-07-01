import { Padding } from "@assets/styles/global-styles";
import { getArrayUnion } from "@utils/array";
import React from "react";
import { set } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Checkbox, List as RNPList, Text as RNPText, TextInput as RNPTextInput } from "react-native-paper";

interface AddFeaturesModalProps {
  selectedFeatures: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
}

const defaultFeatures = ['Air Conditioning', 'Balcony', 'Dishwasher', 'Garden', 'Heating', 'Parking', 'Pool', 'Terrace', 'Washing Machine'];

export default function AddFeaturesModal({ selectedFeatures, setSelectedFeatures, closeModal }: AddFeaturesModalProps) {
  const [newFeature, setNewFeature] = React.useState<string>('');
  const [features, setFeatures] = React.useState<string[]>(
    getArrayUnion(defaultFeatures, selectedFeatures)
  );

  return (
    <View 
      style={styles.modalView}
      onTouchEnd={() => closeModal()}>
      <View style={styles.modalContainer}>
        <RNPList.Section>
          <RNPText variant="titleSmall">Add features</RNPText>
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
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8
  },
});