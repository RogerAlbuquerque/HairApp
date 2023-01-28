import { useState } from "react";
import { Image, ImageBackground } from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { Text } from "../../utils/Text";
import { ProfileAndHour, InfoUserForms, Prices, WorkingDays, ProfileImage, WorkingHours, PickHour, HourInput, MinuteInput, Schedules, OpeningHour,ClosingdHour} from "./style";


export default function HairdConfig(){
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [isOpenClocVisible, setIsOpenClockVisible] = useState(false);
  const [isCloseClocVisible, setIsCloseClockVisible] = useState(false);

  const showOpeningClockDatePicker = () => {
    setIsOpenClockVisible(!isOpenClocVisible);

  };
  function setOpeningHourSaloon (date:any){
    setIsOpenClockVisible(!isOpenClocVisible);
    setOpeningTime(date)
  }

  function setClosingHourSaloon (date:any){
    setIsCloseClockVisible(!isCloseClocVisible);
    setClosingTime(date)
  }
  const showClosingClockDatePicker = () => {
    setIsCloseClockVisible(!isCloseClocVisible);

  };






  return(
    <ImageBackground source={require('../../assets/imgs/bkg.jpg')}
    style={{flex: 1, paddingHorizontal:20, paddingVertical:20}} resizeMode="cover">

      <ProfileAndHour>

          <ProfileImage>
            <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
          </ProfileImage>

          <WorkingHours>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center', paddingLeft:15}}>Horários do salão</Text>
            <Schedules >
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
        <InputText
        />
      </InfoUserForms>

      <Prices>

      </Prices>

      <WorkingDays>

      </WorkingDays>

      <Button
        name="Salvar"
        size={22}
      />


    </ImageBackground>
  );
}
