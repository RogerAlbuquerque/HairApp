import React from 'react';
import {Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '../Text';
import { Button, Container, ContainerForm, ContainerLogo } from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';


export default function Main(){
  const navigation = useNavigation<propsStack>();
  return (
    <ImageBackground source={require('../../imgs/bkg.jpg')}
      style={{flex: 1}}resizeMode="cover">

      <Container>
        <ContainerLogo>
          <Animatable.Image
            animation="flipInY"
            source={require('../../imgs/logoo.png')}
            style={{width: '90%'}}
            resizeMode="contain"
          />
        </ContainerLogo>

          <ContainerForm>
            <Text size={21} font={'Poppins'} weight={'Bold'}>Vamos dar aquele trato no visual?</Text>
            <Text size={16} font={'Poppins'} weight={'Regular'} color={'#a1a1a1'}>Acesse sua conta!</Text>
            <Button
              onPress={()=>navigation.navigate('SignIn')}
              >
              <Text size={60} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Acessar</Text>
            </Button>
          </ContainerForm>
      </Container>
    </ImageBackground>

  );


}
