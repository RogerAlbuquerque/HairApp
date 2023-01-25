import { Image } from "react-native";
import { Text } from "../../utils/Text";
import { Container, HairdImage, HairdName, Info, ProfileImage,CloseButton,InfosText } from "./style";


export default function HairdCard(){
  return(
    <Container>
       <CloseButton >
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
        </CloseButton>
      <HairdImage>
        <ProfileImage style={{justifyContent:'center'}} >
          <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:70, height:80}}/>
        </ProfileImage>
      </HairdImage>

      <HairdName>
        <Text size={12} font={'Poppins'} weight={'Bold'} color={'black'}>Antônio Jairo Alves</Text>
      </HairdName>

      <Info>
        <InfosText>
          <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Aberto: </Text>
          <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>12:00 as 18:00</Text>
        </InfosText>

        <InfosText>
          <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Cabelo: </Text>
          <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>R$15</Text>
        </InfosText>

        <InfosText>
          <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Barba: </Text>
          <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>R$20</Text>
        </InfosText>
      </Info>
    </Container>
  );
}
