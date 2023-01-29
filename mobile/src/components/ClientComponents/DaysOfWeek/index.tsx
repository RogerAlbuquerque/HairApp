import { useState } from "react";
import { Text } from "../../utils/Text";
import { Day, DaysWeek } from "./style";

interface DaysOfWeekProps{
  schedDay:string
  setSchedDay:(dia:string)=>void;

}
export default function DaysOfWeek({schedDay, setSchedDay}:DaysOfWeekProps){

  return(
    <DaysWeek>
          <Day onPress={()=> schedDay != 'SEG' ? setSchedDay('SEG') : setSchedDay('')} style={{backgroundColor: schedDay == 'SEG' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day onPress={()=> schedDay != 'TER' ? setSchedDay('TER') : setSchedDay('')} style={{backgroundColor: schedDay == 'TER' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day onPress={()=> schedDay != 'QUA' ? setSchedDay('QUA') : setSchedDay('')} style={{backgroundColor: schedDay == 'QUA' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day onPress={()=> schedDay != 'QUI' ? setSchedDay('QUI') : setSchedDay('')} style={{backgroundColor: schedDay == 'QUI' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day onPress={()=> schedDay != 'SEX' ? setSchedDay('SEX') : setSchedDay('')} style={{backgroundColor: schedDay == 'SEX' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day onPress={()=> schedDay != 'SAB' ? setSchedDay('SAB') : setSchedDay('')} style={{backgroundColor: schedDay == 'SAB' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day onPress={()=> schedDay != 'DOM' ? setSchedDay('DOM') : setSchedDay('')} style={{backgroundColor: schedDay == 'DOM' ? '#3FC500' : 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>
  );
}
