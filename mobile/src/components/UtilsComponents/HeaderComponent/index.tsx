import { useContext, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { UserInfoContext } from '../../../context';
import { api } from '../../../utils/api';
import { Text } from '../../../utils/Text';
import { ContainerLogo, ProfileImage,Container, Config, Menu, UserData,UserName } from './style';

interface HeaderComponentProps{
  onPressFunctionNavigate?:()=>void;
}

export default function HeaderComponent({onPressFunctionNavigate}:HeaderComponentProps){
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const {clientInfo, logout} = useContext(UserInfoContext);
  return(
    <Container>
      <ContainerLogo>
        <Image source={require('../../../assets/imgs/logoo.png')} style={{width:80, height:90}}/>
      </ContainerLogo>

      <Config>
        <UserData style={{justifyContent: isMenuVisible? 'center': 'flex-end'}}>
          {isMenuVisible &&
          <Menu>
              <TouchableOpacity onPress={onPressFunctionNavigate}>
                <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'} style={{paddingBottom:10}}>Alterar dados</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={logout}>
                <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>Sair</Text>
              </TouchableOpacity>
          </Menu>
          }
          <ProfileImage style={{justifyContent:'center'}} onPress={() => setIsMenuVisible(!isMenuVisible)}>
            <Image source={require('../../../assets/imgs/defaultImage.png')} style={{width:80, height:90}}/>
          </ProfileImage>
        </UserData>
        <UserName>
          <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>{clientInfo.clientName}</Text>
        </UserName>

      </Config>


    </Container>
  );
}
