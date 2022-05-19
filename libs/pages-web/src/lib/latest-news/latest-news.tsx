import {useEffect} from 'react'

import {News} from '@monorepo-nx/ui-web'
import {useAppDispatch, useAppSelector} from '@monorepo-nx/hooks'
import {getRelatedNewsAC} from '@monorepo-nx/redux/actions'


export const RelatedNews = () => {
  const {relatedNews} = useAppSelector((store) => store.reducer.newsList)
  const {relatedNewsError} = useAppSelector(store => store.reducer.errors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRelatedNewsAC())
  }, [dispatch])

  return (
    <div>
      <News
        news = {relatedNews}
        error = {relatedNewsError}
        title = 'Related News'
      />
    </div>
  )
}
