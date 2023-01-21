import React, { useState } from 'react';
import { TextInput, Image, View} from 'react-native';
import { Text } from '../Text';
import { Container, ContLogin, Footer} from './style';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <View>
        <Image
          source={require('../../imgs/333332.png')}
        />
      </View>
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
          <View>
            <Text>Entrar</Text>
          </View>

          <View>
            <Text>Não tem conta?<Text>Cadastre-se</Text></Text>
          </View>
        </Footer>
      </ContLogin>

    </Container>
  );
}
