import React, { useState } from 'react';
<<<<<<< HEAD
import { TextInput, View} from 'react-native';
=======
import { TextInput} from 'react-native';
>>>>>>> d17bcff43e91630f2718bee71399fd72d9280079
import { Text } from '../Text';
import { Container, ContLogin, Footer} from './style';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
<<<<<<< HEAD
=======
      {/* <View>
      </View> */}
      <ContLogin>
        <TextInput
          placeholder='Usuario/Email'
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry

        />
        <Footer>
          <Text>Entrar</Text>
          <Text>Não tem conta?<Text>Cadastre-se</Text></Text>
        </Footer>
      </ContLogin>
>>>>>>> d17bcff43e91630f2718bee71399fd72d9280079

    </Container>
  );
}
