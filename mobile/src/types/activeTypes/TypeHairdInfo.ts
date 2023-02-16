export interface TypeHairdInfo{
  _id:string;
  hairdName: string,
  hairdPassword:string,
  email:string,
  address:string,
  prices:{
    hairPrice:string,
    beardPrice:string
  },
  workDaysWeek: {
      SEG:boolean,
      TER:boolean,
      QUA:boolean,
      QUI:boolean,
      SEX:boolean,
      SAB:boolean,
      DOM:boolean,
  };
  workingTime:{
    open:{
      hour:number,
      minute:number
    },
    close:{
      hour:number,
      minute:number
    }
  }
}
