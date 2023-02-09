import React, { useContext, useState } from 'react';
import { ActivityIndicator, ImageBackground} from 'react-native';
import emailValidator from "email-validator";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button,Container, ContainerForm, ContainerLogo, Footer} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';
import { api } from '../../../utils/api';
import { UserInfoContext } from '../../../context';

interface recoverProps{
  route:{
    params:{
      email:string;
    }
  }
}
export default function Recover({route}:recoverProps){
  const emailParamRoute = route.params.email
  const [email, setEmail] = useState(emailParamRoute);
  const [token, setToken] = useState('');
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAwaitingReponse,setIsAwaitingReponse]=useState(false);
  const{handleAlertModal}=useContext(UserInfoContext)

  async function recoveryPassword(){
    if(email == '' || token == '' || newPassword == '' || confirmPassword == '' ){
      return handleAlertModal('Algum campo está vazio', 'É preciso preencher todos os campos', 'error')
    }

    if(!emailValidator.validate(email)){
      return handleAlertModal('Email inválido', 'Indique um email válido para alterar a senha!', 'error')
    }

    if(newPassword != confirmPassword){
      return handleAlertModal('Senhas não são iguais', 'Os campos de senhas precisam ser exatamente iguais!', 'error')
     }

     if(newPassword.length < 8){
      return handleAlertModal('Senha muito fraca', 'A senha precisa ter no mínimo 8 digitos!', 'error')
     }

    try{
      setIsAwaitingReponse(true)
      await api.put('/passwordRecovery',{email,token,newPassword})
      return handleAlertModal('Senhas alterada com sucesso', 'Volte a tela de login e acesse com sua nova senha!', 'success')
    }
    catch(error){
      console.log(error)
      return handleAlertModal('Erro: algumas das informações podem estar incorretas', 'Verifique os campos', 'error')
    }
    finally{
      setIsAwaitingReponse(false)

    }
  }

  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1}}>
      <Container>

          <ContainerLogo>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/imgs/logoo.png')}
              style={{ width:'70%', height:400}}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerForm>
            {!emailParamRoute &&
                <InputText
                placeholder='Email'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                onChange={(value) => setEmail(value) }
              />
            }

              <InputText
                placeholder='TOKEN'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                onChange={(value) => setToken(value) }

              />

              <InputText
                placeholder='Nova Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                onChange={(value) => setPassword(value) }
              />
              <InputText
                placeholder='Confirmar Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                width={'80%'}
                onChange={(value) => setConfirmPassword(value) }
              />
          </ContainerForm>
          {isAwaitingReponse ? <ActivityIndicator color="#fff" size="large"/>
          :
          <Footer>
            <Button onPress={recoveryPassword}>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Alterar senha</Text>
            </Button>
          </Footer>}
      </Container>
    </ImageBackground>
  );
}

