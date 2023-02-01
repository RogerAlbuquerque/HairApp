
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../Screens/Auth/Login';
import VerifyEmail from '../Screens/Auth/VerifyEmail';
import ChangePassword from '../Screens/Auth/ChangePassword';
import RegisterClient from '../Screens/Auth/RegisterClient';
import Home from '../Screens/Home'
import SchedClient from '../Screens/SchedClient'
import { propsNavigationStack } from '../utils/routeProps';
import ClientListForHairdresser from '../Screens/ClientListForHairdresser';
import HairdConfig from '../Screens/HairdConfig';
import ClientConfig from '../Screens/ClientConfig';
import HairdRegister from '../Screens/Auth/RegisterHairdresser/HairdRegister';
import CreditCardRegister from '../Screens/Auth/RegisterHairdresser/CreditCardRegister';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();


export default function AppRoutes(){
  return(
    <Navigator initialRouteName='SignIn'>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />

      <Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />

      <Screen
        name="RegisterClient"
        component={RegisterClient}
        options={{headerShown: false}}
      />


      <Screen
        name="HairdRegister"
        component={HairdRegister}
        options={{headerShown: false}}
      />

      <Screen
        name="CreditCardRegister"
        component={CreditCardRegister}
        options={{headerShown: false}}
      />
      <Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Screen
        name="SchedClient"
        component={SchedClient}
        options={{headerShown: false}}
      />

      <Screen
        name="ListOfClients"
        component={ClientListForHairdresser}
        options={{headerShown: false}}
      />

      <Screen
        name="HairdConfig"
        component={HairdConfig}
        options={{headerShown: false}}
      />

      <Screen
        name="ClientConfig"
        component={ClientConfig}
        options={{headerShown: false}}
      />


      {/* <Stack.Screen
        name="registration"
        component={registration}
        options={{headerShown: false}}
      /> */}
    </Navigator>
  );
}
