import { useState } from "react";
import { Text } from "../../../utils/Text";
import { Day, DaysWeek } from "./style";

interface daysWorkingProps{
  workDaysWeek:{
    SEG:boolean,
    TER:boolean,
    QUA:boolean,
    QUI:boolean,
    SEX:boolean,
    SAB:boolean,
    DOM:boolean,
  }
  setWorkDaysWeek:(day:'SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM')=>void
}
export default function DaysOfWorking({workDaysWeek,setWorkDaysWeek}:daysWorkingProps){
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
          <Day onPress={()=> setWorkDaysWeek('SEG')} style={{backgroundColor:workDaysWeek.SEG ? '#3FC500' : 'white'}}  >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('TER')} style={{backgroundColor:workDaysWeek.TER ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('QUA')} style={{backgroundColor:workDaysWeek.QUA ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('QUI')} style={{backgroundColor:workDaysWeek.QUI ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('SEX')} style={{backgroundColor:workDaysWeek.SEX ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('SAB')} style={{backgroundColor:workDaysWeek.SAB ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day onPress={()=> setWorkDaysWeek('DOM')} style={{backgroundColor:workDaysWeek.DOM ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>
  );
}
