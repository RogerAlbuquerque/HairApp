import React, { useState } from 'react';
import { ImageBackground, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { AccessButton, Button, Check, Container, ContainerForm, ContainerLogo,  Create,  CreateAccount,  Footer,  ForgotDad, ForgotPassword} from './style';
import InputText from '../../../components/InputText';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';
import ToRegisterModal from '../../../components/Modal';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../../utils/routeProps';

export default function SignIn(){
  const [isChecked,setChecked]=useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation<propsStack>();

  function setModalValue(){
    setIsModalVisible(!isModalVisible);
  }
  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
      style={{flex: 1}} resizeMode="cover">

    <Container>
      <ToRegisterModal
        isModalVisible={isModalVisible}
        setModalValue={setModalValue}
      />



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
              font='Imbue-Medium'
              fontSize={28}
              width={'80%'}
              height= {'10%'}
              // onChangeText={() => {}}
            />
              <InputText
              placeholder='Senha'
              font='Imbue-Medium'
              fontSize={28}
              isPassword={true}
              width={'80%'}
              height= {'10%'}
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
              <ForgotPassword onPress={()=>navigation.navigate('VerifyEmail')}>
                <Text size={15} font={'Imbue'} weight={'Bold'} color={'#fff'}>Esqueceu a senha?</Text>
              </ForgotPassword>
            </ForgotDad>


            <Footer>
               <AccessButton>
                <Button>
                  <Text size={50} font={'Imbue'} weight={'Medium'} color={'#FFF'}>Acessar</Text>
                </Button>
               </AccessButton>
               <CreateAccount>
                <Text size={20} font={'Imbue'} weight={'Medium'} color={'#FFF'}>
                    Não tem conta?
                  </Text>
                  <Create onPress={()=> setModalValue()}>
                      <Text size={20} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>cadastre-se</Text>
                  </Create>
               </CreateAccount>
            </Footer>
        </ContainerForm>



    </Container>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#fff',
  },
});
