import React, { FC } from 'react';

import { Button, StyleSheet, View } from 'react-native';

export const HomeNavigation: FC<any> = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <Button
        title='RelatedNews'
        onPress={() => navigation.navigate('RelatedNews')}
      />
      <Button
        title='PopularNews'
        onPress={() => navigation.navigate('PopularNews')}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    backgroundColor: '#95bd64',
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    margin: 10,
  },
});
