import React from 'react';
import { TextInput } from 'react-native';
import { Text } from '../Text';
import {Container, LoginContainer} from './style';




export default function Login(){


  return (
    <Container>
      <LoginContainer>
        <TextInput
          placeholder="Usuario/Email"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          passwordRules="true"
        />
      </LoginContainer>
      <Text font={'Imbue'}>Entrar</Text>
    </Container>
  );
}
