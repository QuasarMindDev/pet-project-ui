import { View, Box, Button } from 'native-base';
import { useRecoilState } from 'recoil';
import { sessionState } from '~state/sessionState';

const HomeScreen = () => {
  const [session, setSession] = useRecoilState(sessionState);

  const handleLogout = () => {
    setSession({
      accessToken: '',
      idToken: '',
      expiration: '',
      username: '',
      email: ''
    });
  };

  return (
    <View px={5} bg="white">
      <Box>Welcome back, {session.username}</Box>
      <Button onPress={handleLogout}>Log out</Button>
    </View>
  );
};

export default HomeScreen;
