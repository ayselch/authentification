import {
  View, Text, TextInput, SafeAreaView, StyleSheet, Platform, StatusBar, TouchableOpacity, Keyboard, Switch,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useRouter } from 'expo-router';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState(''); 

  const { isDarkMode } = useContext(ThemeContext);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');
      console.log("email: ",storedEmail)
      console.log("Stored Password:", storedPassword);


      if (email === storedEmail && password === storedPassword) {
        router.push('/(authenticated)/(tabs)');
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    const handleGetItem = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('userEmail'); 
        const savedPassword = await AsyncStorage.getItem('userPassword')
        if (savedEmail) {
          setEmail(savedEmail);
        }
        if(savedPassword){
          setPassword(savedPassword)
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleGetItem();
  }, []);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#405187' : '#fff' }]}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.push('../')}>
              <FeatherIcon name="arrow-left" size={24} color={isDarkMode ? "#fff" : "#405187"} />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#405187' }]}>Welcome back</Text>
            <Text style={{ marginBottom: 80, color: isDarkMode ? '#aaa' : '#405187' }}>Login to your account</Text>
            <TextInput
              placeholder="Username or email"
              placeholderTextColor={isDarkMode ? '#aaa' : '#aaa'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
              style={[styles.input, { backgroundColor: isDarkMode ? '#405187' : '#fff', color: isDarkMode ? '#fff' : '#405187' }]} 
            />
  
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={isDarkMode ? '#aaa' : '#aaa'}
                value={password}
                onChangeText={setPassword}
                style={[styles.input2, { color: isDarkMode ? '#fff' : '#405187' }]}
                secureTextEntry={secureText}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setSecureText(!secureText)}
              >
                {secureText ? <EntypoIcon size={17} name='eye' color={isDarkMode ? '#fff' : '#405187'} /> 
                :
                 <EntypoIcon size={17} name='eye-with-line' color={isDarkMode ? '#fff' : '#000'} />}
              </TouchableOpacity>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#405187', true: '#EB8408' }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={[styles.switchText, { color: isDarkMode ? '#aaa' : '#828282' }]}> Remember me </Text>
              <Text style={{ color: '#405187', marginEnd: 10 }}>Forgot password?</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? '#fff' : '405187' }} />
              <View>
                <Text style={{ textAlign: 'center', paddingHorizontal: 8, color: isDarkMode ? '#fff' : '#405187' }}>or</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? '#fff' : '##405187' }} />
            </View>

            <TouchableOpacity style={styles.signInButton2}>
              <AntDesignIcon name='google' size={24} color={"#3D3D3D"} />
              <Text style={{ color: '#3D3D3D', fontSize: 15 }}> Sign in with Google</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ fontSize: 13, color: '#828282' }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('./Register')}>
                <Text style={{ color: '#405187', fontSize: 13 }}>  Sign up now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchText: {
    paddingEnd: 35,
  },
  button: {
    marginTop: 150,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center',
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
});

export default LogIn;