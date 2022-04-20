import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
} from '../constants'

export const setLatestNews = (payload: any) => ({
  type: SET_LATEST_NEWS,
  payload,
})

export const setPopularNews = (payload: any) => ({
  type: SET_POPULAR_NEWS,
  payload,
})
