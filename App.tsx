import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { RecoilRoot } from 'recoil';
import defaultTheme from '~theme/Theme';
import RootNavigationContainer from '~navigation/RootNavigationContainer';

export default function App() {
  return (
    <NativeBaseProvider theme={defaultTheme}>
      <RecoilRoot>
        <RootNavigationContainer />
      </RecoilRoot>
    </NativeBaseProvider>
  );
}
