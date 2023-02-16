import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground } from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from "../../components/UtilsComponents/Button";
import DaysOfWorking from "../../components/HairdComponents/DaysOfworking";
import InputText from "../../components/UtilsComponents/InputText";
import { Text } from "../../utils/Text";
import { UserInfoContext } from "../../context";
import {
  Container,
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
  InputPrice}
from "./style";
import { api } from "../../utils/api";



export default function HairdConfig(){

  const {hairdInfo,handleAlertModal, handleHairdInfoState}=useContext(UserInfoContext);
  const [isAwaitingUpdateReponse,setIsAwaitingUpdateReponse]=useState(false);
  const [isOpenClocVisible, setIsOpenClockVisible] = useState(true);
  const [isCloseClocVisible, setIsCloseClockVisible] = useState(true);
  const [workDaysWeek, setWorkDaysWeek] = useState(hairdInfo.workDaysWeek)

  const [hairdName, setHairdName] = useState(hairdInfo.hairdName);
  const [address, setAddress] = useState(hairdInfo.address);
  const [email, setEmail] = useState(hairdInfo.email);
  const [password, setPassword] = useState('');
  const [hairPrice, setHaiPrice] = useState(hairdInfo.prices.hairPrice);
  const [BeardPriceState, setBeardPriceState] = useState(hairdInfo.prices.beardPrice);

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());


  function handleSchedDay(day:'SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM'){
    setWorkDaysWeek({...workDaysWeek, [day]:!workDaysWeek[day]})
  }
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

async function updateInfo(password:string){
  const newPassword = password != '' ? password :hairdInfo.hairdPassword
  if(hairdName == '' || email == '' || address == '' || hairPrice == '' || BeardPriceState == ''){
    return handleAlertModal('Todos os campos são obrigatórios','Não pode deixar nenhum campo em branco','error')
  }
  try{
    setIsAwaitingUpdateReponse(true)
    await api.put('/hairdresser/updateInfo',{
    hairdName:hairdName ,
    hairdPassword:newPassword,
    email:email,
    address:address,
    prices:{
      hairPrice:hairPrice,
      beardPrice:BeardPriceState
    },
    workDaysWeek:workDaysWeek,
    workingTime:{
      open:{
        hour:openingTime.getHours().toLocaleString().padStart(2, '0'),
        minute:openingTime.getMinutes().toLocaleString().padStart(2, '0')
      },
      close:{
        hour:closingTime.getHours().toLocaleString().padStart(2, '0'),
        minute:closingTime.getMinutes().toLocaleString().padStart(2, '0')
      }
    }
  })
  const userInfoResponse = await api.get('/me');
  handleHairdInfoState(userInfoResponse.data);
  return handleAlertModal('Dados atualizados cm sucesso','','success')

  }
  catch(error){
    console.log(error)
    return handleAlertModal('Erro','Tente novamento em alguns segundos','error')

  }finally{
    setIsAwaitingUpdateReponse(false)
  }

}

useEffect(()=>{
  setIsOpenClockVisible(false)
  setIsCloseClockVisible(false)
  openingTime.setHours(hairdInfo.workingTime.open.hour).toLocaleString().padStart(2, '0')
  openingTime.setMinutes(hairdInfo.workingTime.open.minute).toLocaleString().padStart(2, '0')
  closingTime.setHours(hairdInfo.workingTime.close.hour).toLocaleString().padStart(2, '0')
  closingTime.setMinutes(hairdInfo.workingTime.close.minute).toLocaleString().padStart(2, '0')
},[])
  return(
    <ImageBackground source={require('../../assets/imgs/bkg.jpg')}
    style={{flex: 1, paddingHorizontal:20, paddingVertical:20}} resizeMode="cover">

    <Container>
      <ProfileAndHour>

        <ProfileImage>
          <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
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
                  <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>
                    {openingTime.getHours().toLocaleString().padStart(2, '0')}</Text>
                </HourInput>
                <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
                <MinuteInput>
                  <Text size={20} font={'Poppins'} weight={'Bold'} color={'black'}>
                    {openingTime.getMinutes().toLocaleString().padStart(2, '0')}</Text>
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

        <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Nome do cabeleireiro ou salão</Text>
        <InputText font="Poppins-Bold"
        value={hairdName} onChange={value => setHairdName(value)}/>

        <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Endereço do salão</Text>
        <InputText font="Poppins-Bold" value={address} onChange={value => setAddress(value)}/>

        <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Email</Text>
        <InputText font="Poppins-Bold" value={email} onChange={value => setEmail(value)}/>

        <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Alterar senha</Text>
        <InputText font="Poppins-Bold" isPassword={true} onChange={value => setPassword(value)}/>

      </InfoUserForms>

      <Prices>
        <HairCutInfo>
          <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>Valor do corte: </Text>
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>R$</Text>
          <HairPrice>
            <InputPrice
              keyboardType="numeric"
              value={hairPrice.toString()}
              onChangeText={value => setHaiPrice(value)}
            />
          </HairPrice>
        </HairCutInfo>

        <BeardInfo>
          <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>Valor da barba: </Text>
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>R$</Text>
          <BeardPrice>
            <InputPrice
              keyboardType="numeric"
              value={BeardPriceState.toString()}
              onChangeText={value => setBeardPriceState(value)}
              style={{marginLeft:2}}
            />
          </BeardPrice>
        </BeardInfo>
      </Prices>

      <WorkingDays>
        <Text size={15} font={'Poppins'} weight={'Bold'} color={'white'} >Dias que o salão funciona:</Text>
        <DaysOfWorking
          workDaysWeek={workDaysWeek}
          setWorkDaysWeek={handleSchedDay}
        />
      </WorkingDays>

      { !isAwaitingUpdateReponse ?
        <Button
        name="Atualizar"
        size={40}
        letterCollor={'#F6C33E'}
        onPress={() => updateInfo(password)}
      />
      :
      <ActivityIndicator color="#fff" size="large"/>
     }
    </Container>

    </ImageBackground>
  );
}
