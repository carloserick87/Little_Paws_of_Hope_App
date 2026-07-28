import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { queryClient } from '@/services/queryClient';
import './global.css';
import {useColorScheme} from "@/hooks/use-color-scheme";
import {ThemeProvider, DarkTheme, DefaultTheme} from "@react-navigation/native";

import ThemedView from "@/components/ui/ThemedView";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const colorScheme = useColorScheme();

    const [ fontsLoaded, error] = useFonts({
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    });

    useEffect(() => {
        if( error ) throw error;

        if( fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
           <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
               <ThemedView>
                  <Slot />
               </ThemedView>
           </ThemeProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
  )
}

export default RootLayout