import ShareButton from '@components/Button';
import RegularText from '@components/Texts/RegularText';
import React, {useRef, useState} from 'react';
import {Modal} from 'react-native';

import styles from './styles';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

// Image picker
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Button, List, MD3Colors} from 'react-native-paper';
// Icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Foundation';
import AIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Facility from '../Facility';

export default function CreateRoom(): React.ReactElement {
  const [roomName, setRoomName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');

  const [roomType, setRoomType] = useState('Select room type');
  const [showModal, setShowModal] = useState<boolean>(false);

  const [imageUri, setImageUri] = useState('');

  const handleCreateRoom = () => {
    // Perform the logic to create a new room using the entered data
    const newRoom = {
      roomName,
      roomNumber: parseInt(roomNumber),
      address,
      price: parseInt(price),
      area: parseFloat(area),
    };

    // TODO: Handle the creation of the room, such as storing it in a database or sending it to an API

    // Reset the form
    setRoomName('');
    setRoomNumber('');
    setAddress('');
    setPrice('');
    setArea('');
  };

  const handleChooseImage = async (camera = true) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
    };

    try {
      const result: ImagePickerResponse = await launchImageLibrary(options);
      const uri = result.assets?.[0].uri || '';
      console.log(uri);
      setImageUri(uri);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const handleChooseType = (type: string) => {
    setRoomType(type);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal for select room type */}
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        hardwareAccelerated>
        <View
          style={styles.modalView}
          onTouchEndCapture={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <List.Section>
              <List.Subheader>Choose room type</List.Subheader>
              <Pressable
                android_ripple={{color: styles.modalPressableItem.color}}
                onPress={() => handleChooseType('Motel')}>
                <List.Item
                  title="Motel"
                  left={() => (
                    <List.Icon
                      icon={props => (
                        <Fontisto name="hotel-alt" size={20} color="black" />
                      )}
                    />
                  )}
                />
              </Pressable>
              <Pressable
                android_ripple={{color: styles.modalPressableItem.color}}
                onPress={() => handleChooseType('Apartment')}>
                <List.Item
                  title="Apartment"
                  left={() => (
                    <List.Icon
                      icon={props => (
                        <Fontisto name="hotel-alt" size={20} color="black" />
                      )}
                    />
                  )}
                />
              </Pressable>
              <Pressable
                android_ripple={{color: styles.modalPressableItem.color}}
                onPress={() => handleChooseType('Penthouse')}>
                <List.Item
                  title="Penthouse"
                  left={() => (
                    <List.Icon
                      icon={props => (
                        <Fontisto name="hotel-alt" size={20} color="black" />
                      )}
                    />
                  )}
                />
              </Pressable>
            </List.Section>
          </View>
        </View>
      </Modal>
      {/* End modal */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Select 1 room image */}
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              marginRight: 10,
            }}>
            <ShareButton
              buttonStyle={{
                backgroundColor: '#d3dde1',
              }}
              onPress={handleChooseImage}>
              {/* Show image */}
              {imageUri ? (
                <Image style={styles.image} source={{uri: imageUri}} />
              ) : (
                <Ionicons name="image-outline" size={32} color="black" />
              )}
            </ShareButton>
          </View>
        </View>

        {/* select room type */}
        <View style={{alignItems: 'center'}}>
          <Button
            mode="contained"
            onPress={() => setShowModal(true)}
            style={{
              borderRadius: 8,
              backgroundColor: '#34568B',
              marginBottom: 12,
              width: '100%',
            }}>
            <RegularText textStyles={{color: 'white', fontSize: 16}}>
              Room type: {roomType}
            </RegularText>
          </Button>
        </View>
        {/*  */}
        <View>
          <Text style={styles.label}>Room Name:</Text>
          <TextInput
            style={styles.input}
            value={roomName}
            onChangeText={setRoomName}
            placeholder="Enter Room Name"
          />
        </View>

        <View>
          <Text style={styles.label}>Room Number:</Text>
          <TextInput
            style={styles.input}
            value={roomNumber}
            onChangeText={setRoomNumber}
            placeholder="Enter Room Number"
          />
        </View>

        <View>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter Address"
          />
        </View>

        <View>
          <Text style={styles.label}>Price (per month):</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Enter Price"
          />
        </View>

        <View>
          <Text style={styles.label}>Area (sqft):</Text>
          <TextInput
            style={styles.input}
            value={area}
            onChangeText={setArea}
            keyboardType="numeric"
            placeholder="Enter Area"
          />
        </View>

        {/* Facility */}
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Facilities</Text>
          <Facility />
        </View>

        {/* Note */}
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Note</Text>
          <TextInput
            style={{
              ...styles.input,
              height: 80,
              flexWrap: 'wrap',
              textAlignVertical: 'top',
            }}
            multiline={true}
            numberOfLines={4} // Set the number of visible lines
          />
        </View>

        <ShareButton
          buttonStyle={{backgroundColor: '#9dc4d2'}}
          onPress={handleCreateRoom}>
          <RegularText textStyles={{fontSize: 19, fontWeight: 'bold'}}>
            Create Room
          </RegularText>
        </ShareButton>
      </ScrollView>
    </SafeAreaView>
  );
}
