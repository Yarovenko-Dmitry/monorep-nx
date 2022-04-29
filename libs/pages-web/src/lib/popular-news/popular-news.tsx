import {useEffect} from 'react'

import {News} from '@4-mono-all/ui-web'
import {useAppDispatch, useAppSelector} from '@4-mono-all/hooks'
import { getPopularNewsAC} from '@4-mono-all/redux/actions'


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
