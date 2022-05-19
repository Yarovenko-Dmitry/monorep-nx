import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {ErrorsStateType} from '@monorepo-nx/types'


const initialState: ErrorsStateType = {
  relatedNewsError: '',
  popularNewsError: '',
  filmsError: '',
}

export const errorsSlice = createSlice<ErrorsStateType, SliceCaseReducers<ErrorsStateType>, string>({
  name: 'errors',
  initialState,
  reducers: {
    setRelatedNewsError: (state, action: PayloadAction<string>): void => {
      state.relatedNewsError = action.payload
    },
    setPopularNewsError: (state, action: PayloadAction<string>): void => {
      state.popularNewsError = action.payload
    },
    setFilmsError: (state, action: PayloadAction<string>): void => {
      state.filmsError = action.payload
    },
  }
})

export const {setRelatedNewsError, setPopularNewsError, setFilmsError} = errorsSlice.actions
