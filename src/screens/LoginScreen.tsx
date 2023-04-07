import { View, Box, Button, Text } from 'native-base';
import { useRecoilState } from 'recoil';
import { sessionState } from '~state/sessionState';
import * as AuthSession from 'expo-auth-session';
import { Alert, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { makeRedirectUri } from 'expo-auth-session';
// @ts-ignore
import { AUTH_CLIENT_ID, AUTH_ENDPOINT } from '@env';

const auth0ClientId = AUTH_CLIENT_ID;
const authorizationEndpoint = AUTH_ENDPOINT;

const LoginScreen = () => {
  const [session, setSession] = useRecoilState(sessionState);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri: makeRedirectUri({
        scheme: 'pet-project'
      }),
      clientId: auth0ClientId,
      responseType: 'id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        nonce: 'nonce'
      }
    },
    { authorizationEndpoint }
  );

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        Alert.alert(
          'Authentication error',
          result.params.error_description || 'something went wrong'
        );
        return;
      }
      if (result.type === 'success') {
        const jwtToken = result.params.id_token;
        const decoded: any = jwtDecode(jwtToken);
        const session = {
          accessToken: jwtToken,
          idToken: jwtToken,
          expiration: decoded.exp,
          username: decoded.nickname,
          email: decoded.email
        };
        setSession(session);
      }
    }
  }, [result]);

  return (
    <View px={5} bg="white">
      <Box>Please Log In</Box>
      <Button onPress={() => promptAsync()}>Open Auth0</Button>
    </View>
  );
};

export default LoginScreen;
