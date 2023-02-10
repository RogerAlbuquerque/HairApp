export interface TypeScheduleInfo {
  _id: string;
  day: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
  clientHour:{
    hour:number,
    minute:number
  };
  status:'PENDING' | 'CONFIRMED' | 'CANCELED';
}
