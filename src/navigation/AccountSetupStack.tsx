import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenOptionsHook from '~hooks/screenOptionsHook';
import SetupScreen from '~screens/SetupScreen';

const Setup = createNativeStackNavigator();

const SetupStack = () => {
  const screenOptions = screenOptionsHook();

  return (
    <Setup.Navigator screenOptions={{ ...screenOptions }}>
      <Setup.Screen name="Setup" component={SetupScreen} />
    </Setup.Navigator>
  );
};

export default SetupStack;
