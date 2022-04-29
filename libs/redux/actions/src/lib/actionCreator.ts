import {GET_LATEST_NEWS, GET_POPULAR_NEWS} from '@4-mono-all/redux/constants'


export const getLatestNewsAC = () => ({
  type: GET_LATEST_NEWS
})

export const getPopularNewsAC = () => ({
  type: GET_POPULAR_NEWS
})
