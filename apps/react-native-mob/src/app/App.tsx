/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export const App = () => {

  return (
    <>
      <Text style={[styles.textXL, styles.appTitleText]}>
        Welcome ReactNativeMob 👋
      </Text>
      <Text style={[styles.textLg]} >
        TEST 888-==========-88👋
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
});

export default App;
