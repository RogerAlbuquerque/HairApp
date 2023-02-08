import React, { useContext, useState } from 'react';
import emailValidator from "email-validator";
import {ImageBackground} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Check, Container, ContainerForm, ContainerLogo, Footer,  ForgotDad, Term} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';
import { api } from '../../../utils/api';
import { UserInfoContext } from '../../../context';
import AlertModal from '../../../components/UtilsComponents/AlertModal';

export default function Registration(){

  const [isChecked,setChecked]=useState(false);
  const [isModalVisible,setModalValue]=useState(false);
  const [titleTextModal,setTitleTextModal]=useState('');
  const [bodyTextModal,setBodyTextModal]=useState('');
  const [typeModal,setTypeModal]=useState<'error' | 'success' | ''>('');
  const {handleClientInfoState} = useContext(UserInfoContext);
  const [userNameInput,setUserNameInput]=useState('');
  const [emailInput,setEmailInput]=useState('');
  const [passwordInput,setPasswordInput]=useState('');
  const [confirmPasswordInput,setConfirmPasswordInput]=useState('');

  function show(){
    console.log(userNameInput)
    console.log(emailInput)
    console.log(passwordInput)
    console.log(confirmPasswordInput)
  }

  async function registerUser(){

    if(emailInput == '' || passwordInput == '' || userNameInput == '' || confirmPasswordInput == ''){
      return handleAlertModal('Alguns campos estão vazios', 'Todos os campos são obrigatórios serem preenchidos!', 'error')
    }
    if(passwordInput.length < 8){
      return handleAlertModal('Senha muito fraca', 'Senha precisa ter no mínimo 8 digitos', 'error')
    }
    if(!emailValidator.validate(emailInput)){
      return handleAlertModal('Email Inválido', 'Este não é o formato correto de um email', 'error')
    }

    if(passwordInput != confirmPasswordInput ){
      return handleAlertModal('Senhas não são iguais', 'Os campos de senhas precisam ser exatamente iguais!', 'error')
    }

    try{
     await api.post('/client/create',{clientName:userNameInput, email:emailInput, clientPassword:userNameInput});

     return handleAlertModal('Usuário criado com sucesso', 'Volte para a tela inicial e acesse sua conta', 'success')


    }
    catch(error){
      handleAlertModal('Email ou Usuário ja existem', 'Tente mudar algumas dessa informações', 'error');
    }
    finally{
    }

  }

  function handleAlertModal(title:string, bodyText:string, typeModal:'error' | 'success'){
    setTypeModal(typeModal);
    setModalValue(true);
    setTitleTextModal(title);
    setBodyTextModal(bodyText);

  }

  return (

    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1}}>
      <AlertModal
        isModalVisible={isModalVisible}
        setModalValue={() => setModalValue(!isModalVisible)}
        title={titleTextModal}
        bodyText={bodyTextModal}
        typeModal={typeModal}
      />
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
                onChange={(value) => setUserNameInput(value)}
              />
              <InputText
                placeholder='E-mail'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                height= {40}
                onChange={(value) => setEmailInput(value)}

                // onChangeText={() => {}}
              />
                <InputText
                placeholder='Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                height= {40}
                onChange={(value) => setPasswordInput(value)}
              />
              <InputText
                placeholder='Confirmar Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                height= {40}
                onChange={(value) => setConfirmPasswordInput(value)}
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
            <Button onPress={registerUser}>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Cadastrar </Text>
            </Button>
          </Footer>
      </Container>
    </ImageBackground>
  );
}

