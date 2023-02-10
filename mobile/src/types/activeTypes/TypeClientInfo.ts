import { TypeHairdInfo } from "./TypeHairdInfo";

export interface TypeClientInfo{
  _id:string
  clientName: string,
  email:string,
  clientPassword:string,
  hairdressers:TypeHairdInfo[] | null;
}
