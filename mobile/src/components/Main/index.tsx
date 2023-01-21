import React from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
import { Container, ContainerForm, ContainerLogo, Title, Txt } from './style';


export default function Welcome(){
  return (
    <Container>
      {/* <Image
          source={require('../../imgs/31851132.png')}
        /> */}
      <ContainerLogo>
        <Image
          source={require('../../imgs/333332.png')}
          style={{width: '90%' }}
          resizeMode="contain"
        />
      </ContainerLogo>
      <ContainerForm>
        <Title>Vamos dar aquele trato no visual?</Title>
        <Txt>Faça o login para começar</Txt>
      </ContainerForm>
    </Container>
  );
}
