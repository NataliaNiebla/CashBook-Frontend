import React from 'react';
//import "./global.css"
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { useCustomFonts } from './src/hooks/useCustomFonts';
import { Text } from 'react-native';

import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <DrawerNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
