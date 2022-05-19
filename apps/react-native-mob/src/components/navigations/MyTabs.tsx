import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import { FilmsScreen } from '../../screens/FilmsScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { PopularNewsScreen } from '../../screens/PopularNewsScreen';
import { RelatedNewsScreen } from '../../screens/RelatedNewsScreen';

const Tab = createBottomTabNavigator();

export const MyTabs: FC = () => {
  return (
    /*TS2786: 'Tab.Navigator' cannot be used as a JSX component.
      Type '{}' is not assignable to type 'ReactNode'. */
    // @ts-ignore
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/home.png')}
              style={{
                tintColor: focused ? '#28ad0a' : '#e7c08f',
                ...styles.image,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name='RelatedNews'
        component={RelatedNewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/relatedNews.png')}
              resizeMode='contain'
              style={{
                tintColor: focused ? '#28ad0a' : '#e7c08f',
                ...styles.image,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name='PopularNews'
        component={PopularNewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/popularNews.png')}
              style={{
                tintColor: focused ? '#28ad0a' : '#e7c08f',
                ...styles.image,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name='CurrentFilms'
        component={FilmsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/films.png')}
              style={{
                tintColor: focused ? '#28ad0a' : '#e7c08f',
                ...styles.image,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
