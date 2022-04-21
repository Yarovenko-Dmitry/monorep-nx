import {useEffect} from 'react'

import {News} from '../components/news/news'
import {getPopularNews} from '../redux/actions/actionCreator'
import {useAppDispatch, useAppSelector} from '../hooks/redux'


export const PopularNews = () => {
  const {popularNews} = useAppSelector(store => store.reducer.newsList)
  const {popularNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularNews())
  }, [dispatch])

  return (
    <div>
      <News
        news = {popularNews}
        error = {popularNewsError}
        title = 'Popular News' />
    </div>
  )
}
