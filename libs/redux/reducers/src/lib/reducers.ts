import {combineReducers} from 'redux'

import {newsSlice} from './newsSlice'
import {errorsSlice} from './errorsSlice'
import {filmsSlice} from './filmsSlice'

export const rootReducer = combineReducers({
  newsList: newsSlice.reducer,
  errors: errorsSlice.reducer,
  films: filmsSlice.reducer,
})
