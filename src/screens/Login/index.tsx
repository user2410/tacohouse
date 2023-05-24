import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '@navigation/AppNavigator';
import {useNavigation} from '@react-navigation/native';

type LoginScreenProp = StackNavigationProp<AppStackParamList, 'Login'>;

export default function LoginScreen(): JSX.Element {
  const navigation = useNavigation<LoginScreenProp>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    navigation.replace('MainNav');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#CCCCCC"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateToRegister}>
        <Text style={styles.link}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
