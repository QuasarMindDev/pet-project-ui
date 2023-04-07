import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRecoilValue } from 'recoil';
import screenOptionsHook from '~hooks/screenOptionsHook';
import HomeScreen from '~screens/HomeScreen';
import LoginScreen from '~screens/LoginScreen';
import { sessionState } from '~state/sessionState';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  const isLoggedIn = useRecoilValue(sessionState).accessToken !== '';
  const screenOptions = screenOptionsHook();
  return (
    <Home.Navigator screenOptions={{ ...screenOptions }}>
      {isLoggedIn ? (
        <Home.Screen name="Home" component={HomeScreen} />
      ) : (
        <Home.Screen name="Login" component={LoginScreen} />
      )}
    </Home.Navigator>
  );
};

export default HomeStack;
