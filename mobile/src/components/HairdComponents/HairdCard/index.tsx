import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { UserInfoContext } from "../../../context";
import { TypeHairdToSched } from "../../../types/activeTypes/TypeHairdToSched";
import { api } from "../../../utils/api";
import { propsStack } from "../../../utils/routeProps";
import { Text } from "../../../utils/Text";
import { Container, HairdImage, HairdName, Info, ProfileImage,CloseButton,InfosText, AcceptButton } from "./style";


export default function HairdCard(props:TypeHairdToSched){
  const [isAwaitingRemoveHairdReponse,setIsAwaitingRemoveHairdReponse]=useState(false);
  const [isAwaitingAcceptReponse,setIsAwaitingAcceptReponse]=useState(false);
  const {navigate} = useNavigation<propsStack>();
  const [colorCard, setColorCard] = useState ('');
  const [lineOfColorCard, setLineOfColorCard] = useState ('');
  const {hairdInfo,tokenIsValid,clientInfo,handleAlertModal,handleClientInfoState,handleMySchedList} = useContext(UserInfoContext);

useEffect(()=>{
  if(props.status == 'CONFIRMED'){
    setColorCard ('background-color: rgba(63, 193, 0 ,0.3)')
    setLineOfColorCard('#3FC500');
  }else if(props.status == 'PENDING'){
    setColorCard ('background-color: rgba(246, 195, 62 ,0.3)') ;
    setLineOfColorCard('#F6C33E')
  }else if(props.status == 'CANCELED'){
    setColorCard ('background-color: rgba(246, 0, 0 ,0.3)') ;
    setLineOfColorCard('red')
  }else{
    setColorCard ('background-color:  rgba(0, 0, 0 ,0.4)') ;
    setLineOfColorCard('white')
  }
},[props.status])

async function removeHairdOfMyList(){
  try{
    setIsAwaitingRemoveHairdReponse(true)
    await api.put('/client/removeHairdresser',{hairdName:props.userName});
    const clientUpdated = await api.get('/me')
    handleClientInfoState(clientUpdated.data)
    handleAlertModal('Cabeleireiro removido com sucesso da sua lista','','success')
  }
  catch(error){
    console.log(error)
    return handleAlertModal('Erro ao remover cabeleireiro','','error')
  }
  finally{
    setIsAwaitingRemoveHairdReponse(false);
  }
}

async function removeClientOfSched(){
  try{
    setIsAwaitingRemoveHairdReponse(true)
    await api.put(`/scheduling/update/${props.userId}/${hairdInfo._id}`, {status: 'CANCELED'})
    await api.get('/scheduling/me').then((response)=>{handleMySchedList(response.data);})
    handleAlertModal('Cliente Cancelado','','success')
  }
  catch(error){
    console.log(error)
    return handleAlertModal('Erro ao Cancelar cliente','Pode ser erro do servidor, tente novamente em alguns segundos','error')
  }
  finally{
    setIsAwaitingRemoveHairdReponse(false);
  }
}


async function confirmSchedClient(){
  try{
    setIsAwaitingAcceptReponse(true)
    await api.put(`/scheduling/update/${props.userId}/${hairdInfo._id}`, {status: 'CONFIRMED'})
    await api.get('/scheduling/me').then((response)=>{handleMySchedList(response.data);})
    handleAlertModal('Horário confirmado','','success')
  }
  catch(error){
    console.log(error)
    return handleAlertModal('Erro ao confirmar cliente','Pode ser erro do servidor, tente novamente em alguns segundos','error')
  }
  finally{
    setIsAwaitingAcceptReponse(false);
  }
}



  return(
    <Container style={{backgroundColor:colorCard}} onPress={()=>!hairdInfo.hairdName && navigate('SchedClient', props)}>
       <CloseButton onPress={!hairdInfo.hairdName ? removeHairdOfMyList : removeClientOfSched }>
          {!isAwaitingRemoveHairdReponse ?
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
            :
            <ActivityIndicator color="#fff" size="large"/>
          }
        </CloseButton>
        { hairdInfo.hairdName && tokenIsValid && props.status != 'CONFIRMED' &&
          <AcceptButton onPress={confirmSchedClient}>
          {!isAwaitingAcceptReponse ?
              <Image source={require('../../../assets/imgs/acceptIcon.png')} style={{width:15, height:20}}/>
            :
            <ActivityIndicator color="#fff" size="large"/>
          }
        </AcceptButton>
        }
      <HairdImage>
        <ProfileImage style={{justifyContent:'center'}} >
          <Image source={require('../../../assets/imgs/defaultImage.png')} style={{width:70, height:80}}/>
        </ProfileImage>
      </HairdImage>

      <HairdName style={{backgroundColor:lineOfColorCard}}>
        <Text size={12} font={'Poppins'} weight={'Bold'} color={'black'}>{props.userName}</Text>
      </HairdName>

      {props.clientHour && props.status == 'PENDING'?

          <Info>
            <InfosText style={{flexDirection:'column', alignItems:'center'}}>
              <Text size={11} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>Aguarde a confirmação do cabeleireiro</Text>
              <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>{props.clientHour.hour}:{props.clientHour.minute}</Text>
            </InfosText>
          </Info>
          :
          props.clientHour && props.status == 'CONFIRMED' ?

        <Info>
          <InfosText style={{flexDirection:'column', alignItems:'center'}}>
            <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Horário confirmado: </Text>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>{props.clientHour.hour}:{props.clientHour.minute}</Text>
          </InfosText>
        </Info>

        :
        props.clientHour && props.status == 'CANCELED' ?
        <Info>
            <InfosText style={{flexDirection:'column', alignItems:'center'}} >
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>HORÁRIO CANCELADO</Text>
              <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>{props.clientHour.hour}:{props.clientHour.minute}</Text>
            </InfosText>
          </Info>

          :
          <Info>
            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Aberto: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>
                {props.workingTimeOpen?.hour}:{props.workingTimeOpen?.minute} as {props.workingTimeClose?.hour}:{props.workingTimeClose?.minute}
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
