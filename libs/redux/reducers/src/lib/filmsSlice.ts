import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {FilmsStateType, FilmType} from '@monorepo-nx/types'

const initialState: FilmsStateType = {
 films: [],
}

export const filmsSlice = createSlice<FilmsStateType, SliceCaseReducers<FilmsStateType>, string>({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmType[]>): void => {
      state.films = action.payload
    },
  }
})

export const {setFilms} = filmsSlice.actions
