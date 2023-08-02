import { useContext, useState } from "react";
import { UserInfoContext } from '../../../../context';
import { useNavigation } from "@react-navigation/native";
import emailValidator from "email-validator";
import { propsStack } from '../../../../utils/routeProps';
import { ActivityIndicator, Image, ImageBackground} from "react-native"
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
import { api } from "../../../../utils/api";

export default function HairdRegister(){

  const {navigate} = useNavigation<propsStack>();

  const {handleAlertModal}=useContext(UserInfoContext);
  const [isAwaitingRegisterReponse,setIsAwaitingRegisterReponse]=useState(false);
  const [isOpenClocVisible, setIsOpenClockVisible] = useState(false);
  const [isCloseClocVisible, setIsCloseClockVisible] = useState(false);
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [hairdName, setHairdName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setHairdEmail] = useState('');
  const [hairdPassword, setHairdPassword] = useState('');
  const [hairdConfirmPassword, setHairdConfirmPassword] = useState('');
  const [hairPrice, setHairPrice] = useState<number>();
  const [beardPrice, setBeirdPrice] = useState<number>();
  const [workDaysWeek, setWorkDaysWeek] = useState({
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
    console.log("1111111111111111111111")
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

  function handleSchedDay(day:'SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM'){
    setWorkDaysWeek({...workDaysWeek, [day]:!workDaysWeek[day]})
  }

  function registerHairdresser(){
   if(  hairdName == '' || address == '' || email == '' || hairdPassword == '' || hairdConfirmPassword == '' || hairPrice == undefined || beardPrice == undefined){
    return handleAlertModal('Alguns campos estão vazios', 'Todos os campos são obrigatórios!', 'error')
   }
   if(!emailValidator.validate(email)){
    return handleAlertModal('Email Inválido', 'Este não é o formato correto de um email', 'error')
   }
   if(hairdPassword.length < 8){
    return handleAlertModal('Senha muito fraca', 'Senha precisa ter no mínimo 8 digitos', 'error')
   }
   if(hairdPassword != hairdConfirmPassword){
    return handleAlertModal('Senhas não são iguais', 'Os campos de senhas precisam ser exatamente iguais!', 'error')
   }
   if(workDaysWeek.SEG == false && workDaysWeek.TER == false && workDaysWeek.QUA == false &&
    workDaysWeek.QUI == false && workDaysWeek.SEX == false && workDaysWeek.SAB == false && workDaysWeek.DOM == false
    ){
      return handleAlertModal('Nenhum dia de trabalho selecionado', 'É preciso selecionar pelo menos um dia de trabalho!', 'error')
    }

    try{
      setIsAwaitingRegisterReponse(true)
      api.post('/hairdresser/create', {
        hairdName,
        address,
        email,
        hairdPassword,
        prices:{
          hairPrice,
          beardPrice,
        },
        workDaysWeek,
        workingTime: {
          open:{
            hour: openingTime.getHours().toLocaleString(),
            minute: openingTime.getMinutes().toLocaleString().padStart(2, '0')
          },
          close: {
            hour: closingTime.getHours().toLocaleString(),
            minute: closingTime.getMinutes().toLocaleString().padStart(2, '0')
          }
        }
      })
     return handleAlertModal('Usuário criado com sucesso', 'Volte para a tela inicial e acesse sua conta', 'success')
    }catch(error){
      return handleAlertModal('Email ou Usuário ja existem', 'Tente mudar algumas dessa informações', 'error')
    }finally{
      setIsAwaitingRegisterReponse(false)
    }

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
                  minuteInterval={15}


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
            onChange={(value)=>setAddress(value)}
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
                onChangeText={(value)=>{
                  let price = parseInt(value)
                  setHairPrice(price)
                }}

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
                onChangeText={(value)=>{
                  let price = parseInt(value)
                  setBeirdPrice(price)
                }}
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

       {isAwaitingRegisterReponse ? <ActivityIndicator color="#fff" size="large"/>
        :
        <Button
          name="Avançar"
          size={40}
          letterCollor={'#F6C33E'}
          // onPress={()=>navigation.navigate('CreditCardRegister')}
          onPress={registerHairdresser}
        />}
      </Container>

    </ImageBackground>
  );
}
