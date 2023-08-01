import React, { useState } from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './login.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '@navigation/app.navigator';
import { useNavigation } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Foundation';
import AIcon from 'react-native-vector-icons/AntDesign';
import { List, MD3Colors } from 'react-native-paper';

type LoginScreenProp = StackNavigationProp<AppStackParamList, 'Login'>;

export default function LoginScreen(): JSX.Element {
  const navigation = useNavigation<LoginScreenProp>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    navigation.replace('ManageAppNav');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@assets/images/login_background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.body}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            label="Email"
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(prev => !prev)}
              />
            }
          />
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
