import React from 'react';
import { ImageBackground, TextInput, View} from 'react-native';
import { Text } from '../Text';
import { Container, ContainerForm, ContainerLogo, Input} from './style';
import * as Animatable from 'react-native-animatable';

export default function SignIn(){
  return (
    <Container>
      <ImageBackground source={require('../../imgs/bkg.jpg')}
      style={{flex: 1}}resizeMode="cover">

        <ContainerLogo>
          <Animatable.Image
            animation="flipInY"
            source={require('../../imgs/logoo.png')}
            style={{width: '90%'}}
            resizeMode="contain"
          />
        </ContainerLogo>

        <ContainerForm>

          <Input
            placeholder='Usuario/ Email'
            autoComplete='email'
            maxLength={60}
            autoCorrect={false}
            onChangeText={() => {}}
          />
            <Input
            placeholder='Senha'
            autoComplete='password'
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </ContainerForm>

      </ImageBackground>
    </Container>
  );
}
