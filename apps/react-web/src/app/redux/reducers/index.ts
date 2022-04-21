import {combineReducers} from 'redux'
import {newsSlice} from './NewsSlice'
import {errorsSlice} from './ErrorsSlice'

export const rootReducer = combineReducers({
  newsList: newsSlice.reducer,
  errors: errorsSlice.reducer,
})
