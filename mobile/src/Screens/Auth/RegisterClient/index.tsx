import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Check, Container, ContainerForm, ContainerLogo, Footer,  ForgotDad} from './style';
import InputText from '../../../components/InputText';
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
                // onChangeText={() => {}}
              />
              <InputText
                placeholder='E-mail'
                // onChangeText={() => {}}
              />
                <InputText
                placeholder='Senha'
                isPassword={true}
                // onChangeText={() => {}}
              />
              <InputText
                placeholder='Confirmar Senha'
                isPassword={true}
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
              <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}> Li e aceito os termos de uso!</Text>
            </Check>
          </ForgotDad>

          <Footer>
            <Button>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#FFF'}>Cadastrar </Text>
            </Button>
          </Footer>
      </Container>
    </ImageBackground>
  );
}

