export interface TypeSchedList {
  _id: string,
  hairdresserId: string,
  clientId: {
    _id:string
    clientName:string,
    email:string,
  },
  day: string,
  clientHour: {
    hour: number;
    minute: number;
    _id:string
  } |'',
  status: 'PENDING' | 'CONFIRMED' | 'CANCELED' | '',
}[]
