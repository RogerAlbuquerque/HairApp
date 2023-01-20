import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import style from './style';




export default function Login(){





  return (
    <View>
      <TextInput
        placeholder="Usuario/Email"
        autoCapitalize="none"
        defaultValue={text}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        passwordRules="true"
      />

    </View>
  );
}
