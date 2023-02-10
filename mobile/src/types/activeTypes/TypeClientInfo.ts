import { TypeHairdInfo } from "./TypeHairdInfo";

export interface TypeClientInfo{
  clientName: string,
  email:string,
  clientPassword:string,
  hairdressers:TypeHairdInfo[] | null;
}
