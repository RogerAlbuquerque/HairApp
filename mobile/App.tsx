import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

  const [isFontLoaded] = useFonts({
    'Imbue-Bold': require('./src/assets/Fonts/Imbue/static/Imbue_36pt/Imbue_36pt-Bold.ttf'),
    'Imbue-Medium': require('./src/assets/Fonts/Imbue/static/Imbue_36pt/Imbue_36pt-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/Fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./src/assets/Fonts/Poppins/Poppins-Regular.ttf'),
  });

  if (!isFontLoaded){
    return null;
  }else{
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>

  );
}
}

