import React from 'react'
import {Text, View} from 'react-native'


export const LatestNewsScreen = () => {
/*  const {latestNews} = useAppSelector((store) => store.reducer.newsList)
  const {latestNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNews())
  }, [dispatch])*/


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
