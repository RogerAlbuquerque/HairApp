import React from 'react';
import { ImageBackground} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Container, ContainerForm, ContainerLogo, Footer,  ForgotDad} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';

export default function VerifyEmail(){


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
              <InputText
                placeholder='E-mail'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                height= {40}
                // onChangeText={() => {}}
              />
          </ContainerForm>
          <ForgotDad style={{marginTop:-20}}>
            <Text size={12} font={'Imbue'} weight={'Medium'} color={'red'}>
              Será enviado um link nesse email para alterar sua senha!
            </Text>
          </ForgotDad>

          <Footer>
            <Button>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Recuperar senha</Text>
            </Button>
          </Footer>
      </Container>
    </ImageBackground>
  );
}

