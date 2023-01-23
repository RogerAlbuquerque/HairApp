import React from 'react';
import {Image, TouchableOpacity, ImageBackground, View } from 'react-native';
import { Text } from '../../Text';
import { Buttons, ButtonLogin,ButtonRegister, Container, ContainerForm, ContainerLogo } from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../utils/routeProps';


export default function Main(){
  const navigation = useNavigation<propsStack>();
  return (
    <ImageBackground source={require('../../../imgs/bkg.jpg')}
      style={{flex: 1, alignItems:'center'}}resizeMode="cover" imageStyle={{}}>

      <Container>
        <ContainerLogo>
          <Animatable.Image
            animation="flipInY"
            source={require('../../../imgs/logoo.png')}
            style={{width: '90%'}}
            resizeMode="contain"
          />
        </ContainerLogo>

          <ContainerForm>
           <View style={{alignItems:'center'}}>
            <Text size={20} font={'Poppins'} weight={'Bold'}>Vamos dar aquele trato no visual?</Text>
            <Text size={16} font={'Poppins'} weight={'Regular'} color={'#a1a1a1'}>Acesse ou crie sua conta!</Text>
           </View>

            <Buttons>
              <ButtonLogin onPress={()=>navigation.navigate('SignIn')}>
                <Text size={50} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Acessar</Text>
              </ButtonLogin>

              <ButtonRegister onPress={()=>navigation.navigate('SignIn')} >

                <Text size={50} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Cadastrar</Text>
              </ButtonRegister>
            </Buttons>
          </ContainerForm>
      </Container>
    </ImageBackground>

  );


}
