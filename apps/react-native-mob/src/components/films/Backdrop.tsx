import * as React from 'react';
import { FC } from 'react';

import {
  BACKDROP_HEIGHT,
  height,
  ITEM_SIZE,
  width,
} from '@monorepo-nx/data-constants';
import { BackdropType } from '@monorepo-nx/types';
import { Animated, FlatList, Image, StyleSheet, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const Backdrop: FC<BackdropType> = ({ films, scrollX }) => {
  return (
    <View style={styles.backdrop}>
      <FlatList
        data={films}
        keyExtractor={item => `${item.key}-backdrop`}
        removeClippedSubviews={false}
        contentContainerStyle={{ height: BACKDROP_HEIGHT, width }}
        renderItem={({ index, item }) => {
          if (!item.backdrop) {
            return null;
          }

          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          });

          return (
            <Animated.View
              removeClippedSubviews={false}
              style={[styles.AnimatedContainer, { width: translateX }]}>
              <Image source={{ uri: item.backdrop }} style={styles.backdrop} />
            </Animated.View>
          );
        }}
      />

      {/*TS2786: 'LinearGradient' cannot be used as a JSX component.
      Type '{}' is not assignable to type 'ReactNode'.
      NOTE: correct work without NX */}
      {/* @ts-ignore  */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={styles.linearGradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  AnimatedContainer: {
    height,
    overflow: 'hidden',
    position: 'absolute',
  },
  backdrop: {
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    width,
  },
  linearGradient: {
    bottom: 0,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    width,
  },
});
