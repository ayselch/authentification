import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../ThemeContext';
import { useRouter } from 'expo-router'; 

const Settings = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const router = useRouter(); 

  useEffect(() => {
    const loadEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');
        if (storedEmail) {
          setEmail(storedEmail);
        }
        if(storedPassword){
          setPassword(storedPassword)
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadEmail();
  }, []);

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userPassword');
      Alert.alert('Logged out', 'You have been logged out successfully.');
      router.push('../../loginScreens/LogIn'); 
    } catch (error) {
      console.log("Error during logout: ", error);
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
        Settings
      </Text>
      <Text style={[styles.email, isDarkMode ? styles.darkText : styles.lightText]}>
        Email: {email}
      </Text>
      <Text style={[styles.email, isDarkMode ? styles.darkText : styles.lightText]}>
        Password: {password}
      </Text>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isDarkMode ? '#444' : '#405187' }]} 
        onPress={handleLogOut}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  button: {
    marginTop: 150,
    paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default Settings;