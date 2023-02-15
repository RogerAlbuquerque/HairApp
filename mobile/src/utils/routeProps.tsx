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
    status?:'PENDING' | 'CONFIRMED' | 'CANCELED' | '';
    userName:string;
    workingTimeOpen?:{
      hour:number;
      minute:number;
    };
    workingTimeClose?:{
      hour:number;
      minute:number;
    };
    hairPrice?:number;
    beardPrice?:number;
    clientHour?: {
      hour: number;
      minute: number;
      _id: string;
    }| '',
    schedDay?:string;
  };

  ListOfClients:undefined;
  HairdConfig:undefined;
  ClientConfig:undefined;
  HairdRegister:undefined;
  CreditCardRegister:undefined;

}


export type propsStack = NativeStackNavigationProp<propsNavigationStack>
