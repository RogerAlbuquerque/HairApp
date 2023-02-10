export interface TypeHairdToSched{
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
  hairdName:string,
  email:string
  address:string,
  workingTimeOpen:{
    hour:number;
    minute:number;
  }
  workingTimeClose:{
    hour:number;
    minute:number;
  }
  hairPrice:number
  beardPrice:number
}
