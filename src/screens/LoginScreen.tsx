import { View, Box, Button, Text } from 'native-base';
import { useRecoilState } from 'recoil';
import { sessionState } from '~state/sessionState';
import * as AuthSession from 'expo-auth-session';
import { Alert, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const auth0ClientId = 'R3D4R5GHCrYzjTFOD45yYra8C4mp9Nsj';
const authorizationEndpoint = 'https://dev-9fo3hhwn.us.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const LoginScreen = () => {
  const [session, setSession] = useRecoilState(sessionState);

  console.log(`Redirect URL: ${redirectUri}`);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: 'id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        nonce: 'nonce'
      }
    },
    { authorizationEndpoint }
  );
  console.log('Result: ', result);

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
      <Button onPress={() => promptAsync({ useProxy })}>Open Auth0</Button>
    </View>
  );
};

export default LoginScreen;
