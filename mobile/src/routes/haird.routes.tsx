
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../utils/routeProps';

import ClientListForHairdresser from '../Screens/ClientListForHairdresser';
import HairdConfig from '../Screens/HairdConfig';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();


export default function AppRoutes(){
  return(
    <Navigator initialRouteName='ListOfClients'>

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
    </Navigator>
  );
}
