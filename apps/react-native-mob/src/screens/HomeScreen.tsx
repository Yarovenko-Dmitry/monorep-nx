import React, { FC } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { HomeNavigation } from '../components/navigations/HomeNavigation';

export const HomeScreen: FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeNavigation navigation={navigation} />
      <View style={styles.content}>
        <Text>News Application</Text>
        <Text>
          Build with Redux-Saga, React, React-native, React Router and
          TypeScript in Monorepo Nx
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#e7c08f',
    borderColor: '#28ad0a',
    borderRadius: 10,
    borderWidth: 2,
    height: 58,
    margin: 10,
    marginTop: 100,
    paddingHorizontal: 10,
  },
});
