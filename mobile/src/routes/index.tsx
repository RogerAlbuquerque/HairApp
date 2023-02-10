
import {NavigationContainer} from '@react-navigation/native';
import { useContext } from 'react';
import { UserInfoContext } from '../context';
import ClientRoutes from './client.routes';
import AuthRoutes from './auth.routes';
import HairdRoutes from './haird.routes';


export default function Routes(){
  const{clientInfo, hairdInfo,tokenIsValid}=useContext(UserInfoContext);
  return(
      <NavigationContainer>
        {(clientInfo.clientName && tokenIsValid ) ? <ClientRoutes/>  : (hairdInfo.hairdName && tokenIsValid )? <HairdRoutes/> : <AuthRoutes/>}
      </NavigationContainer>
  );
}
