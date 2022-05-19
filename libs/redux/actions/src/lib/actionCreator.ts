import {GET_FILMS, GET_LATEST_NEWS, GET_POPULAR_NEWS} from '@monorepo-nx/redux/constants'
import {ActionCreatorType} from '@monorepo-nx/types'

export const getRelatedNewsAC: ActionCreatorType = () => ({
  type: GET_LATEST_NEWS
})

export const getPopularNewsAC: ActionCreatorType = () => ({
  type: GET_POPULAR_NEWS
})

export const getFilmsAC: ActionCreatorType = () => ({
  type: GET_FILMS
})
