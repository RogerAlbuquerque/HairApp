
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../components/Main';
import SignIn from '../components/Login';

const Stack = createNativeStackNavigator();


export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
