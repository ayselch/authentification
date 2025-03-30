import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Ensure this path is correct
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(authenticated)/(tabs)" />
        <Stack.Screen name="loginScreens/LogIn" />
        <Stack.Screen  name="Register" />
      </Stack>
    </ThemeProvider>
  );
}