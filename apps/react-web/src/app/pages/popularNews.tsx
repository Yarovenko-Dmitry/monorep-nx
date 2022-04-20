import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {News} from '../components/news/news'
import {GET_POPULAR_NEWS} from '../redux/constants'

export const PopularNews = () => {
  // @ts-ignore note
  const {popularNews} = useSelector(store => store?.news || {})
  // @ts-ignore note
  const {popularNewsError} = useSelector(store => store?.errors || {})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: GET_POPULAR_NEWS})
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
