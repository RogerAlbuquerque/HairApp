
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

const Stack = createNativeStackNavigator<propsNavigationStack>();


export default function Routes(){
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterClient"
        component={RegisterClient}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SchedClient"
        component={SchedClient}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ListOfClients"
        component={ClientListForHairdresser}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HairdConfig"
        component={HairdConfig}
        options={{headerShown: false}}
      />



      {/* <Stack.Screen
        name="registration"
        component={registration}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
