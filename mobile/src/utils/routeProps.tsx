import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  SignIn: undefined;
  RegisterClient: undefined;
  VerifyEmail: undefined;
  ChangePassword:{
    token: string;
    email: string;
  }
  Home: undefined;
  SchedClient: undefined;
  ListOfClients:undefined;

}


export type propsStack = NativeStackNavigationProp<propsNavigationStack>
