import {GET_LATEST_NEWS, GET_POPULAR_NEWS} from '@monorepo-nx/redux/constants'
import {ActionCreatorType} from '@monorepo-nx/types'


export const getLatestNewsAC: ActionCreatorType = () => ({
  type: GET_LATEST_NEWS
})

export const getPopularNewsAC: ActionCreatorType = () => ({
  type: GET_POPULAR_NEWS
})
