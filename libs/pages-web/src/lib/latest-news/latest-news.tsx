import {useEffect} from 'react'

import {News} from '@4-mono-all/ui-web'
import {useAppDispatch, useAppSelector} from '@4-mono-all/hooks'
import {getLatestNews} from '@4-mono-all/redux/actions'


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
        title = 'Latest News'
      />
    </div>
  )
}
