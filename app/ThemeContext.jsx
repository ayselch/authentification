import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    const loadDarkMode = async () => {
      try {
        const storedMode = await AsyncStorage.getItem("darkMode");
        if (storedMode !== null) {
          setIsDarkMode(JSON.parse(storedMode));
        } else {
          setIsDarkMode(false); 
        }
      } catch (error) {
        console.error("Error loading dark mode:", error);
        setIsDarkMode(false); 
      }
    };
    loadDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    try {
      const newMode = !isDarkMode;
      console.log("Toggling dark mode to:", newMode);
      setIsDarkMode(newMode);
      await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
    } catch (error) {
      console.error("Error saving dark mode:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};