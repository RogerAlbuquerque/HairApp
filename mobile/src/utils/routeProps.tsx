import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  SignIn: undefined;
  RegisterClient: undefined;
  VerifyEmail: undefined;
  ChangePassword:{
   email?: string;
  }
  Home: undefined;
  SchedClient: {
    status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
    hairdName:string,
    workingTimeOpen:any
    workingTimeClose:any
    hairPrice:any
    beardPrice:any
  };
  ListOfClients:undefined;
  HairdConfig:undefined
  ClientConfig:undefined
  HairdRegister:undefined
  CreditCardRegister:undefined

}


export type propsStack = NativeStackNavigationProp<propsNavigationStack>
