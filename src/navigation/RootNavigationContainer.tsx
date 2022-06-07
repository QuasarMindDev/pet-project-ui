import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabBarComponent from '~components/navigation/TabBarComponent';
import HomeStack from './HomeStack';
import { RootTabParams } from './NavitationTypes';

const Tab = createBottomTabNavigator<RootTabParams>();

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <TabBarComponent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
