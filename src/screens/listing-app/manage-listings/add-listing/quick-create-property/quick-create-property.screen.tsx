import Section from "@components/section/section";
import { CreateLisitingNavigatorParams } from "@navigation/listing-app/create-listing.navigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translateAddress } from "@utils/address";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Address } from "react-native-maps";
import { Divider, Button as RNPButton, Text as RNPText, TextInput as RNPTextInput } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CreateListingLayout from "../layout";
import NavigationButton from "../navigation-button";
import AddFeaturesModal from "./add-features.modal";
import { Coordinate, MapModal } from "./map.modal";
import SelectPropertyTypeModal from "./select-type.modal";

interface FormData {
  address: string;
  area: string;
  city: string;
  district: string;
  thoroughfare: string;
  propertyType: string;
  coordinate: Coordinate;

  nBedRooms: number;
  nBathRooms: number;
  nBalcony: number;

};

const ICON_SIZE = 24;

export default function QuickCreatePropertyScreen() {
  const navigation = useNavigation<StackNavigationProp<CreateLisitingNavigatorParams, 'QuickCreateProperty'>>();

  const {
    control, register, setValue, reset, handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      address: '',
      nBathRooms: 0,
      nBedRooms: 1,
      nBalcony: 0,
    }
  });

  const [currentModal, setCurrentModal] = React.useState<number>(0);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const modals : React.ReactElement[] = [
    <MapModal
      setLocation={(coordinate: Coordinate) => {setValue('coordinate', coordinate)}}
      setAddressObj={(address: Address) => {
        setValue('address', translateAddress(address));
        setValue('city', address.administrativeArea);
        setValue('district', address.subAdministrativeArea);
        setValue('thoroughfare', address.thoroughfare);
      }}
      closeModal={() => setShowModal(false)}
    />,
    <SelectPropertyTypeModal
      handleSelectType={(type: string) => {
        setValue('propertyType', type);
        setShowModal(false);
      }}
      closeModal={() => setShowModal(false)}
    />,
    <AddFeaturesModal
      selectedFeatures={selectedFeatures}
      setSelectedFeatures={setSelectedFeatures}
      closeModal={() => setShowModal(false)}
    />
  ];

  const onSubmit = (data: any) => console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated>
        {modals[currentModal]}
      </Modal>


      <CreateListingLayout
        title="Property details"
        leftNavBtn={<Pressable onPress={() => navigation.replace('SelectProperty')}><Text>Select available property</Text></Pressable>}
        rightNavBtn={<NavigationButton onPress={() => navigation.navigate('CreateListingDetails')} next={true}/>}
      >
        <ScrollView>
          <Section title="Basic information">
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="Address"
                  value={value}
                  onChangeText={onChange}
                  right={
                    <RNPTextInput.Icon 
                      icon="map-marker" 
                      onPress={() => {
                        setCurrentModal(0); 
                        setShowModal(true);
                      }}
                  />}
                />
              )}
              name="address"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="City/Province"
                  value={value}
                  onChangeText={onChange}
                  disabled
                />
              )}
              name="city"
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="District"
                    value={value}
                    onChangeText={onChange}
                    disabled
                    style={{ flex: 1 }}
                  />
                )}
                name="district"
              />
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Thoroughfare"
                    value={value}
                    onChangeText={onChange}
                    disabled
                    style={{ flex: 1 }}
                  />
                )}
                name="thoroughfare"
              />
            </View>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <View
                  onTouchEnd={() => { 
                    setCurrentModal(1); 
                    setShowModal(true);
                  }}
                >
                  <RNPTextInput
                    label="Property type"
                    value={value}
                    onChangeText={onChange}
                    disabled
                  />
                </View>
              )}
              name="propertyType"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="Area"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                  right={<RNPTextInput.Affix text="m²" />}
                />
              )}
              name="area"
            />
          </Section>

          <Divider />

          <Section title="Rooms">
            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <RNPText variant="bodyMedium">Bathrooms</RNPText>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'center',
                    }}
                  >
                    <MaterialCommunityIcon 
                      name="minus" 
                      size={ICON_SIZE} color="green" 
                      onPress={() => setValue('nBathRooms', value > 0 ? value-1 : value)}/>
                    <RNPTextInput
                      mode="outlined"
                      keyboardType="numeric"
                      value={value.toString()}
                      onChangeText={(e) => onChange(parseInt(e))}
                      style={{ height: 24, textAlign: 'center', padding: 0 }}
                    />
                    <MaterialCommunityIcon 
                      name="plus" 
                      size={ICON_SIZE} color="green" 
                      onPress={() => setValue('nBathRooms', value+1)}/>
                  </View>
                )}
                name="nBathRooms"
              />
            </View>
            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <RNPText variant="bodyMedium">Bedrooms</RNPText>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'center',
                    }}
                  >
                    <MaterialCommunityIcon 
                      name="minus" 
                      size={ICON_SIZE} color="green" 
                      disabled={value <= 0}
                      onPress={() => setValue('nBedRooms', value > 0 ? value-1 : value)}/>
                    <RNPTextInput
                      mode="outlined"
                      keyboardType="numeric"
                      value={value.toString()}
                      onChangeText={(e) => onChange(parseInt(e))}
                      style={{ height: 24, textAlign: 'center', padding: 0 }}
                    />
                    <MaterialCommunityIcon 
                      name="plus" 
                      size={ICON_SIZE} color="green" 
                      onPress={() => setValue('nBedRooms', value+1)}/>
                  </View>
                )}
                name="nBedRooms"
              />
            </View>
            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <RNPText variant="bodyMedium">Balconies</RNPText>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'center',
                    }}
                  >
                    <MaterialCommunityIcon 
                      name="minus" 
                      size={ICON_SIZE} color="green" 
                      onPress={() => setValue('nBalcony', value > 0 ? value-1 : value)}/>
                    <RNPTextInput
                      mode="outlined"
                      keyboardType="numeric"
                      value={value.toString()}
                      onChangeText={(e) => onChange(parseInt(e))}
                      style={{ height: 24, textAlign: 'center', padding: 0 }}
                    />
                    <MaterialCommunityIcon 
                      name="plus" 
                      size={ICON_SIZE} color="green" 
                      onPress={() => setValue('nBalcony', value+1)}/>
                  </View>
                )}
                name="nBalcony"
              />
            </View>
          </Section>

          <Divider />

          <Section 
            title="Features"
            titleRight={
              <Pressable 
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}
                onPress={() => {
                  setCurrentModal(2);
                  setShowModal(true);
                }}>
                <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add feature</RNPText>
              </Pressable>
            }
          >
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
              {
                selectedFeatures.map((item, index) => (
                  <RNPButton 
                    key={index}
                    mode="elevated" 
                    icon="close"
                    onPress={() => setSelectedFeatures(prev => prev.filter(feature => feature !== item))}
                  >
                      {item}
                  </RNPButton>
                ))
              }
            </View>
          </Section>
        </ScrollView>
      </CreateListingLayout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
});