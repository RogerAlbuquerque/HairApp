import { useState } from "react";
import { Text } from "../../../utils/Text";
import { Day, DaysWeek } from "./style";

interface daysWorkingProps{
  schedDay:{
    SEG:boolean,
    TER:boolean,
    QUA:boolean,
    QUI:boolean,
    SEX:boolean,
    SAB:boolean,
    DOM:boolean,
  }
  setSchedDay:(day:'SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM')=>void
}
export default function DaysOfWorking({schedDay,setSchedDay}:daysWorkingProps){
  // const [schedDay, setSchedDay] = useState({
  //   SEG:false,
  //   TER:false,
  //   QUA:false,
  //   QUI:false,
  //   SEX:false,
  //   SAB:false,
  //   DOM:false,
  // })
  return(
    <DaysWeek>
          <Day onPress={()=> setSchedDay('SEG')} style={{backgroundColor:schedDay.SEG ? '#3FC500' : 'white'}}  >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day onPress={()=> setSchedDay('TER')} style={{backgroundColor:schedDay.TER ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day onPress={()=> setSchedDay('QUA')} style={{backgroundColor:schedDay.QUA ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day onPress={()=> setSchedDay('QUI')} style={{backgroundColor:schedDay.QUI ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day onPress={()=> setSchedDay('SEX')} style={{backgroundColor:schedDay.SEX ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day onPress={()=> setSchedDay('SAB')} style={{backgroundColor:schedDay.SAB ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day onPress={()=> setSchedDay('DOM')} style={{backgroundColor:schedDay.DOM ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>
  );
}
