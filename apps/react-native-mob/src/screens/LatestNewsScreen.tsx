import React, {useEffect} from 'react'
import {Text, View} from 'react-native'

import {useAppDispatch, useAppSelector} from '@monorepo-nx/hooks'
import {getLatestNewsAC} from '@monorepo-nx/redux/actions'


export const LatestNewsScreen = () => {
  const {latestNews} = useAppSelector((store) => store.reducer.newsList)
  const {latestNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNewsAC())
  }, [dispatch])

  if (!latestNews || latestNews.length === 0) {
    return latestNewsError ? <View><Text>{latestNewsError}</Text></View> : null
  }

  return (
    <View>
      <Text>
        LatestNews
      </Text>

      {latestNews.map(({title}, index) => (
        <View key = {index}>
          <Text>
            {title}
          </Text>
        </View>
      ))}
    </View>
  )
}
