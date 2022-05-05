import {GET_LATEST_NEWS, GET_POPULAR_NEWS} from '@monorepo-nx/redux/constants'


export const getLatestNewsAC = () => ({
  type: GET_LATEST_NEWS
})

export const getPopularNewsAC = () => ({
  type: GET_POPULAR_NEWS
})
