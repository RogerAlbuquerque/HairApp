import { ActivityIndicator, Image, ImageBackground } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HeaderComponent from "../../components/UtilsComponents/HeaderComponent";
import { Text } from "../../utils/Text";
import InputText from '../../components/UtilsComponents/InputText';
import { useContext, useState } from "react";
import { UserInfoContext } from "../../context";
import {
  Header,
  ProfileImage,
  ClientInfo,
  ClientData,
  InfoUserForms,
  UserInfo,
  Container
} from "./style";
import { api } from "../../utils/api";


export default function ClientConfig(){
  const {clientInfo, handleClientInfoState,handleAlertModal} = useContext(UserInfoContext);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(clientInfo.clientName)
  const [email, setEmail] = useState(clientInfo.email)
  const [password, setPassword] = useState('')
  const [isAwaitingUpdatingReponse,setIsAwaitingUpdatingReponse]=useState(false);

  async function updateClientInfo(clientName:string, email:string, password:string){
    let newPassword
    if((password != '') && (confirmPassword != password)){
      return handleAlertModal('As senhas são diferentes','As senhas precisam ser exatamente iguais','error')
    }
    if(password == ''){
      newPassword = clientInfo.clientPassword
    }

    try{
      setIsAwaitingUpdatingReponse(true)
      await api.put('/client/update',{

      clientName: clientName,
      email:email,
      clientPassword:newPassword
    })
    await api.get('/me').then(response => handleClientInfoState(response.data))
    return handleAlertModal('Dados alterados com sucesso','','success')
  }
  catch(error){
    console.log(error)
    return handleAlertModal('Erro ao alterar os dados','Tenten novamente','error')

  }finally{
    setIsAwaitingUpdatingReponse(false)
  }
  }
  function show(){
    console.log(name)
    console.log(email)
    console.log(password)
  }
  // MANIPULATE DATAPICKER
  return(
    <ImageBackground source={require('../../assets/imgs/bkg.jpg')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

    <Container behavior='position'>


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
           value={name}
           onChange={(value) => setName(value)}
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar email:</Text>
           <InputText
           value={email}
           onChange={(value) => setEmail(value)}
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar senha:</Text>
           <InputText
           onChange={(value) => setPassword(value)}
            isPassword={true}
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Confirmar nova senha:</Text>
           <InputText
            onChange={(value) => setConfirmPassword(value)}
            isPassword={true}
           />
          </UserInfo>

        </InfoUserForms>

        {!isAwaitingUpdatingReponse?
          <Button
          name='Atualizar'
          size={40}
          letterCollor={'#F6C33E'}
          onPress={() => updateClientInfo(name, email, password )}
          //
        />
        :
        <ActivityIndicator color="#fff" size="large"/>
        }

</Container>



    </ImageBackground>
  );

}
