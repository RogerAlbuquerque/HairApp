import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ClientRoutes from './client.routes';
import AuthRoutes from './auth.routes';
import HairdRoutes from './haird.routes';

import { UserInfoContext } from '../context';

import { TypeClientInfo } from '../types/TypeClientInfo';
import { TypeHairdInfo } from '../types/TypeHairdInfo';


export default function Routes(){
  const [clientInfo,setClientInfoState]=useState<TypeClientInfo>({} as TypeClientInfo);
  const [hairdInfo,setHairdInfoState]=useState<TypeHairdInfo>({} as TypeHairdInfo);

  function handleClientInfoState(userData:TypeClientInfo){
    setClientInfoState(userData)
  }

  function handleHairdInfoState(userData:TypeHairdInfo){
    setHairdInfoState(userData)
  }

  return(
    <UserInfoContext.Provider value={{clientInfo, handleClientInfoState, hairdInfo, handleHairdInfoState}}>
      <NavigationContainer>
        {clientInfo.clientName ? <ClientRoutes/>  : hairdInfo.hairdName ? <HairdRoutes/> : <AuthRoutes/>}

      </NavigationContainer>
    </UserInfoContext.Provider>
  );
}
