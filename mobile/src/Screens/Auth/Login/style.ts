import  styled  from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverlayKeyboard = styled.KeyboardAvoidingView`
  justify-content: center;
    align-items: center;
    margin-bottom: 200%;
    /* flex: 1; */
    width: 100%;
    margin-top: 50px;
`;

export const ContainerLogo = styled.View `
  padding-left: 42px;
  padding-bottom: 70px;
  /* margin-top: -40px; */
`;


export const ContainerForm = styled.View`

`;

export const Input = styled.TextInput`
  width: 323.76px;
  height: 44.1px;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 28px;
  font-size: 28px;
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
  height: 40px;
  flex-direction: row;
  padding-top: 10px;
  /* border: 1px solid red; */
`;

export const Create = styled.TouchableOpacity`
  padding-left: 8px;
  padding-bottom: -12px;
`;
