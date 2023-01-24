import { Image } from 'react-native';
import { Text } from '../../utils/Text';
import { ContainerLogo, ProfileImage,Container, Config, Menu } from './style';

export default function Home(){
  return(
    <Container>
      <ContainerLogo>
        <Image source={require('../../assets/imgs/logoo.png')} style={{width:80, height:90}}/>
      </ContainerLogo>

      <Config>
        <Menu>
          <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'} style={{paddingBottom:10}}>Alterar dados</Text>
          <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>Sair</Text>
        </Menu>
        <ProfileImage>
          <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:80, height:90}}/>
          <Text size={14} font={'Poppins'} weight={'Bold'} color={'#fff'}>Nome do usuário</Text>
        </ProfileImage>
      </Config>

    </Container>
  );
}
