import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'


export const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.navBar}>
        <Button
          title = {'LatestNews'}
          onPress = {() => navigation.navigate('LatestNews')}
        />
        <Button
          title = {'PopularNews'}
          onPress = {() => navigation.navigate('PopularNews')}
        />
      </View>
      <View style = {styles.content}>
        <Text>News Application</Text>
        <Text>Build with Redux-Saga, React, React-native, React Router and TypeScript in Monorepo Nx</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#95bd64',
  },
  content: {
    marginTop: 100,
    margin: 10,
    height: 58,
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#28ad0a',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e7c08f',
  }
})
