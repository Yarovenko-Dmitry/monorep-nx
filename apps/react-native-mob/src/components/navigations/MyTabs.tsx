import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

import { SCREEN_TABS } from '../../data-constants';
import { CreateTabScreenType } from '../../types';

const Tab = createBottomTabNavigator();

const createTabScreen: CreateTabScreenType = (name, component, path) => (
  <Tab.Screen
    key={name}
    name={name}
    component={component}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={path}
          style={{
            tintColor: focused ? '#28ad0a' : '#e7c08f',
            ...styles.image,
          }}
        />
      ),
    }}
  />
);

const TABS = SCREEN_TABS.map(({ component, name, path }) => {
  return createTabScreen(name, component, path as ImageSourcePropType);
});

export const MyTabs: FC = () => {
  return (
    /*TS2786: 'Tab.Navigator' cannot be used as a JSX component.
    Type '{}' is not assignable to type 'ReactNode'. */
    // @ts-ignore
    <Tab.Navigator>{TABS}</Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
