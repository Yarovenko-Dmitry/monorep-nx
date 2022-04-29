import React, {useEffect} from 'react'
import {Text, View} from 'react-native'

import {useAppDispatch, useAppSelector} from '@4-mono-all/hooks'
import {getLatestNewsAC} from '@4-mono-all/redux/actions'
import {useSelector} from 'react-redux'
import {RootStateType} from '@4-mono-all/redux'


export const LatestNewsScreen = () => {
  const {latestNews}=useAppSelector((store) => store.reducer.newsList)
  //  const latestNews = useSelector((state: RootStateType) => state)
  // const {latestNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNewsAC())
  }, [dispatch])

  // console.log(' latestNews :', latestNews)
  return (
    <View>
      <Text>
        LatestNews
      </Text>
      {/* <News
        news = {latestNews}
        error = {latestNewsError}
        title = 'Latest News'
      />*/}
    </View>
  )
}
