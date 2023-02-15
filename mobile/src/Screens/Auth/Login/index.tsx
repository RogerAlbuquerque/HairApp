import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../../../context';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../../utils/routeProps';
import { api } from '../../../utils/api';
import { Text } from '../../../utils/Text';
import InputText from '../../../components/UtilsComponents/InputText';
import Checkbox from 'expo-checkbox';
import ToRegisterModal from '../../../components/UtilsComponents/Modal';
import { ActivityIndicator, Image, ImageBackground, StyleSheet} from 'react-native';
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

  const {navigate} = useNavigation<propsStack>();
  const [emailInput,setEmailInput]=useState('');
  const [passwordInput,setPasswordInput]=useState('');
  const [isAwaitingLoginReponse,setIsAwaitingLoginReponse]=useState(false);
  const [isChecked,setChecked]=useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {handleClientInfoState, handleHairdInfoState, handleAlertModal,activeToken,handleMySchedList} = useContext(UserInfoContext);

  async function loginUser(){

    // if(emailInput == '' || passwordInput == ''){
    //   return handleAlertModal('Email ou senha vazios', 'Campos obrigatórios!', 'error')
    // }
     try{
      setIsAwaitingLoginReponse(true);
      const tokenResponse = await api.post('/login',{user:emailInput, password:passwordInput});
      if(tokenResponse){

        api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data}`;
        const userInfoResponse = await api.get('/me');
        // console.log(userInfoResponse.data);
        const schedInfo = await api.get('/scheduling/me').then((response)=>{handleMySchedList(response.data);})
        console.log(schedInfo);

        userInfoResponse.data.clientName ? handleClientInfoState(userInfoResponse.data) : handleHairdInfoState(userInfoResponse.data);
      }

     }
     catch(error){
      return handleAlertModal('Email ou senha incorretos', 'Tente novamente', 'error')
     }
     finally{
      setIsAwaitingLoginReponse(false);
      activeToken();
     }
  }

  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
      style={{flex: 1}}>
    <Container behavior='position'>
      <ToRegisterModal
        isModalVisible={isModalVisible}
        setModalValue={() => setIsModalVisible(!isModalVisible)}
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
            <ForgotPassword onPress={()=>navigate('VerifyEmail')}>
              <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>Esqueceu a senha?</Text>
            </ForgotPassword>
          </ForgotDad>
        </ContainerForm>

        {!isAwaitingLoginReponse ?
            <Footer>
              <Button onPress={loginUser}>
                <Text size={50} font={'Imbue'} weight={'Medium'} color={'#fff'}>Acessar</Text>
              </Button>

              <CreateAccount>
              <Text size={20} font={'Imbue'} weight={'Medium'} color={'#FFF'}>
                  Não tem conta?
                </Text>
                <Create onPress={() => setIsModalVisible(!isModalVisible)}>
                    <Text size={20} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>cadastre-se</Text>
                </Create>
              </CreateAccount>
            </Footer>
          :
          <ActivityIndicator color="#fff" size="large"/>

          }
    </Container>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#fff',
  },
});
