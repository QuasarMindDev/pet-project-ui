import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Box } from 'native-base';

const TabBarComponent = ({ navigation }: BottomTabBarProps) => {
  return (
    <Box safeAreaBottom px={5}>
      Tab Bar
    </Box>
  );
};

export default TabBarComponent;
