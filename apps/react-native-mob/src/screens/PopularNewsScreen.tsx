import React, {useEffect} from 'react'
import {Text, View} from 'react-native'

import {useAppDispatch, useAppSelector} from '@4-mono-all/hooks'
import {getPopularNewsAC} from '@4-mono-all/redux/actions'


export const PopularNewsScreen = () => {
  const {popularNews} = useAppSelector(store => store.reducer.newsList)
  const {popularNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularNewsAC())
  }, [dispatch])

  if (!popularNews || popularNews.length === 0) {
    return popularNewsError ? <View><Text>{popularNewsError}</Text></View> : null
  }

  return (
    <View>
      <Text>
        PopularNews
      </Text>

      {popularNews.map(({title}, index) => (
        <View key = {index}>
          <Text>
            {title}
          </Text>
        </View>
      ))}
    </View>
  )
}
