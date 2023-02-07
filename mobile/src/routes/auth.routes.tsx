
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../utils/routeProps';

import SignIn from '../Screens/Auth/Login';
import VerifyEmail from '../Screens/Auth/VerifyEmail';
import ChangePassword from '../Screens/Auth/ChangePassword';
import RegisterClient from '../Screens/Auth/RegisterClient';
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

    </Navigator>
  );
}
