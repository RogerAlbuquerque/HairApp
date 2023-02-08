import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../../../utils/routeProps';
import { Image, ImageBackground} from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from "../../../../components/UtilsComponents/Button";
import DaysOfWorking from "../../../../components/HairdComponents/DaysOfworking";
import InputText from "../../../../components/UtilsComponents/InputText";
import { Text } from "../../../../utils/Text";
import {
  ProfileAndHour,
  InfoUserForms,
  Prices,
  WorkingDays,
  ProfileImage,
  WorkingHours,
  PickHour,
  HourInput,
  MinuteInput,
  Schedules,
  OpeningHour,
  ClosingdHour,
  HairCutInfo,
  BeardInfo,
  HairPrice,
  BeardPrice,
  InputPrice,
  Container
} from "./style";

export default function HairdRegister(){

  const {navigate} = useNavigation<propsStack>();


  const [isOpenClocVisible, setIsOpenClockVisible] = useState(false);
  const [isCloseClocVisible, setIsCloseClockVisible] = useState(false);
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [hairdName, setHairdName] = useState('');
  const [saloonAddress, setSaloonAddress] = useState('');
  const [hairdEmail, setHairdEmail] = useState('');
  const [hairdPassword, setHairdPassword] = useState('');
  const [hairdConfirmPassword, setHairdConfirmPassword] = useState('');
  const [hairPrice, setHairPrice] = useState('');
  const [beardPrice, setBeirdPrice] = useState('');
  const [schedDay, setSchedDay] = useState({
    SEG:false,
    TER:false,
    QUA:false,
    QUI:false,
    SEX:false,
    SAB:false,
    DOM:false,
  })




  function showOpeningClockDatePicker(){
    setIsOpenClockVisible(!isOpenClocVisible);
  };
  function showClosingClockDatePicker(){
    setIsCloseClockVisible(!isCloseClocVisible);
  };

  function setOpeningHourSaloon (date:any){
    setIsOpenClockVisible(!isOpenClocVisible);
    setOpeningTime(date)
  }
  function setClosingHourSaloon (date:any){
    setIsCloseClockVisible(!isCloseClocVisible);
    setClosingTime(date)
  }

  function registerHairdresser(){
    console.log('Horarios: ',
      openingTime.getHours().toLocaleString(), ':', openingTime.getMinutes().toLocaleString().padStart(2, '0'),
      ' -> ',
      closingTime.getHours().toLocaleString(), ':', closingTime.getMinutes().toLocaleString().padStart(2, '0')
    )
    console.log('Nome do cabeleireiro: ', hairdName)
    console.log('Endereço do salão: ', saloonAddress)
    console.log('Email: ', hairdEmail)
    console.log('Senha: ', hairdPassword)
    console.log('Confirmar senha: ', hairdConfirmPassword)
    console.log('Valor do corte: ', hairPrice)

  }



  return(
    <ImageBackground source={require('../../../../assets/imgs/bkg.jpg')}
    style={{flex: 1, paddingHorizontal:20, paddingVertical:20}} resizeMode="cover">
      <Container>
        <ProfileAndHour>

            <ProfileImage>
              <Image source={require('../../../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
            </ProfileImage>

            <WorkingHours>

              <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center', paddingLeft:15}}>
                Horários do salão
              </Text>

              <Schedules>

                <DateTimePicker
                  mode="time"
                  isVisible={isOpenClocVisible}
                  onConfirm={(date)=>setOpeningHourSaloon(date)}
                  onCancel={()=>setIsOpenClockVisible(!isOpenClocVisible)}
                />

                <DateTimePicker
                  mode="time"
                  isVisible={isCloseClocVisible}
                  onConfirm={(date)=>setClosingHourSaloon(date)}
                  onCancel={()=>setIsCloseClockVisible(!isCloseClocVisible)}
                />

                <OpeningHour>
                  <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Abre</Text>
                  <PickHour onPress={showOpeningClockDatePicker}>
                    <HourInput>
                      <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{openingTime.getHours().toLocaleString().padStart(2, '0')}</Text>
                    </HourInput>
                    <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
                    <MinuteInput>
                      <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{openingTime.getMinutes().toLocaleString().padStart(2, '0')}</Text>
                    </MinuteInput>
                  </PickHour>
                </OpeningHour>

                <ClosingdHour>

                  <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'}style={{textAlign:'center'}} >Fecha</Text>

                  <PickHour onPress={showClosingClockDatePicker}>
                    <HourInput>
                      <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{closingTime.getHours().toLocaleString().padStart(2, '0')}</Text>
                    </HourInput>
                    <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
                    <MinuteInput>
                      <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{closingTime.getMinutes().toLocaleString().padStart(2, '0')}</Text>
                    </MinuteInput>
                  </PickHour>

                </ClosingdHour>

              </Schedules>
            </WorkingHours>
        </ProfileAndHour>


        <InfoUserForms>

          <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>
            Nome do cabeleireiro ou salão
          </Text>
          <InputText
            font="Poppins-Bold"
            onChange={(value)=>setHairdName(value)}
          />

          <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>
            Endereço do salão
          </Text>
          <InputText
            font="Poppins-Bold"
            onChange={(value)=>setSaloonAddress(value)}
          />

          <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>
            Email
          </Text>
          <InputText
            font="Poppins-Bold"
            onChange={(value)=>setHairdEmail(value)}
          />

          <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>
            Senha
          </Text>
          <InputText
            font="Poppins-Bold"
            isPassword={true}
            onChange={(value)=>setHairdPassword(value)}
          />

          <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>
            Confirmar senha
          </Text>
          <InputText
            font="Poppins-Bold"
            isPassword={true}
            onChange={(value)=>setHairdConfirmPassword(value)}
          />

        </InfoUserForms>

        <Prices>
          <HairCutInfo>
            <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>Valor do corte: </Text>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>R$</Text>
            <HairPrice>
              <InputPrice
                keyboardType="numeric"
                placeholder="20"
                onChangeText={(value)=>setHairPrice(value)}

              />
            </HairPrice>
          </HairCutInfo>

          <BeardInfo>
            <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>Valor da barba: </Text>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>R$</Text>
            <BeardPrice>
              <InputPrice
                keyboardType="numeric"
                placeholder="20"
                style={{marginLeft:2}}
                onChangeText={(value)=>setBeirdPrice(value)}
              />
            </BeardPrice>
          </BeardInfo>
        </Prices>

        <WorkingDays>
          <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} >Dias que o salão funciona:</Text>
          <DaysOfWorking
            schedDay={schedDay}
            setSchedDay={()=>setSchedDay({...schedDay})}
          />
        </WorkingDays>

        <Button
          name="Avançar"
          size={40}
          letterCollor={'#F6C33E'}
          // onPress={()=>navigation.navigate('CreditCardRegister')}
          onPress={registerHairdresser}
        />
      </Container>

    </ImageBackground>
  );
}
