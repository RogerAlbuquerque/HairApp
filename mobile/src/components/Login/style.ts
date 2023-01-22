import { Platform, StatusBar, TextInput } from 'react-native';
import  styled  from 'styled-components/native';
import { Text } from '../Text';

export const Container = styled.View `
  flex: 1;
`;


export const ContainerLogo = styled.View `
  padding-left: 42px;
  padding-bottom: 0;
  margin-top: -43px;
`;


export const ContainerForm = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 300px;
    flex: 1;
    width: 100%;
`;

export const Input = styled.TextInput`
  width: 323.76px;
  height: 41.1px;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  color: #D5CBCB;
  background-color: #fff;
  margin-bottom: 15px;
  color: #222;
  font-size: 17px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

`;
