import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {ErrorsStateType} from '@4-mono-all/types'


const initialState: ErrorsStateType = {
  latestNewsError: '',
  popularNewsError: '',
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
  }
})

export const {setLatestNewsError, setPopularNewsError} = errorsSlice.actions
