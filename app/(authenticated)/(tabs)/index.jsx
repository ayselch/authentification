import {React, useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemeContext } from '../../ThemeContext'; // Adjust the path as necessary

const index = () => {
  const router = useRouter();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
        Welcome to the Home Page!
      </Text>
      <Text style={[styles.description, isDarkMode ? styles.darkText : styles.lightText]}>
        This is where you can find the latest updates and features.
      </Text>
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
    backgroundColor: '#405187',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#405187',
  },
});

export default index;

