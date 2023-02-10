import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '../../../utils/Text';
import { ContainerLogo, ProfileImage,Container, Config, Menu, UserData,UserName } from './style';

interface HeaderComponentProps{
  onPressFunctionNavigate?:()=>void;
  userName:string
}

export default function HeaderComponent({userName,onPressFunctionNavigate}:HeaderComponentProps){
  const [isMenuVisible, setIsMenuVisible] = useState(false)
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
              <TouchableOpacity>
                <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>Sair</Text>
              </TouchableOpacity>
          </Menu>
          }
          <ProfileImage style={{justifyContent:'center'}} onPress={() => setIsMenuVisible(!isMenuVisible)}>
            <Image source={require('../../../assets/imgs/defaultImage.png')} style={{width:80, height:90}}/>
          </ProfileImage>
        </UserData>
        <UserName>
          <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>{userName}</Text>
        </UserName>

      </Config>


    </Container>
  );
}
