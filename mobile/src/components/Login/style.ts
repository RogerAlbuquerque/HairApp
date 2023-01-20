import { Platform, StatusBar } from 'react-native';
import  styled  from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid? `${StatusBar.currentHeight}pc`: '0'};
`;

export const LoginContainer = styled.View`
 height: 78px;
 background: gray;
 margin-top: 36px;
`;
