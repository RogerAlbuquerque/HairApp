import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './src/components/Login/login';

export default function App() {
  return (
    <View>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

