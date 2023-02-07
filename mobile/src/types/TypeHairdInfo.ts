export interface TypeHairdInfo{
  hairdName: string,
  hairdPassword:string,
  email:string,
  address:string,
  prices:{
    hairPrice:number,
    beardPrice:number
  },
  workDaysWeek: ['SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM'];
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
