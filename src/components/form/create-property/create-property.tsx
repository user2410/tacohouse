import { MapModal } from "@components/form/create-property/map.modal";
import GalleryComponent from "@components/gallery/gallery";
import Section from "@components/section/section";
import { Coordinate } from "@models/coordinate.entity";
import { MediaEntity } from "@models/media.entity";
import { translateAddress } from "@utils/address";
import React from "react";
import { Control, Controller, UseFormSetValue, useForm } from "react-hook-form";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import { Address } from "react-native-maps";
import { Divider, Button as RNPButton, Text as RNPText, TextInput as RNPTextInput } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AddFeaturesModal from "./add-features.modal";
import SelectPropertyTypeModal from "./select-type.modal";
import { FeatureEntity } from "@models/feature.entity";
import { AmenityEntity } from "@models/amenity.entity";
import { PropertyType, propertyTypeToText } from "@models/property.entity";

const ICON_SIZE = 24;

export interface CreatePropertyFormData {
  address: string;
  area: number;
  city: string;
  district: string;
  type: string;
  coordinate: Coordinate;
  yearBuilt: number;
  nFloors: number;

  photos: MediaEntity[];
  videos: MediaEntity[];

  nBedRooms: number;
  nBathRooms: number;
  nKitchens: number;

  features: FeatureEntity[];
  amenities: AmenityEntity[];
};

export default function CreatePropertyForm({control, setValue}: {
  control: Control<CreatePropertyFormData, any>;
  setValue: UseFormSetValue<CreatePropertyFormData>;
}) {
  const [currentModal, setCurrentModal] = React.useState<number>(0);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = React.useState<string[]>([]);
  const [selectedPhotos, setSelectedPhotos] = React.useState<MediaEntity[]>([]);
  const [selectedVideos, setSelectedVideos] = React.useState<MediaEntity[]>([]);

  const handleChooseMedia = async (camera = true, mediaType: 'video' | 'photo') => {
    const options: ImageLibraryOptions = {
      mediaType,
      includeBase64: false,
    };

    try {
      const res: ImagePickerResponse = await launchImageLibrary(options);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log(`ImagePicker Error (${res.errorCode}): ${res.errorMessage}}`);
      } else {
        const url = res.assets?.[0].uri || '';
        console.log(url);
        if(mediaType === 'photo'){
          setSelectedPhotos(prev => [...prev, {
            type: mediaType,
            url
          }]);
        }else {
          setSelectedVideos(prev => [...prev, {
            type: mediaType,
            url
          }]);
        }
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  // synchronize states with form data
  React.useEffect(() => {
    setValue('features', selectedFeatures.map(feature => ({
      feature,
    })));
  },[selectedFeatures]);

  React.useEffect(() => {
    setValue('amenities', selectedAmenities.map(amenity => ({
      amenity,
    })));
  },[selectedAmenities]);

  React.useEffect(() => {
    setValue('photos', selectedPhotos);
  },[selectedPhotos]);

  React.useEffect(() => {
    setValue('videos', selectedVideos);
  },[selectedVideos]);

  const modals: React.ReactElement[] = [
    <MapModal
      setLocation={(coordinate: Coordinate) => {setValue('coordinate', coordinate)}}
      setAddressObj={(address: Address) => {
        setValue('address', translateAddress(address));
        setValue('city', address.administrativeArea);
        setValue('district', address.subAdministrativeArea);
      }}
      closeModal={() => setShowModal(false)}
    />,
    <SelectPropertyTypeModal
      handleSelectType={(type: string) => {
        setValue('type', type);
        setShowModal(false);
      }}
      closeModal={() => setShowModal(false)}
    />,
    <AddFeaturesModal
      initialItems={['Gym', 'Library', 'Playground', 'Community centre']}
      selectedFeatures={selectedFeatures}
      setSelectedFeatures={setSelectedFeatures}
      closeModal={() => setShowModal(false)}
    />,
    <AddFeaturesModal
      initialItems={['Air Conditioning', 'Balcony', 'Dishwasher', 'Garden', 'Heating', 'Parking', 'Pool', 'Terrace', 'Washing Machine']}
      selectedFeatures={selectedAmenities}
      setSelectedFeatures={setSelectedAmenities}
      closeModal={() => setShowModal(false)}
    />
  ];

  const openModal = (index: number) => {
    setCurrentModal(index);
    setShowModal(true);
  }

  return (
    <View>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated>
        {modals[currentModal]}
      </Modal>


      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section title="Basic information">
            <View style={styles.group}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <View
                    onTouchEnd={() => openModal(1)}
                  >
                    <RNPTextInput
                      label="Property type"
                      value={value ? propertyTypeToText(value as PropertyType) : undefined}
                      onChangeText={onChange}
                      disabled
                      style={styles.disabledField}
                    />
                  </View>
                )}
                name="type"
              />
            </View>

            <View style={styles.group}>
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
                        onPress={() => openModal(0)}
                      />}
                  />
                )}
                name="address"
              />
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <RNPTextInput
                      label="City/Province"
                      value={value}
                      onChangeText={onChange}
                      disabled
                      style={styles.disabledField}
                    />
                  )}
                  name="city"
                />
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <RNPTextInput
                      label="District"
                      value={value}
                      onChangeText={onChange}
                      disabled
                      style={styles.disabledField}
                    />
                  )}
                  name="district"
                />
              </View>
            </View>
            <View style={styles.group}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Area"
                    keyboardType="numeric"
                    value={value ? value.toString(): undefined}
                    onChangeText={(e) => onChange(parseFloat(e))}
                    right={<RNPTextInput.Affix text="m²" />}
                  />
                )}
                name="area"
              />
            </View>
            <View style={styles.group}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Year built"
                    keyboardType="numeric"
                    value={value ? value.toString(): undefined}
                    onChangeText={(e) => onChange(parseInt(e))}
                  />
                )}
                name="yearBuilt"
              />
            </View>
            <View style={styles.group}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Number of floors"
                    keyboardType="numeric"
                    value={value.toString()}
                    onChangeText={(e) => onChange(parseInt(e))}
                  />
                )}
                name="nFloors"
              />
            </View>
          </Section>

          <Divider />

          <Section title="Media">
            <Section
              title="Photos"
              titleVariant="titleMedium"
              titleRight={
                <Pressable
                  style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
                  onPress={() => handleChooseMedia(true, 'photo')}>
                  <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                  <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add Photo</RNPText>
                </Pressable>
              }>
                <GalleryComponent items={selectedPhotos} tileSize={97} onItemPress={() => {}}/>
            </Section>
            <Section
              title="Videos"
              titleVariant="titleMedium"
              titleRight={
                <Pressable
                  style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
                  onPress={() => handleChooseMedia(true, 'photo')}>
                  <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                  <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add Video</RNPText>
                </Pressable>
              }>
                <GalleryComponent items={selectedVideos} tileSize={97} onItemPress={() => {}}/>
            </Section>
          </Section>

          <Divider />

          <Section title="Rooms">
            <View style={styles.roomsContainer}>
              <RNPText variant="bodyMedium">Bathrooms</RNPText>
              <View style={styles.nRoomsContainer}>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <MaterialCommunityIcon
                        name="minus"
                        size={ICON_SIZE} color="green"
                        onPress={() => setValue('nBathRooms', value > 0 ? value - 1 : value)} />
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
                        onPress={() => setValue('nBathRooms', value + 1)} />
                    </>
                  )}
                  name="nBathRooms"
                />
              </View>
            </View>
            <View style={styles.roomsContainer}>
              <RNPText variant="bodyMedium">Bedrooms</RNPText>
              <View style={styles.nRoomsContainer}>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <MaterialCommunityIcon
                        name="minus"
                        size={ICON_SIZE} color="green"
                        onPress={() => setValue('nBedRooms', value > 0 ? value - 1 : value)} />
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
                        onPress={() => setValue('nBedRooms', value + 1)} />
                    </>
                  )}
                  name="nBedRooms"
                />
              </View>
            </View>
            <View style={styles.roomsContainer}>
              <RNPText variant="bodyMedium">Kitchens</RNPText>
              <View style={styles.nRoomsContainer}>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <MaterialCommunityIcon
                        name="minus"
                        size={ICON_SIZE} color="green"
                        onPress={() => setValue('nKitchens', value > 0 ? value - 1 : value)} />
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
                        onPress={() => setValue('nKitchens', value + 1)} />
                    </>
                  )}
                  name="nKitchens"
                />
              </View>
            </View>
          </Section>

          <Divider />

          <Section
            title="Features"
            titleRight={
              <Pressable
                style={styles.addBtn}
                onPress={() => openModal(2)}>
                <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add feature</RNPText>
              </Pressable>
            }
          >
            <View style={styles.featureContainer}>
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

          <Divider />

          <Section
            title="Amenities"
            titleRight={
              <Pressable
                style={styles.addBtn}
                onPress={() => openModal(3)}>
                <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add amenities</RNPText>
              </Pressable>
            }
          >
            <View style={styles.featureContainer}>
              {
                selectedAmenities.map((item, index) => (
                  <RNPButton
                    key={index}
                    mode="elevated"
                    icon="close"
                    onPress={() => setSelectedAmenities(prev => prev.filter(feature => feature !== item))}
                  >
                    {item}
                  </RNPButton>
                ))
              }
            </View>
          </Section>
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  group: { marginVertical: 8 },
  disabledField: { flex: 1, backgroundColor: '#e9dfeb' },
  roomsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nRoomsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  addBtn: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  featureContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }
})