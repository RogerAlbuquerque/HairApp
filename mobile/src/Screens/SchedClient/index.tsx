import DateTimePicker from 'react-native-modal-datetime-picker';
import { useState } from 'react';
import { Image, ImageBackground } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HeaderComponent from "../../components/UtilsComponents/HeaderComponent";
import { Text } from "../../utils/Text";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';

import { TypeHairdToSched } from '../../types/TypeHairdToSched';
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

interface recoverProps{
  route:{
    params:TypeHairdToSched
  }
}
export default function SchedClient({route}:recoverProps){

  const navigation = useNavigation<propsStack>();
  const hairdData = route.params;
  const [date, setDate] = useState(new Date());
  const [isClocVisible, setIsClockVisible] = useState(false);

  const [schedDay, setSchedDay] = useState('')


    function teste(dia:string){
      // setWorkingDays();
    }

  // MANIPULATE DATAPICKER
  const openDatePicker = () => {
    setIsClockVisible(!isClocVisible);

  };

  function setSched (date:any){
    setIsClockVisible(!isClocVisible);
    setDate(date)
  }
  // MANIPULATE DATAPICKER
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

        <ButtonToSched style={{justifyContent:schedDay != '' ? 'space-between' : 'center' }}>
          <Button
            name='Marcar horário'
            backColor="#5A5A5A"
            size={22}
            width={150}
            height={90}
          />
          {schedDay != '' &&
             <Button
             name='Cancelar horário'
             backColor="#C10000"
             size={22}
             width={150}
             height={90}
           />
          }
        </ButtonToSched>

      </Container>

    </ImageBackground>
  );

}
