import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../Text';
import { Button, Check, Container, ContainerForm, ContainerLogo,  Create,  Footer,  ForgotDad, ForgotPassword, Input} from './style';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';

export default function SignIn(){

  const [isChecked,setChecked]=useState(false);

  return (
    <Container>
      <ImageBackground source={require('../../../imgs/bkg.jpg')}
      style={{flex: 1}}resizeMode="cover">

        <ContainerLogo>
          <Animatable.Image
            animation="flipInY"
            source={require('../../../imgs/logoo.png')}
            style={{width: '90%'}}
            resizeMode="contain"
          />
        </ContainerLogo>

        <ContainerForm>

          <Input
            placeholder='Usuario/Email'
            maxLength={60}
            autoCorrect={false}
            onChangeText={() => {}}
          />
            <Input
            placeholder='Senha'
            autoCorrect={false}
            secureTextEntry
            onChangeText={() => {}}
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
