
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../Screens/Auth/Login';
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

      {/* <Stack.Screen
        name="registration"
        component={registration}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
