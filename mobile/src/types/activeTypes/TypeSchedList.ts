interface TypeSchedList {
  _id: string,
  hairdresserId: string,
  clientId: string,
  day: string,
  clientHour: {
    hour: number,
    minute: number,
    _id: string
  },
  status: 'PENDING' | 'CONFIRMED' | 'CANCELED',
}
