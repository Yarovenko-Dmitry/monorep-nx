import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {ErrorsStateType} from '@monorepo-nx/types'


const initialState: ErrorsStateType = {
  latestNewsError: '',
  popularNewsError: '',
  filmsError: '',
}

export const errorsSlice = createSlice<ErrorsStateType, SliceCaseReducers<ErrorsStateType>, string>({
  name: 'errors',
  initialState,
  reducers: {
    setLatestNewsError: (state, action: PayloadAction<string>): void => {
      state.latestNewsError = action.payload
    },
    setPopularNewsError: (state, action: PayloadAction<string>): void => {
      state.popularNewsError = action.payload
    },
    setFilmsError: (state, action: PayloadAction<string>): void => {
      state.filmsError = action.payload
    },
  }
})

export const {setLatestNewsError, setPopularNewsError, setFilmsError} = errorsSlice.actions
