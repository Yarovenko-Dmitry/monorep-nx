import React from 'react'
import {Provider} from 'react-redux'
import {Image, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {store} from '@4-mono-all/redux'

import {HomeScreen} from './screens/HomeScreen'
import {LatestNewsScreen} from './screens/LatestNewsScreen'
import {PopularNewsScreen} from './screens/PopularNewsScreen'


const Tab = createBottomTabNavigator()

export const App = () => {
  console.log(' store :', store)
  return (
    <Provider store = {store}>
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
    </Provider>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
})
