import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { TypeHairdToSched } from "../../../types/TypeHairdToSched";
import { propsStack } from "../../../utils/routeProps";
import { Text } from "../../../utils/Text";
import { Container, HairdImage, HairdName, Info, ProfileImage,CloseButton,InfosText } from "./style";


export default function HairdCard(props:TypeHairdToSched){
  const {navigate} = useNavigation<propsStack>();
  const [colorCard, setColorCard] = useState ('');
  const [lineOfColorCard, setLineOfColorCard] = useState ('');

useEffect(()=>{
  if(props.status == 'CONFIRMED'){
    setColorCard ('background-color: rgba(63, 193, 0 ,0.3)')
    setLineOfColorCard('#3FC500');
  }else if(props.status == 'PENDING'){
    setColorCard ('background-color: rgba(246, 195, 62 ,0.3)') ;
    setLineOfColorCard('#F6C33E')
  }else{
    setColorCard ('background-color:  rgba(0, 0, 0 ,0.4)') ;
    setLineOfColorCard('white')
  }
},[props.status])



  return(
    <Container style={{backgroundColor:colorCard}} onPress={()=>navigate('SchedClient', props)}>
       <CloseButton >
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
        </CloseButton>
      <HairdImage>
        <ProfileImage style={{justifyContent:'center'}} >
          <Image source={require('../../../assets/imgs/defaultImage.png')} style={{width:70, height:80}}/>
        </ProfileImage>
      </HairdImage>

      <HairdName style={{backgroundColor:lineOfColorCard}}>
        <Text size={12} font={'Poppins'} weight={'Bold'} color={'black'}>{props.hairdName}</Text>
      </HairdName>

      {
        props.status == 'PENDING'?

          <Info>
            <InfosText style={{flexDirection:'column', alignItems:'center'}}>
              <Text size={11} font={'Poppins'} weight={'Bold'} color={'white'}>Esperando confirmação </Text>
              <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>{props.workingTimeOpen.hour}</Text>
            </InfosText>
          </Info>
          :
        props.status == 'CONFIRMED' ?

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
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>
                {props.workingTimeOpen.hour}:{props.workingTimeOpen.minute} as {props.workingTimeClose.hour}:{props.workingTimeClose.minute}
              </Text>
            </InfosText>

            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Cabelo: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>R${props.hairPrice}</Text>
            </InfosText>

            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Barba: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>  R${props.beardPrice}</Text>
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
