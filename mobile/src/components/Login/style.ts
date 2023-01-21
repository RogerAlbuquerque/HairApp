import { Platform, StatusBar } from 'react-native';
import  styled  from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid? `${StatusBar.currentHeight}pc`: '0'};
`;


export const ContLogin = styled.View`
    background: #fff;
    flex:1;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;

export const Footer = styled.View`
  position: absolute;
  text-align: center;
  min-height: 110px;
`;

