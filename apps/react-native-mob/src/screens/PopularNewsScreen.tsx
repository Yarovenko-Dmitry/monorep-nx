import React, { useEffect, FC } from 'react';

import { useAppDispatch, useAppSelector } from '@monorepo-nx/hooks';
import { getPopularNewsAC } from '@monorepo-nx/redux/actions';
import { Text, View } from 'react-native';

export const PopularNewsScreen: FC = () => {
  const { popularNews } = useAppSelector(store => store.reducer.newsList);
  const { popularNewsError } = useAppSelector(store => store.reducer.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopularNewsAC());
  }, [dispatch]);

  if (!popularNews || popularNews.length === 0) {
    return popularNewsError ? (
      <View>
        <Text>{popularNewsError}</Text>
      </View>
    ) : null;
  }

  return (
    <View>
      <Text>PopularNews</Text>

      {popularNews.map(({ title }, index) => (
        <View key={index}>
          <Text>{title}</Text>
        </View>
      ))}
    </View>
  );
};
