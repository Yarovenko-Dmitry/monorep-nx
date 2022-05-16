import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import { FilmsScreen } from '../../screens/FilmsScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { LatestNewsScreen } from '../../screens/LatestNewsScreen';
import { PopularNewsScreen } from '../../screens/PopularNewsScreen';

const Tab = createBottomTabNavigator();

export const MyTabs: FC = () => {
  return (
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
        name='LatestNews'
        component={LatestNewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/latestNews.png')}
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
