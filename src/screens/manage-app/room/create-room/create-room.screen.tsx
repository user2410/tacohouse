import ShareButton from "../../../../components/button";
import RegularText from "@components/text/RegularText";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

// Image picker
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';


export default function CreateRoomScreen(): React.ReactElement {
  const [roomName, setRoomName] = React.useState('');
  const [roomNumber, setRoomNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [area, setArea] = React.useState('');

  const [imageUri, setImageUri] = React.useState('');

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
      setImageUri(uri)
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ alignItems: 'center', justifyContent: 'space-around', marginRight: 10 }}>
            <ShareButton buttonStyle={{ backgroundColor: '#9dc4d2' }} onPress={handleChooseImage}>
              <RegularText textStyles={{ fontSize: 16, fontWeight: 'bold' }}>
                Choose Image
              </RegularText>
            </ShareButton>
          </View>
          {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
        </View>
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

        <ShareButton buttonStyle={{ backgroundColor: '#9dc4d2' }} onPress={handleCreateRoom}>
          <RegularText textStyles={{ fontSize: 19, fontWeight: 'bold' }}>
            Create Room
          </RegularText>
        </ShareButton>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  }
});