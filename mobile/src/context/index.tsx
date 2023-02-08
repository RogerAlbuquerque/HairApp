import { createContext } from 'react';
import { TypeClientInfo } from '../types/TypeClientInfo';
import { TypeHairdInfo } from '../types/TypeHairdInfo';

interface userDataTypeContext{
  clientInfo:TypeClientInfo;
  handleClientInfoState:(userData:TypeClientInfo)=>void;

  hairdInfo:TypeHairdInfo;
  handleHairdInfoState:(userData:TypeHairdInfo)=>void;
}

export const UserInfoContext = createContext({} as userDataTypeContext);

// export default funcion
