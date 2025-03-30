import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ThemeContext } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => {
  const router = useRouter();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail')
        if (userEmail) {
          router.push({pathname: '/(authenticated)/(tabs)' , params:{name:"userEmail"}} )
        }
        else {
          router.push('/')
        }
      } catch (error) {
        console.error("Error checking login status: ", error)
      } finally {
        setLoading(false)

      }

    }
    checkLoginStatus()
  }, [])
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />  
      </View>
    );
  }

  

return (
  <SafeAreaView style={[styles.safeArea, isDarkMode && styles.darkSafeArea]}>
    <View style={styles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <ImageBackground
        source={require('../assets/background.jpeg')}
        style={styles.background}
      >
        <TouchableOpacity onPress={toggleDarkMode} style={styles.modeButton}>
          <MaterialIcons
            name={isDarkMode ? "dark-mode" : "light-mode"}
            size={30}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>

        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Let Your Dream Furniture Come True
          </Text>

          <TouchableOpacity
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => router.push("./loginScreens/LogIn")}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => router.push("./loginScreens/Register")}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkSafeArea: {
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: 80,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  darkText: {
    color: 'lightgray',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 120,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  darkButton: {
    backgroundColor: '#444',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F364F',
  },
  darkButtonText: {
    color: 'white',
  },
  modeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default Index;
