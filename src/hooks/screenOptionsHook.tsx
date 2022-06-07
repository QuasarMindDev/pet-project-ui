import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import NavBarComponent from '~components/navigation/NavBarComponent';

const screenOptionsHook = (): NativeStackNavigationOptions => {
  return useMemo((): NativeStackNavigationOptions => {
    return {
      header: (props) => <NavBarComponent {...props} />
    };
  }, []);
};

export default screenOptionsHook;
