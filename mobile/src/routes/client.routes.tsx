
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../utils/routeProps';

import Home from '../Screens/Home'
import SchedClient from '../Screens/SchedClient'
import ClientConfig from '../Screens/ClientConfig';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();


export default function AppRoutes(){
  return(
    <Navigator initialRouteName='Home'>

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
        name="ClientConfig"
        component={ClientConfig}
        options={{headerShown: false}}
      />

    </Navigator>
  );
}
