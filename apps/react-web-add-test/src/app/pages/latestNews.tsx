import {useEffect} from 'react'

import {News} from '../components/news/news'
import {getLatestNews} from '../redux/actions/actionCreator'
import {useAppDispatch, useAppSelector} from '../hooks/redux'


export const LatestNews = () => {
  const {latestNews} = useAppSelector((store) => store.reducer.newsList)
  const {latestNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNews())
  }, [dispatch])

  return (
    <div>
      <News
        news = {latestNews}
        error = {latestNewsError}
        title = 'Latest News' />
    </div>
  )
}
