import {useEffect} from 'react'

import {News} from '@monorepo-nx/ui-web'
import {useAppDispatch, useAppSelector} from '@monorepo-nx/hooks'
import { getPopularNewsAC} from '@monorepo-nx/redux/actions'


export const PopularNews = () => {
  const {popularNews} = useAppSelector(store => store.reducer.newsList)
  const {popularNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPopularNewsAC())
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
