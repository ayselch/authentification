
import {
  View, Text, TextInput, StyleSheet, Platform, SafeAreaView, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
  Switch,
} from 'react-native'
import React, { useState, useContext } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useRouter } from 'expo-router'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { isDarkMode } = useContext(ThemeContext);


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureTextConfirm, setSecureTextConfirm] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      alert("Account created successfully!");
      router.push('./LogIn'); 
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.push('../')}>
              <FeatherIcon name="arrow-left" size={24} color={isDarkMode ? "#fff" : "#333"} />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>Let's get started!</Text>
            <Text style={{ marginBottom: 40 }}>Create your new account</Text>

            <TextInput
              placeholder="Name"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
              style={[styles.input, { backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            />

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={[styles.input, { backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            />

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                style={[styles.input2, { color: isDarkMode ? '#fff' : '#000' }]}
                secureTextEntry={secureText}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecureText(!secureText)}>
                {secureText ? <EntypoIcon size={17} name="eye" color={isDarkMode ? '#fff' : '#000'} /> : <EntypoIcon size={17} name="eye-with-line" color={isDarkMode ? '#fff' : '#000'} />}
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#aaa"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={[styles.input2, { color: isDarkMode ? '#fff' : '#000' }]}
                secureTextEntry={secureTextConfirm}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecureTextConfirm(!secureTextConfirm)}>
                {secureTextConfirm ? <EntypoIcon size={17} name="eye" color={isDarkMode ? '#fff' : '#000'} /> : <EntypoIcon size={17} name="eye-with-line" color={isDarkMode ? '#fff' : '#000'} />}
              </TouchableOpacity>
            </View>

            {!passwordMatch && <Text style={styles.errorText}>⚠ Passwords do not match!</Text>}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? '#fff' : 'black' }} />
              <Text style={{ textAlign: 'center', paddingHorizontal: 8, color: isDarkMode ? '#fff' : '#000' }}>or</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? '#fff' : 'black' }} />
            </View>

            <TouchableOpacity style={styles.signInButton2}>
              <AntDesignIcon name="google" size={24} color={"#3D3D3D"} />
              <Text style={{ color: '#3D3D3D', fontSize: 15 }}> sign in with Google</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ fontSize: 13, color: '#828282' }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push('./LogIn')}>
                <Text style={{ color: '#405187', fontSize: 13 }}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 15,
    borderColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  input2: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -10 }],
    zIndex: 10,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#405187',
    paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: "white"
  },
  signInButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    padding: 8,
    paddingHorizontal: 10,
    position: 'relative',
    flexDirection: 'row'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Register;