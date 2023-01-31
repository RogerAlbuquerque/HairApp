import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import InputText from '../../../components/UtilsComponents/InputText';
import Checkbox from 'expo-checkbox';
import ToRegisterModal from '../../../components/UtilsComponents/Modal';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../../utils/routeProps';
import { api } from '../../../utils/api';
import {
  Button,
  Check,
  Container,
  ContainerForm,
  ContainerLogo,
  Create,
  CreateAccount,
  Footer,
  ForgotDad,
  ForgotPassword,
  UserInfo
} from './style';

export default function SignIn(){
  const [emailInput,setEmailInput]=useState('');
  const [passwordInput,setPasswordInput]=useState('');


  const [isChecked,setChecked]=useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation<propsStack>();

  function setModalValue(){
    setIsModalVisible(!isModalVisible);
  }

  async function loginUser(){
    await api.get('/client')
    .then(res =>{
     return console.log(res)
    })
    .catch(error => console.log('Deu ruim ' + error))

  }
  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
      style={{flex: 1}}>
    <Container behavior='position'>
      <ToRegisterModal
        isModalVisible={isModalVisible}
        setModalValue={setModalValue}
      />

          <ContainerLogo>

            <Image source={require('../../../assets/imgs/logoo.png')} style={{width:340, height:380}}/>
          </ContainerLogo>


        <ContainerForm>
          <UserInfo>
            <InputText
              placeholder='Usuario/Email'
              font='Imbue-Medium'
              fontSize={28}
              width={'80%'}
              onChange={(value) => setEmailInput(value)}
            />
              <InputText
              placeholder='Senha'
              font='Imbue-Medium'
              fontSize={28}
              isPassword={true}
              width={'80%'}
              onChange={(value) => setPasswordInput(value)}
            />
          </UserInfo>

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
            <ForgotPassword onPress={()=>navigation.navigate('VerifyEmail')}>
              <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>Esqueceu a senha?</Text>
            </ForgotPassword>
          </ForgotDad>
        </ContainerForm>

        <Footer>

            <Button onPress={loginUser}>
              <Text size={50} font={'Imbue'} weight={'Medium'} color={'#FFF'}>Acessar</Text>
            </Button>

          <CreateAccount>
          <Text size={20} font={'Imbue'} weight={'Medium'} color={'#FFF'}>
              Não tem conta?
            </Text>
            <Create onPress={()=> setModalValue()}>
                <Text size={20} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>cadastre-se</Text>
            </Create>
          </CreateAccount>
        </Footer>



    </Container>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#fff',
  },
});
