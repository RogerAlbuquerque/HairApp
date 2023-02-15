export interface TypeHairdToSched{
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED' | '';
  userId:string;
  userName:string,
  email?:string
  address?:string,
  workingTimeOpen?:{
    hour:number;
    minute:number;
  }
  workingTimeClose?:{
    hour:number;
    minute:number;
  }
  hairPrice?:number;
  beardPrice?:number;
  clientHour?: {
    hour: number;
    minute: number;
    _id:string
  } | '',
  schedDay?:string
}
