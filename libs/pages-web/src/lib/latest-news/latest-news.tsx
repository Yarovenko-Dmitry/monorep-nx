import {useEffect} from 'react'

import {News} from '@monorepo-nx/ui-web'
import {useAppDispatch, useAppSelector} from '@monorepo-nx/hooks'
import {getLatestNewsAC} from '@monorepo-nx/redux/actions'


export const LatestNews = () => {
  const {latestNews} = useAppSelector((store) => store.reducer.newsList)
  const {latestNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatestNewsAC())
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
