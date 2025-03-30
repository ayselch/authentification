// Ensure this path is correct
import { Stack } from 'expo-router';
import { ThemeProvider } from '../ThemeContext';


const layout = () => {
    return (
        <ThemeProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            </Stack>
        </ThemeProvider>
    );
}

export default layout;