export interface TypeHairdInfo{
  hairdName: string,
  hairdPassword:string,
  email:string,
  address:string,
  prices:{
    hairPrice:number,
    beardPrice:number
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
