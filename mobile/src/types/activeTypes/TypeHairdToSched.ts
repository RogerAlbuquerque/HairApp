export interface TypeHairdToSched{
  status:'PENDING' | 'CONFIRMED' | 'CANCELED' | '';
  hairdId:string;
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
  hairPrice:number;
  beardPrice:number;
  clientHour?: {
    hour: number;
    minute: number;
    _id:string
  } | EmptyTypeSchedList
}
