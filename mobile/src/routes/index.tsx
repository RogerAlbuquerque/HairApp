
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../Screens/Auth/Login';
import RegisterClient from '../Screens/Auth/RegisterClient';
import { propsNavigationStack } from '../utils/routeProps';

const Stack = createNativeStackNavigator<propsNavigationStack>();


export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterClient"
        component={RegisterClient}
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
