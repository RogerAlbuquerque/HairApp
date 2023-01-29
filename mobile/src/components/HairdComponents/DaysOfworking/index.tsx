import { useState } from "react";
import { Text } from "../../utils/Text";
import { Day, DaysWeek } from "./style";


export default function DaysOfWorking(){
  const [schedDay, setSchedDay] = useState({
    SEG:false,
    TER:false,
    QUA:false,
    QUI:false,
    SEX:false,
    SAB:false,
    DOM:false,
  })
  return(
    <DaysWeek>
          <Day onPress={()=> setSchedDay({...schedDay, SEG:!schedDay.SEG})} style={{backgroundColor:schedDay.SEG ? '#3FC500' : 'white'}}  >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, TER:!schedDay.TER})} style={{backgroundColor:schedDay.TER ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, QUA:!schedDay.QUA})} style={{backgroundColor:schedDay.QUA ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, QUI:!schedDay.QUI})} style={{backgroundColor:schedDay.QUI ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, SEX:!schedDay.SEX})} style={{backgroundColor:schedDay.SEX ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, SAB:!schedDay.SAB})} style={{backgroundColor:schedDay.SAB ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day onPress={()=> setSchedDay({...schedDay, DOM:!schedDay.DOM})} style={{backgroundColor:schedDay.DOM ? '#3FC500' : 'white'}} >
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>
  );
}
