import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Check, Container, ContainerForm, ContainerLogo,  Create,  Footer,  ForgotDad, ForgotPassword, OverlayKeyboard} from './style';
import InputText from '../../../components/InputText';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';

export default function Registration(){

  const [isChecked,setChecked]=useState(false);

  return (
    <Container>
      <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
      style={{flex: 1}} resizeMode="cover">


          <ContainerLogo>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/imgs/logoo.png')}
              style={{width: '90%'}}
              resizeMode="contain"
            />
          </ContainerLogo>


        <ContainerForm>
           <InputText
              placeholder='Usuario/Email'
              // onChangeText={() => {}}
            />
              <InputText
              placeholder='Senha'
              isPassword={true}
              // onChangeText={() => {}}
            />

            <ForgotDad>
              <Check>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#004bec' : undefined}
                />
                <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>  Lembrar meu Usuario</Text>

              </Check>
              <ForgotPassword>
                <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>Esqueceu a senha?</Text>
              </ForgotPassword>
            </ForgotDad>

            <Button>
              <Text size={50} font={'Imbue'} weight={'Medium'} color={'#FFF'}>Acessar</Text>
            </Button>
            <Footer>
                <Text size={20} font={'Imbue'} weight={'Medium'} color={'#FFF'}>
                  Não tem conta?
                </Text>
                <Create>
                    <Text size={20} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>cadastre-se</Text>
                </Create>
            </Footer>
        </ContainerForm>


      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#fff',
  },
});
