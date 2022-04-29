import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {HomeScreen} from './screens/HomeScreen'
import {LatestNewsScreen} from './screens/LatestNewsScreen'
import {PopularNewsScreen} from './screens/PopularNewsScreen'


const Tab = createBottomTabNavigator()

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name = 'Home'
          component = {HomeScreen}
          options = {{
            tabBarIcon: ({focused}) => (
              <Image
                source = {require('./assets/home.png')}
                style = {{
                  tintColor: focused ? '#28ad0a' : '#e7c08f',
                  ...styles.image
                }}
              />
            )
          }}
        />

        <Tab.Screen
          name = 'LatestNews'
          component = {LatestNewsScreen}
          options = {{
            tabBarIcon: ({focused}) => (
              <Image
                source = {require('./assets/latestNews.png')}
                resizeMode = 'contain'
                style = {{
                  tintColor: focused ? '#28ad0a' : '#e7c08f',
                  ...styles.image
                }}
              />
            )
          }}
        />

        <Tab.Screen
          name = 'PopularNews'
          component = {PopularNewsScreen}
          options = {{
            tabBarIcon: ({focused}) => (
              <Image
                source = {require('./assets/popularNews.png')}
                style = {{
                  tintColor: focused ? '#28ad0a' : '#e7c08f',
                  ...styles.image
                }}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
})
