import DateTimePicker from 'react-native-modal-datetime-picker';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HeaderComponent from "../../components/UtilsComponents/HeaderComponent";
import { Text } from "../../utils/Text";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';

import { TypeHairdToSched } from '../../types/activeTypes/TypeHairdToSched';
import {
  Header,
  HairdInfo,
  ProfileImage,
  HairdData,
  DaySelect,
  ButtonToSched,
  Schedules,
  Container,
  PickHour,
  HourInput,
  MinuteInput
} from "./style";
import DaysOfWeek from '../../components/ClientComponents/DaysOfWeek';
import { api } from '../../utils/api';
import { UserInfoContext } from '../../context';

interface recoverProps{
  route:{
    params:TypeHairdToSched
  }
}
interface schedClientInfoToUpdate {
  _id: string;
  day?: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
  clientHour?:{
    hour?:number,
    minute?:number
  };
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
}
export default function SchedClient({route}:recoverProps){

  useEffect(()=>{
    if(hairdData.clientHour)
    {
    date.setHours(hairdData.clientHour.hour).toLocaleString().padStart(2, '0')
    date.setMinutes(hairdData.clientHour.minute).toLocaleString().padStart(2, '0')
    }
  },[])

  const navigation = useNavigation<propsStack>();
  const hairdData = route.params;
  const {clientInfo,handleAlertModal} = useContext(UserInfoContext);
  const [isAwaitingCreatingSched,setIsAwaitingCreatingSched]=useState(false);
  const [isAwaitingUpdantingSched,setIsAwaitingUpdantingSched]=useState(false);
  const [isAwaitingDeleteSched,setIsAwaitingDeleteSched]=useState(false);
  const [date, setDate] = useState(new Date());
  const [isClocVisible, setIsClockVisible] = useState(false);
  const [schedDay, setSchedDay] = useState( hairdData.schedDay)
  const [dateTimePickerIsEqualSchedDate, setDateTimePickerIsEqualSchedDate] = useState(false);


  // MANIPULATE DATAPICKER
  const openDatePicker = () => {
    setIsClockVisible(!isClocVisible);

  };

  function setSched (date:any){
    setIsClockVisible(!isClocVisible);
    setDate(date)
  }
  // MANIPULATE DATAPICKER

  async function schedTime(){
    if(schedDay){
      return handleAlertModal('Você precisa selecionar o dia da semana e horário','','error')
    }
    try{
      setIsAwaitingCreatingSched(true)
      await api.post('/scheduling', {
        hairdresserId: route.params.hairdId,
        clientId: clientInfo._id,
        day: schedDay,
        clientHour:{
          hour:parseInt(date.getHours().toLocaleString().padStart(2, '0')),
          minute:parseInt(date.getMinutes().toLocaleString().padStart(2, '0'))
        }
      })
      return handleAlertModal('Horário agendado com sucesso','Aguarda a confirmação do cabeleireiro, quando ele confirmar, o seu card ficará verde','success')
    }catch(error){
      console.log(error)
      return handleAlertModal('Você ja está agendado','Você ja agendou horário, não pode agendar mais de uma vez','error')
    }finally{
      setIsAwaitingCreatingSched(false)
    }
  }

  async function editSched(){
    try{
      setIsAwaitingUpdantingSched(true)
      api.put('/scheduling/update',{
        _id: clientInfo._id,
        day: schedDay,
        clientHour:{
          hour:date.getHours().toLocaleString().padStart(2, '0'),
          minute:date.getMinutes().toLocaleString().padStart(2, '0')
        },
      }
      )
    }catch(error){
      console.log(error);
    }
    finally{
      setIsAwaitingUpdantingSched(false)
    }
  }

  async function deleteSched(){
    try{
      setIsAwaitingDeleteSched(true)
      api.delete(`/scheduling/${hairdData.hairdId}/delete`)
      return handleAlertModal('Horário desmarcado com sucesso','Você ja pode agendar horário com outro cabeleireiro, ou com o mesmo se quiser','success')

    }catch(error){
      console.log(error);
      return handleAlertModal('Erro interno do servidor, ou talvez o cabeleireiro não tenha mais uma conta','Tente novamente!','error');
    }
    finally{
      setIsAwaitingDeleteSched(false)
    }
  }

  useEffect(()=>{

    if(hairdData.clientHour){
      if(
        (hairdData.schedDay != schedDay)
         ||
        (hairdData.clientHour.hour !=  parseInt(date.getHours().toLocaleString().padStart(2, '0')))
         ||
        (hairdData.clientHour.minute !=parseInt(date.getMinutes().toLocaleString().padStart(2, '0')))
      )
    {
      setDateTimePickerIsEqualSchedDate(false)
    }
    else {
      setDateTimePickerIsEqualSchedDate(true)}}
      console.log('PRIMEIRO USEEFFECT')

  })


  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

      <Container>
        <Header>
          <HeaderComponent
             onPressFunctionNavigate={ ()=>navigation.navigate('ClientConfig')}
          />
        </Header>

        <HairdInfo>
          <ProfileImage>
            <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
          </ProfileImage>

          <HairdData>
            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Nome:</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>{hairdData.hairdName}</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Endereço: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>{hairdData.address}</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Preços: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Cabelo: R${hairdData.hairPrice}</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Barba:   R${hairdData.beardPrice}</Text>
          </HairdData>
        </HairdInfo>

        <DaySelect>
          <DaysOfWeek
            schedDay={schedDay}
            setSchedDay={setSchedDay}
          />
        </DaySelect>

        <Schedules >
            <DateTimePicker
              mode="time"
              isVisible={isClocVisible}
              onConfirm={(date)=>setSched(date)}
              onCancel={()=>setIsClockVisible(!isClocVisible)}
            />
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'white'}>Marcar horários disponiveis</Text>
          <PickHour onPress={openDatePicker}>
            <HourInput>
               <Text size={30} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getHours().toLocaleString().padStart(2, '0')}</Text>
            </HourInput>
            <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
            <MinuteInput>
               <Text size={30} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getMinutes().toLocaleString().padStart(2, '0')}</Text>
            </MinuteInput>
          </PickHour>
        </Schedules>


          {hairdData.schedDay != '' && hairdData.clientHour
            ?
            <ButtonToSched style={{justifyContent: !dateTimePickerIsEqualSchedDate ? 'space-between' : 'center'}}>
              {!dateTimePickerIsEqualSchedDate &&
              <>
                {!isAwaitingUpdantingSched ?
                  <Button
                    name='Mudar horário'
                    backColor="#5A5A5A"
                    size={22}
                    width={150}
                    height={90}
                    onPress={editSched}
                  />
                :
                  <ActivityIndicator color="#fff" size="large"/>
                }
              </>
              }
              {!isAwaitingDeleteSched ?
                <Button
                name='Cancelar horário'
                backColor="#C10000"
                size={22}
                width={150}
                height={90}
                onPress={deleteSched}
              />
              :
              <ActivityIndicator color="#fff" size="large"/>
            }
            </ButtonToSched>
          :
            <ButtonToSched style={{justifyContent:'center' }}>
               {!isAwaitingCreatingSched ?
               <Button
                name='Marcar horário'
                backColor="#5A5A5A"
                size={22}
                width={150}
                height={90}
                onPress={schedTime}
              />
              :
              <ActivityIndicator color="#fff" size="large"/>
            }
            </ButtonToSched>
        }
      </Container>
    </ImageBackground>
  );


}
