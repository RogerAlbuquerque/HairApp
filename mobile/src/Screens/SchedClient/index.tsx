import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Image, ImageBackground } from "react-native";
import Button from "../../components/Button";
import HeaderComponent from "../../components/HeaderComponent";
import { Text } from "../../utils/Text";
import { Header, HairdInfo, ProfileImage, HairdData, DaysWeek, ButtonToSched, Schedules, Day, Container } from "./style";




export default function SchedClient(){
  const [date, setDate] = useState(new Date(1598051730000));
  const [isClocVisible, setIsClockVisible] = useState(false);

  const openDatePicker = () => {
    setIsClockVisible(!isClocVisible);
};

  const setSched = (date:any) => {

    setIsClockVisible(!isClocVisible);
    setDate(date)
  }
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

      <Container>
        <Header>
          <HeaderComponent />
        </Header>

        <HairdInfo>
          <ProfileImage>
            <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
          </ProfileImage>

          <HairdData>
            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Nome:</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Washington Ferreira</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Endereço: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Rua Dorgival pinheiro de sousa - nº 2240</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Preços: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>R$ 25,00 Cabelo</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>R$ 20,00 Barba</Text>
          </HairdData>
        </HairdInfo>

        <DaysWeek>
          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>

        <Schedules >

        {isClocVisible && (
            <DateTimePicker
              value={date}
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={(e, date:any) => setSched}

            />
          )}

          <Button
            name='MOSTRAR'
            backColor="#5A5A5A"
            size={22}
            width={150}
            height={90}
            onPress={openDatePicker}
          />

        </Schedules>

        <ButtonToSched>
          <Button
            name='Marcar Horário'
            backColor="#5A5A5A"
            size={22}
            width={150}
            height={90}
          />
        </ButtonToSched>

      </Container>

    </ImageBackground>
  );

}
