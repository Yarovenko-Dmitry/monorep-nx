import {combineReducers} from 'redux'
import {newsReducer} from './news'
import {errorsReducer} from './errors'

export const reducer = combineReducers({
  news: newsReducer,
  errors: errorsReducer,
})

