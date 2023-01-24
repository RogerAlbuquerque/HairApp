import  styled  from 'styled-components/native';

export const Container = styled.ScrollView `
  /* flex: 1; */
`;

export const OverlayKeyboard = styled.KeyboardAvoidingView`
/* margin-bottom: 40px; */
`;

export const ContainerLogo = styled.View `
  align-items: center;
  height: 60%;
`;


export const ContainerForm = styled.View`
    justify-content: center;
    align-items: center;
`;


export const Check = styled.View`
  flex-direction: row;
  width: 140px;
  height: 22px;
  margin: 0 42px;
`;

export const ForgotPassword = styled.TouchableOpacity`
 width: 150px;
 height: 22px;

`;

export const ForgotDad = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;


export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 140px;
  height: 60px;

`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: row;

`;

export const Create = styled.TouchableOpacity`
  padding-left: 8px;
  padding-bottom: -12px;
`;
