import { useState } from "react";
import { Image, ImageBackground } from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from "../../components/Button";
import { Text } from "../../utils/Text";
import { ProfileAndHour, InfoUserForms, Prices, WorkingDays, ProfileImage, WorkingHours, PickHour, HourInput, MinuteInput, Schedules, OpeningHour,ClosingdHour} from "./style";


export default function HairdConfig(){
  const [date, setDate] = useState(new Date());
  const [isClocVisible, setIsClockVisible] = useState(false);

  const openDatePicker = () => {
    setIsClockVisible(!isClocVisible);

  };

  function setSched (date:any){
    setIsClockVisible(!isClocVisible);
    setDate(date)
  }


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
                isVisible={isClocVisible}
                onConfirm={(date)=>setSched(date)}
                onCancel={()=>setIsClockVisible(!isClocVisible)}
              />

              <OpeningHour>
                <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Abre</Text>
                <PickHour onPress={openDatePicker}>
                  <HourInput>
                    <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getHours().toLocaleString().padStart(2, '0')}</Text>
                  </HourInput>
                  <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
                  <MinuteInput>
                    <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getMinutes().toLocaleString().padStart(2, '0')}</Text>
                  </MinuteInput>
                </PickHour>
              </OpeningHour>

              <ClosingdHour>
                <Text size={14} font={'Poppins'} weight={'Bold'} color={'#F6C33E'}style={{textAlign:'center'}} >Fecha</Text>
                <PickHour onPress={openDatePicker}>
                  <HourInput>
                    <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getHours().toLocaleString().padStart(2, '0')}</Text>
                  </HourInput>
                  <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
                  <MinuteInput>
                    <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getMinutes().toLocaleString().padStart(2, '0')}</Text>
                  </MinuteInput>
                </PickHour>
              </ClosingdHour>
            </Schedules>
          </WorkingHours>

      </ProfileAndHour>
      <InfoUserForms>

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
