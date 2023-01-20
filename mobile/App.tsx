import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './src/components/Login/login';
import { useFonts } from 'expo-font';

export default function App() {

  const [isFontLoaded] = useFonts({
    'Imbue-Bold': require('../../assets/Fonts/Imbue/static/Imbue_36pt/Imbue_36pt-Bold.ttf'),
    'Imbue-Medium': require('../../assets/Fonts/Imbue/static/Imbue_36pt/Imbue_36pt-Medium.ttf'),
    'Poppins-Bold': require('../../assets/Fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/Fonts/Poppins/Poppins-Regular.ttf'),
  });

  if (!isFontLoaded){
    return null;
  }
  return (

    <View>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

