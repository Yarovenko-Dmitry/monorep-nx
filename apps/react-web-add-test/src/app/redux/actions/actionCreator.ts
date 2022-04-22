import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
} from '../constants'


export const getLatestNews = () => ({
  type: GET_LATEST_NEWS
})

export const getPopularNews = () => ({
  type: GET_POPULAR_NEWS
})
