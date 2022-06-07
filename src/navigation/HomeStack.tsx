import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenOptionsHook from '~hooks/screenOptionsHook';
import HomeScreen from '~screens/HomeScreen';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  const screenOptions = screenOptionsHook();
  return (
    <Home.Navigator screenOptions={{ ...screenOptions }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeStack;
