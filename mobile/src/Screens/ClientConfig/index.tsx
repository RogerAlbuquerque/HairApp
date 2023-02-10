import { Image, ImageBackground } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HeaderComponent from "../../components/UtilsComponents/HeaderComponent";
import { Text } from "../../utils/Text";
import InputText from '../../components/UtilsComponents/InputText';
import { useContext } from "react";
import { UserInfoContext } from "../../context";
import {
  Header,
  ProfileImage,
  ClientInfo,
  ClientData,
  InfoUserForms,
  UserInfo
} from "./style";


export default function ClientConfig(){
  const {clientInfo} = useContext(UserInfoContext);

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
            <Text size={15} font={'Poppins'} weight={'Regular'} color={'#fff'}>{clientInfo.clientName}</Text>

            <Text size={20} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Email: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>{clientInfo.email}</Text>
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
