import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text } from "../../utils/Text";

import { Container, HairdImage, HairdName, Info, ProfileImage,CancelButton, ApproveButton, InfosText } from "./style";

interface HairdCardProps{
  status?:'PENDING' | 'CONFIRMED'
  onPressCancelButton?:()=>void;
}

export default function ClientCardForHaders({status, onPressCancelButton}:HairdCardProps){

  const [colorCard, setColorCard] = useState ('');
  const [lineOfColorCard, setLineOfColorCard] = useState ('');

useEffect(()=>{
  if(status == 'CONFIRMED'){
    setColorCard ('background-color: rgba(63, 193, 0 ,0.3)')
    setLineOfColorCard('#3FC500');
  }else if(status == 'PENDING'){
    setColorCard ('background-color: rgba(246, 195, 62 ,0.3)') ;
    setLineOfColorCard('#F6C33E')
  }else{
    setColorCard ('background-color:  rgba(0, 0, 0 ,0.4)') ;
    setLineOfColorCard('white')
  }
},[status])



  return(
    <Container style={{backgroundColor:colorCard}}>

       <CancelButton onPress={onPressCancelButton}>
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
        </CancelButton>

        {status == 'PENDING' &&
          <ApproveButton >
            <Image source={require('../../assets/imgs/acceptIcon.png')} style={{width:20, height:25}}/>
          </ApproveButton>
        }
      <HairdImage>
        <ProfileImage style={{justifyContent:'center'}} >
          <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:70, height:80}}/>
        </ProfileImage>
      </HairdImage>

      <HairdName style={{backgroundColor:lineOfColorCard}}>
        <Text size={12} font={'Poppins'} weight={'Bold'} color={'black'}>Antônio Jairo Alves</Text>
      </HairdName>

      {
        status == 'PENDING'?

          <Info>
            <InfosText style={{flexDirection:'column', alignItems:'center'}}>
              <Text size={11} font={'Poppins'} weight={'Bold'} color={'white'}>Esperando confirmação </Text>
              <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>12:00</Text>
            </InfosText>
          </Info>
          :
        status == 'CONFIRMED' ?

        <Info>
          <InfosText style={{flexDirection:'column', alignItems:'center'}}>
            <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Horário confirmado: </Text>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>12:00</Text>
          </InfosText>
        </Info>

        :
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
      }

    </Container>
  );
}


  //  background-color: rgba(0, 0, 0 ,0.4);
  //  background-color: rgba(246, 195, 62 ,0.3);
  //  background-color: rgba(63, 193, 0 ,0.3);
  //  background-color: #F6C33E ;3FC500
