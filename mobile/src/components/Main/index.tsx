import React from 'react';
import {Image, TouchableOpacity, ImageBackground } from 'react-native';
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
            <Text size={20} font={'Poppins'} weight={'Bold'}>Vamos dar aquele trato no visual?</Text>
            <Text size={16} font={'Poppins'} weight={'Bold'}>Faça o login para começar</Text>
            <TouchableOpacity>
              <Text size={48} font={'Imbue'} weight={'Medium'}>Acessar</Text>
            </TouchableOpacity>
          </ContainerForm>
      </Container>
    </ImageBackground>

  );


}
