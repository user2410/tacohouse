import ShareButton from "@components/Button";
import RegularText from "@components/Texts/RegularText";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

// Image picker
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
// Icon
import Ionicons from "react-native-vector-icons/Ionicons";


export default function CreateTenant(): React.ReactElement {
    const [TenantName, setTenantName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [area, setArea] = useState('');

    const [imageUri, setImageUri] = useState('');

    const handleCreateTenant = () => {
        // Perform the logic to create a new room using the entered data
        const newRoom = {
            TenantName,
            roomNumber: parseInt(roomNumber),
            address,
            price: parseInt(price),
            area: parseFloat(area),
        };

        // TODO: Handle the creation of the room, such as storing it in a database or sending it to an API

        // Reset the form
        setTenantName('');
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
                {/* Select 1 room image */}
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
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
                                <Image style={styles.image} source={{ uri: imageUri }} />
                            ) : (
                                <Ionicons name="image-outline" size={32} color="black" />
                            )}
                        </ShareButton>
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Tenant Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={TenantName}
                        onChangeText={setTenantName}
                        placeholder="Enter Tenant Name"
                    />
                </View>

                <View>
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={roomNumber}
                        onChangeText={setRoomNumber}
                        placeholder="Enter Phone Number"
                    />
                </View>

                <View>
                    <Text style={styles.label}>Citizen identification:</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                        placeholder="Enter Citizen identification"
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


                <ShareButton buttonStyle={{ backgroundColor: '#9dc4d2' }} onPress={handleCreateTenant}>
                    <RegularText textStyles={{ fontSize: 19, fontWeight: 'bold' }}>
                        Create Tenant
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
        width: "100%",
        height: 200,
        borderRadius: 12,
    }
});
