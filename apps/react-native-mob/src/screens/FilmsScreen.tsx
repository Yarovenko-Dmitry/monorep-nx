import * as React from 'react';
import { FC, useEffect, useRef } from 'react';

import {
  EMPTY_ITEM_SIZE,
  isIos,
  ITEM_SIZE,
  SPACING,
} from '@monorepo-nx/data-constants';
import { useAppDispatch, useAppSelector } from '@monorepo-nx/hooks';
import { getFilmsAC } from '@monorepo-nx/redux/actions';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Backdrop } from '../components/films/Backdrop';
import { Genres } from '../components/films/Genres';
import { Loading } from '../components/films/Loading';
import { Rating } from '../components/films/Rating';

export const FilmsScreen: FC = () => {
  const { films } = useAppSelector(store => store.reducer.films);
  const { filmsError } = useAppSelector(store => store.reducer.errors);
  const dispatch = useAppDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(getFilmsAC());
  }, [dispatch]);

  if (filmsError) {
    return (
      <View>
        <Text>{filmsError}</Text>
      </View>
    );
  }

  if (!films.length) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Backdrop films={films} scrollX={scrollX} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={films}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={isIos ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.contentContainer}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ index, item }) => {
          if (!item.poster) {
            return <View style={styles.emptyItem} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            extrapolate: 'clamp',
            inputRange,
            outputRange: [100, 50, 100],
          });

          return (
            <View style={styles.itemContainer}>
              <Animated.View
                style={[
                  styles.animatedContainer,
                  { transform: [{ translateY }] },
                ]}>
                <Image
                  style={styles.posterImage}
                  source={{ uri: item.poster }}
                />
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text style={styles.description} numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 34,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
  },
  emptyItem: {
    width: EMPTY_ITEM_SIZE,
  },
  itemContainer: {
    width: ITEM_SIZE,
  },
  posterImage: {
    borderRadius: 24,
    height: ITEM_SIZE * 1.2,
    margin: 0,
    marginBottom: 10,
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    fontSize: 24,
  },
});
