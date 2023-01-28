import DateTimePicker from 'react-native-modal-datetime-picker';
import { useState } from 'react';
import { Image, ImageBackground, View } from "react-native";
import Button from "../../components/Button";
import HeaderComponent from "../../components/HeaderComponent";
import { Text } from "../../utils/Text";
import {
  Header,
  ProfileImage,
  ClientInfo,
  ClientData,
  Container,
  InfoUserForms,
  UserInfo
} from "./style";
import InputText from '../../components/InputText';

export default function ClientConfig(){

  // MANIPULATE DATAPICKER
  return(
    <ImageBackground source={require('../../assets/imgs/bkg.jpg')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">


        <Header>
          <HeaderComponent />
        </Header>

        <ClientInfo>
          <ProfileImage>
            <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
          </ProfileImage>

          <ClientData>
            <Text size={20} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Nome:</Text>
            <Text size={15} font={'Poppins'} weight={'Regular'} color={'#fff'}>Washington Ferreira</Text>

            <Text size={20} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Email: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>fulano@gmail.com</Text>
          </ClientData>
        </ClientInfo>

        <InfoUserForms>
          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar nome:</Text>
           <InputText
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar email:</Text>
           <InputText
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar senha:</Text>
           <InputText
            isPassword={true}
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Confirmar nova senha:</Text>
           <InputText
            isPassword={true}
           />
          </UserInfo>

        </InfoUserForms>

        <Button
          name='Atualizar'
          size={40}
          letterCollor={'#F6C33E'}
        />




    </ImageBackground>
  );

}
