import {NavigationContainer} from '@react-navigation/native';
import ClientRoutes from './client.routes';
import AuthRoutes from './auth.routes';
import HairdRoutes from './haird.routes';

export default function Routes(){
  return(
    <NavigationContainer>
      <ClientRoutes/>
    </NavigationContainer>
  );
}
