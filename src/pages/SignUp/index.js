import React, {useContext, useState} from 'react';
import {Platform, ActivityIndicator} from 'react-native';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from '../SignIn/styles';

import {AuthContext} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();

  const {signUp, loadingAuth} = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (nome === '' || email === '' || password === '') return;
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>

        <Link>
          <LinkText onPress={() => navigation.navigate('SignIn')}>
            Acessar
          </LinkText>
        </Link>
      </Container>
    </Background>
  );
}
