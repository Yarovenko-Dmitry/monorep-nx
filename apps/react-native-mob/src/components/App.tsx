import React, { FC } from 'react';

import { store } from '@monorepo-nx/redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { MyTabs } from './navigations/MyTabs';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
};
