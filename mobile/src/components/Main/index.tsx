import React from 'react';
import { View,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '../Text';
import { Container, ContainerForm, ContainerLogo } from './style';


export default function Welcome(){
  return (
    <ImageBackground source={require('../../imgs/bkg.jpg')}
      style={{flex: 1}}resizeMode="cover">

      <Container>
        <ContainerLogo>
          <Image
            source={require('../../imgs/logoo.png')}
            style={{width: '100%'}}
            resizeMode="contain"
          />
        </ContainerLogo>
          <ContainerForm>
            <Text size={20}>Vamos dar aquele trato no visual?</Text>
            <Text size={14} font={'Poppins'}>Faça o login para começar</Text>
            <TouchableOpacity>
              <Text>Acessar</Text>
            </TouchableOpacity>
          </ContainerForm>
      </Container>
    </ImageBackground>

  );


}
