import React, {useState} from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '@navigation/AppNavigator';
import {useNavigation} from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Foundation';
import AIcon from 'react-native-vector-icons/AntDesign';
import {List, MD3Colors} from 'react-native-paper';

type LoginScreenProp = StackNavigationProp<AppStackParamList, 'Login'>;

export default function LoginScreen(): JSX.Element {
  const navigation = useNavigation<LoginScreenProp>();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [accountType, setAccountType] = useState<string>('Choose account type');

  const handleLogin = () => {
    navigation.replace('MainNav');
  };

  const handleChooseType = (type: string) => {
    setAccountType(type);
    setShowModal(false);
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            <List.Section>
              <List.Subheader>Choose account type</List.Subheader>
              <Pressable
                android_ripple={{color: styles.modalPressableItem.color}}
                onPress={() => handleChooseType('Manager')}>
                <List.Item
                  title="Manager"
                  left={() => (
                    <List.Icon
                      icon="account-supervisor"
                      style={styles.modalIcon}
                    />
                  )}
                />
              </Pressable>
              <Pressable
                android_ripple={{color: styles.modalPressableItem.color}}
                onPress={() => handleChooseType('Tenant')}>
                <List.Item
                  title="Tenant"
                  left={() => (
                    <List.Icon
                      color={MD3Colors.tertiary70}
                      icon={props => (
                        <AIcon name="user" size={18} style={styles.modalIcon} />
                      )}
                    />
                  )}
                />
              </Pressable>
            </List.Section>
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={require('@assets/images/login_background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.body}>
          <Text style={styles.title}>Login</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            right={<TextInput.Icon icon="eye-off" />}
          />
          <Button
            // style={styles.input}
            mode="contained"
            onPress={() => setShowModal(true)}>
            {accountType}
          </Button>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.link}>
            Don't have an account? Login / register with
          </Text>
          {/* <TouchableOpacity onPress={handleNavigateToRegister}>
      </TouchableOpacity> */}
          <View style={styles.socialBtnContainer}>
            <FIcon name="social-google-plus" size={50} color="#c00"></FIcon>
            <FIcon name="social-facebook" size={50} color="#4267B2"></FIcon>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
