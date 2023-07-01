import Section from "@components/section/section";
import CreateListingLayout from "../layout";
import NavigationButton from "../navigation-button";
import { Controller, useForm } from "react-hook-form";
import { Divider, Text as RNPText, TextInput as RNPTextInput, List as RNPList } from "react-native-paper";
import { FlatList, Modal, Pressable, SectionList, StyleSheet, View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Border, Margin, Padding } from "@assets/styles/global-styles";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CreateLisitingNavigatorParams } from "@navigation/listing-app/create-listing.navigator";
import AddPolicyModal, { PolicyItemProps } from "./add-policy.modal";
import SuccessModal from "./success.modal";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ListingNavigatorParams } from "@navigation/listing-app/listing-app.navigator";

interface FormData {
  title: string;
  description: string;
  price: number;
  policy: string[];
}

const ICON_SIZE = 24;

export default function CreateListingDetailsScreen() {
  const navigation = useNavigation<StackNavigationProp<CreateLisitingNavigatorParams, 'QuickCreateProperty'>>();
  const listingAppNavigation = useNavigation<BottomTabNavigationProp<ListingNavigatorParams, 'Home'>>();

  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [currentModal, setCurrentModal] = React.useState<number>(0);
  const [selectedImages, setSelectedImages] = React.useState<string[]>([]);
  const [addedPolicies, setAddedPolicies] = React.useState<PolicyItemProps[]>([]);
  
  const modals = [
    <AddPolicyModal
      setAddedPolicies={setAddedPolicies}
      closeModal={() => setShowModal(false)}
    />,
    <SuccessModal
      closeModal={() => {
        listingAppNavigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })}
      }
    />
  ];

  const {
    control, register, setValue, reset, handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      policy: [],
    }
  });

  const handleChooseImage = async (camera = true) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
    };

    try {
      const res: ImagePickerResponse = await launchImageLibrary(options);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log(`ImagePicker Error (${res.errorCode}): ${res.errorMessage}}`);
      } else {
        const uri = res.assets?.[0].uri || '';
        console.log(uri);
        setSelectedImages(prev => [...prev, uri]);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  // const selectFile = () => {
  //   var options = {
  //     title: 'Select Image',
  //     customButtons: [
  //       { 
  //         name: 'customOptionKey', 
  //         title: 'Choose file from Custom Option' 
  //       },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.showImagePicker(options, res => {
  //     console.log('Response = ', res);
  //     if (res.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (res.error) {
  //       console.log('ImagePicker Error: ', res.error);
  //     } else if (res.customButton) {
  //       console.log('User tapped custom button: ', res.customButton);
  //       alert(res.customButton);
  //     } else {
  //       let source = res;
  //       this.setState({
  //         resourcePath: source,
  //       });
  //     }
  //   });
  // }

  // basic info: listing title, listing price
  // policies
  // media
  return (
    <>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated
      >
        {modals[currentModal]}
      </Modal>
      <CreateListingLayout
        title="Listing Details"
        leftNavBtn={<NavigationButton next={false} onPress={() => navigation.goBack()} />}
        rightNavBtn={<NavigationButton next onPress={() => {
          setCurrentModal(1);
          setShowModal(true);
        }} />}
      >
        <ScrollView>
          <Section title="Basic Info">
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="Title"
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="title"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="Monthly rental price"
                  value={value.toString()}
                  onChangeText={(v) => onChange(parseInt(v))}
                  right={<RNPTextInput.Affix text="/month" />}
                />
              )}
              name="price"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RNPTextInput
                  label="Listing description"
                  value={value}
                  onChangeText={onChange}
                  multiline
                />
              )}
              name="description"
            />
          </Section>

          <Divider />

          <Section
            title="Policies"
            titleRight={
              <Pressable
                style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
                onPress={() => {
                  setCurrentModal(0);
                  setShowModal(true);
                }}>
                <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add Policy</RNPText>
              </Pressable>
            }>
              <SectionList
                sections={addedPolicies}
                keyExtractor={(_item, index) => index.toString()}
                renderSectionHeader={({ section: { title } }) => (
                  <RNPText variant="bodyMedium" style={{ color: 'gray' }}>{title}</RNPText>
                )}
                renderItem={({ item, index }) => (
                  <View key={index} style={{ flex: 1, justifyContent: 'center', marginVertical: Margin.m_3xs }}>
                    <RNPText variant="bodyMedium" style={{ color: 'gray' }}>{item}</RNPText>
                  </View>
                )}
                scrollEnabled={false}
              />
          </Section>

          <Divider />

          <Section title="Media">
            <Section
              title="Photos"
              titleVariant="titleMedium"
              titleRight={
                <Pressable
                  style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
                  onPress={() => handleChooseImage()}>
                  <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                  <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add Photo</RNPText>
                </Pressable>
              }>
              <FlatList
                data={selectedImages}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View key={index} style={{ flex: 1, justifyContent: 'center', marginVertical: Margin.m_3xs }}>
                    <Image
                      style={{
                        borderRadius: Border.br_8xs,
                        width: 97,
                        height: 97,
                      }}
                      resizeMode="cover"
                      source={{ uri: item }}
                    />
                  </View>
                )
                }
                numColumns={3}
                scrollEnabled={false}
              />
            </Section>
          </Section>
        </ScrollView>
      </CreateListingLayout>
    </>
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