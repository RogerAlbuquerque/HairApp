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
    <Container>
      <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
      style={{flex: 1}} resizeMode="cover">


          <ContainerLogo>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/imgs/logoo.png')}
              style={{ flex: 1}}
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
            <ForgotDad>
              <Check>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#004bec' : undefined}
                />
                <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}> Li e aceito os termos de uso!</Text>
              </Check>
            </ForgotDad>
        </ContainerForm>
        <Footer>
              <Button>
                <Text size={45} font={'Imbue'} weight={'Medium'} color={'#FFF'}>Cadastrar </Text>
              </Button>
            </Footer>
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#fff',
  },
});
