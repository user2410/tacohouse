import { Padding } from "@assets/styles/global-styles";
import Section from "@components/section/section";
import { PolicyEntity } from "@models/policy.entity";
import { CreateLisitingNavigatorParams } from "@navigation/listing-app/create-listing.navigator";
import { ListingNavigatorParams } from "@navigation/listing-app/listing-app.navigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { bindActionCreators } from "@reduxjs/toolkit";
import { saveDraftListing } from "@store/create-listing/action";
import { AppState } from "@store/store";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Checkbox, Divider, Text as RNPText, TextInput as RNPTextInput } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import CreateListingLayout from "../layout";
import NavigationButton from "../navigation-button";
import AddPolicyNoteModal from "./add-note.modal";
import AddPolicyModal from "./add-policy.modal";
import SuccessModal from "./success.modal";
import ListingService from "@services/listing.service";
import { CreateListingState } from "@store/create-listing/state";

export interface CreateListingFormData {
  title: string;
  description: string;
  price: number;
  securityDeposit: number;
  petsAlllowed: boolean;
  leaseTerm: number;
  policies: PolicyEntity[];
}

const ICON_SIZE = 24;

function PolicyNoteItem({ item }: { item: React.ReactNode }) {
  return (
    <View style={styles.policyNoteItem}>
      <MaterialCommunityIcon
        name="minus"
        size={ICON_SIZE}
      />
      {item}
    </View>
  );
}

const Screen = ({createListing, saveDraftListing} : {
  createListing: CreateListingState,
  saveDraftListing: Function;
}) => {
  const navigation = useNavigation<StackNavigationProp<CreateLisitingNavigatorParams, 'QuickCreateProperty'>>();
  const listingAppNavigation = useNavigation<BottomTabNavigationProp<ListingNavigatorParams, 'Home'>>();

  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [currentModal, setCurrentModal] = React.useState<number>(0);
  const [addedPolicies, setAddedPolicies] = React.useState<PolicyEntity[]>([
    {
      title: 'Pets',
      notes: [],
    },
    {
      title: 'Payment',
      notes: [],
    },
  ]);
  const [selectedPolicy, setSelectedPolicy] = React.useState<string>('Pets');
  const [petsAllowed, setPetsAllowed] = React.useState<boolean>(false);

  const modals = [
    <AddPolicyModal
      setAddedPolicies={setAddedPolicies}
      closeModal={() => setShowModal(false)}
    />,
    <AddPolicyNoteModal
      policyTitle={selectedPolicy}
      addedPolicies={addedPolicies}
      setAddedPolicies={setAddedPolicies}
      closeModal={() => setShowModal(false)}
    />,
    <SuccessModal
      closeModal={() => {
        listingAppNavigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      }
      }
    />
  ];

  const {
    control, setValue, handleSubmit,
    formState: { errors },
  } = useForm<CreateListingFormData>({
    defaultValues: {
      title: '',
      description: '',
    }
  });

  const openModal = (index: number) => {
    setCurrentModal(index);
    setShowModal(true);
  }

  const onSubmit = async (data: CreateListingFormData) => {
    await ListingService.createListing(createListing.selectedProperty, data);
    saveDraftListing(data);
    openModal(2);
  }

  React.useEffect(() => {
    setValue('policies', addedPolicies);
  }, [addedPolicies]);

  React.useEffect(() => {
    setValue('petsAlllowed', petsAllowed);
  }, [petsAllowed]);

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
        rightNavBtn={<NavigationButton next onPress={async () => {
          await handleSubmit(onSubmit)();
        }} />}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section title="Basic Info">
            <View style={styles.group}>
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
            </View>

            <View style={styles.group}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Monthly rental price"
                    keyboardType="numeric"
                    value={value ? value.toString() : ''}
                    onChangeText={(v) => onChange(parseInt(v))}
                    right={<RNPTextInput.Affix text="VND/month" />}
                  />
                )}
                name="price"
              />
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Security Deposit"
                    keyboardType="numeric"
                    value={value ? value.toString() : ''}
                    onChangeText={(v) => onChange(parseInt(v))}
                    right={<RNPTextInput.Affix text="VND" />}
                  />
                )}
                name="securityDeposit"
              />
            </View>

            <View style={styles.group}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    label="Lease term"
                    keyboardType="numeric"
                    value={value ? value.toString() : ''}
                    onChangeText={(v) => onChange(parseInt(v))}
                    right={<RNPTextInput.Affix text="months" />}
                  />
                )}
                name="leaseTerm"
              />
            </View>

            <View style={styles.group}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RNPTextInput
                    placeholder="Listing description"
                    value={value}
                    onChangeText={onChange}
                    multiline
                    numberOfLines={3}
                    style={styles.descriptionTextArea}
                    contentStyle={styles.descriptionText}
                  />
                )}
                name="description"
              />
            </View>

          </Section>

          <Divider />

          <Section
            title="Policies"
            titleRight={
              <Pressable
                style={styles.addBtn}
                onPress={() => openModal(0)}>
                <MaterialCommunityIcon name="plus" size={ICON_SIZE} color="green" />
                <RNPText variant="bodyMedium" style={{ color: 'green' }}>Add Policy</RNPText>
              </Pressable>
            }>
            <Section title="Payment" titleVariant="titleSmall" titleRight={(
              <RNPText variant="bodySmall" style={{ color: 'green' }} onPress={() => {
                setSelectedPolicy('Payment');
                openModal(1);
              }}>Add note</RNPText>
            )}>
              {addedPolicies.find(item => item.title === 'Payment')?.notes.map((item, index) => (
                <PolicyNoteItem key={index} item={(<RNPText variant="bodyMedium">{item}</RNPText>)} />
              ))}
            </Section>
            <Section title="Pets" titleVariant="titleSmall" titleRight={(
              <RNPText variant="bodySmall" style={{ color: 'green' }} onPress={() => {
                setSelectedPolicy('Pets');
                openModal(1);
              }}>Add note</RNPText>
            )}>
              <PolicyNoteItem item={(
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <RNPText variant="bodyMedium">Allowed</RNPText>
                  <Checkbox
                    status={petsAllowed ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setPetsAllowed(!petsAllowed);
                    }}
                  />
                </View>
              )} />
              {addedPolicies.find(item => item.title === 'Pets')?.notes.map((item, index) => (
                <PolicyNoteItem key={index} item={(<RNPText variant="bodyMedium">{item}</RNPText>)} />
              ))}
              {/* <PolicyNoteItem item={(<RNPText variant="bodyMedium">Cats are allowed</RNPText>)} /> */}
            </Section>
            {addedPolicies.filter(item => (!['Pets', 'Payment'].includes(item.title))).map((item, index) => (
              <Section key={index} title={item.title} titleVariant="titleSmall" titleRight={(
                <RNPText variant="bodySmall" style={{ color: 'green' }} onPress={() => {
                  setSelectedPolicy(item.title);
                  openModal(1);
                }}>Add note</RNPText>
              )}>
                {addedPolicies.find(i => i.title === item.title)?.notes.map((note, index) => (
                  <PolicyNoteItem key={index} item={(<RNPText variant="bodyMedium">{note}</RNPText>)} />
                ))}
              </Section>
            ))}
            {/* <SectionList
              sections={addedPolicies.map(item => ({ title: item.title, data: item.notes }))}
              keyExtractor={(_item, index) => index.toString()}
              renderSectionHeader={({ section: { title } }) => (
                <RNPText variant="bodyMedium" style={styles.policyTitle}>{title}</RNPText>
              )}
              renderItem={({ item, index }) => (
                <View key={index} style={{ flex: 1, justifyContent: 'center', marginVertical: Margin.m_3xs }}>
                  <RNPText variant="bodyMedium" style={styles.policyNote}>{item}</RNPText>
                </View>
              )}
              scrollEnabled={false}
            /> */}
          </Section>
        </ScrollView>
      </CreateListingLayout>
    </>
  )
}

const mapStateToProps = (store: AppState) => ({
  createListing: store.createListing,
});

const mapDispatchToProps = (dispatch: any) => 
  bindActionCreators(
    {
      saveDraftListing,
    },
    dispatch
  );

const CreateListingDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);
export default CreateListingDetailsScreen;

const styles = StyleSheet.create({
  group: { marginVertical: 8 },
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
  addBtn: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  descriptionTextArea: {
    height: 100,
  },
  descriptionText: {
    paddingTop: 16,
  },
  policyTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  policyNote: {
    color: 'gray',
    fontWeight: 'normal',
  },
  policyNoteItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }
});