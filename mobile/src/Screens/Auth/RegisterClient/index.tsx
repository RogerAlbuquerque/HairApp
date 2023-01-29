import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Check, Container, ContainerForm, ContainerLogo, Footer,  ForgotDad, Term} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';

export default function Registration(){

  const [isChecked,setChecked]=useState(false);

  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1}}>
      <Container>

          <ContainerLogo>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/imgs/logoo.png')}
              style={{ width:'60%', height:400}}
              resizeMode="contain"
            />
          </ContainerLogo>


          <ContainerForm>
            <InputText
                placeholder='Usuario'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                height= {40}
                // onChangeText={() => {}}
              />
              <InputText
                placeholder='E-mail'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                height= {40}

                // onChangeText={() => {}}
              />
                <InputText
                placeholder='Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                height= {40}
                // onChangeText={() => {}}
              />
              <InputText
                placeholder='Confirmar Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                height= {40}
                // onChangeText={() => {}}
              />
          </ContainerForm>
          <ForgotDad>
            <Check>
              <Checkbox
                style={{backgroundColor:'#fff'}}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#004bec' : undefined}
              />
              <Term>
                <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>Li e aceito os termos de uso!</Text>
              </Term>
            </Check>
          </ForgotDad>

          <Footer>
            <Button>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Cadastrar </Text>
            </Button>
          </Footer>
      </Container>
    </ImageBackground>
  );
}

