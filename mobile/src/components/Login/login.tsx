import React from 'react';
import { View, Text } from 'react-native';
import {useFonts} from 'expo-font';

export default function Login(){

  const [isFontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}

  return (
    <View>
      <Text>Usuario/Email</Text>
    </View>
  );
}
function useFonts(arg0: { 'GeneralSans-400': any; 'GeneralSans-600': any; 'GeneralSans-700': any; }): [any] {
  throw new Error('Function not implemented.');
}

