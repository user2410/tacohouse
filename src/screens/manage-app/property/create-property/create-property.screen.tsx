import React from 'react';

import styles from './styles';

import {
  Modal,
  SafeAreaView, View
} from 'react-native';

import CreatePropertyForm, { CreatePropertyFormData } from '@components/form/create-property/create-property';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ManageAppParamList } from '@navigation/manage-app/manage-app.navigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Section from '@components/section/section';
import { Button as RNPButton, Text as RNPText } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { PropertyService } from '@services/property.service';

type VARIANT = 'cancel' | 'draft' | 'save';

export default function CreatePropertyScreen(): React.ReactElement {
  const navigation = useNavigation<BottomTabNavigationProp<ManageAppParamList, 'CreateProperty'>>();
  const route = useRoute<RouteProp<ManageAppParamList, 'CreateProperty'>>();
  
  const [variant, setVariant] = React.useState<string>();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const {
    control, register, setValue, reset, handleSubmit,
    formState: { errors },
  } = useForm<CreatePropertyFormData>({
    defaultValues: {
      address: '',
      nFloors: 1,
      nBathRooms: 0,
      nBedRooms: 1,
      nKitchens: 0,
    }
  });

  const openModal = (variant?: VARIANT) => {
    setVariant(variant);
    setShowModal(true);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create Property',
      headerRight: () => (
        <View style={styles.headerRightIcons}>
          <MaterialCommunityIcon name="close" size={24} color="white" onPress={() => openModal('cancel')} />
          <MaterialCommunityIcon name="archive" size={24} color="white" onPress={() => openModal('draft')} />
          <MaterialCommunityIcon name="content-save" size={24} color="white" onPress={() => openModal('save')} />
        </View>
      )
    })
  }, [navigation, route]);

  const onSubmit = async (data: CreatePropertyFormData) => {
    try{
      await PropertyService.createProperty(data);
      setVariant(undefined);
    }catch(e){
      console.log(e);
      setShowModal(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Section
              title={
                variant === 'draft'
                  ? 'Save as draft'
                  : variant === 'cancel'
                    ? 'Cancel'
                    : variant === 'save'
                      ? 'Save property'
                      : ''}
              titleVariant='titleMedium'>
                <View style={styles.msgContainer}>
              {!variant && (
                  <MaterialCommunityIcon name="check-circle" size={36} color="green"/>
                  )}
              <RNPText>
              {
                variant === 'draft'
                  ? 'Save the current property as draft, you can edit and create this property later'
                  : variant === 'cancel'
                    ? 'Cancel creating this property. All information will be lost'
                    : variant === 'save'
                      ? 'Are you sure want to create this property ?'
                      : 'Successfully created new property'
              }</RNPText>
                  </View>
            </Section>
            <View style={[
              styles.btnContainer,
              !variant && {
                justifyContent: 'center',
                alignItems: 'center',
              }]}>
              {variant && (<RNPButton mode="elevated" onPress={() => setShowModal(false)}>Cancel</RNPButton>)}
              <RNPButton mode="contained" onPress={() => {
                switch(variant) {
                  case 'save':
                    // call property service and save
                    handleSubmit(onSubmit)();
                    break;
                  case 'draft':
                    // save property as draft
                    break;
                  case 'cancel':
                    // naviagte to ManageProperty
                    navigation.navigate('ManageProperties');
                    break;
                  default: 
                    setShowModal(false);
                    // navigation.navigate('ManageProperties');
                }
              }}>OK</RNPButton>
            </View>
          </View>
        </View>
      </Modal>
      <CreatePropertyForm control={control} setValue={setValue}/>
    </SafeAreaView>
  );
}
