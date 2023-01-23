
import { Platform, StatusBar, TextInput } from 'react-native';
import  styled  from 'styled-components/native';
import { Text } from '../Text';

export const Container = styled.View `
  flex: 1;

`;


export const ContainerLogo = styled.View `
  padding-left: 42px;
  padding-bottom: 49px;
  margin-top: -40px;
`;


export const ContainerForm = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 725px;
    flex: 1;
    width: 100%;
    margin-top: 48px;
`;

export const Input = styled.TextInput`
  width: 323.76px;
  height: 44.1px;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  color: #D5CBCB;
  background-color: #fff;
  margin-bottom: 28px;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  font-family: 'Imbue-Medium';
  border: 2px solid #222;
`;


export const Check = styled.View`
  flex-direction: row;
  width: 140px;
  height: 22px;
  margin: 0 42px;
`;

export const ForgotPassword = styled.TouchableOpacity`
 width: 100px;
 height: 22px;
 padding: 0;
 margin: 0 38px 1px 10px;
`;

export const ForgotDad = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

`;


export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 48px 2px 8px 2px;
  margin: 2px;
  width: 144px;
  height: 114px;

`;

export const Footer = styled.View`
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 82px;
`;

export const Create = styled.TouchableOpacity`
  padding-left: 10px;
  border: 1px solid red;
`;
