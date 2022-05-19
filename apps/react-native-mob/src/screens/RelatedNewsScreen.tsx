import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@monorepo-nx/hooks';
import { getRelatedNewsAC } from '@monorepo-nx/redux/actions';
import { Text, View } from 'react-native';

export const RelatedNewsScreen: FC = () => {
  const { relatedNews } = useAppSelector(store => store.reducer.newsList);
  const { relatedNewsError } = useAppSelector(store => store.reducer.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRelatedNewsAC());
  }, [dispatch]);

  if (!relatedNews || relatedNews.length === 0) {
    return relatedNewsError ? (
      <View>
        <Text>{relatedNewsError}</Text>
      </View>
    ) : null;
  }

  return (
    <View>
      <Text>RelatedNews</Text>

      {relatedNews.map(({ title }, index) => (
        <View key={index}>
          <Text>{title}</Text>
        </View>
      ))}
    </View>
  );
};
