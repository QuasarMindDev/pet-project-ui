import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';

import { Box, Text } from 'native-base';

const NavBarComponent = ({ navigation, route }: NativeStackHeaderProps) => {
  return (
    <Box safeAreaTop px={5} bg="white">
      <Text fontSize={36}>{route.name === 'Home' && 'FINDER'}</Text>
    </Box>
  );
};

export default NavBarComponent;
