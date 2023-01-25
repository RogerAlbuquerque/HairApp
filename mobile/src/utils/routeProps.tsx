import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  SignIn: undefined;
  RegisterClient: undefined;
  Home: undefined;
  VerifyEmail: undefined;
  ChangePassword:{
    token: string;
    email: string;
  }
}


export type propsStack = NativeStackNavigationProp<propsNavigationStack>
