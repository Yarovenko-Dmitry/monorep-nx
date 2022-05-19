import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {NewsStateType, SingleNewsType} from '@monorepo-nx/types'


const initialState: NewsStateType = {
  relatedNews: [],
  popularNews: [],
}

export const newsSlice = createSlice<NewsStateType, SliceCaseReducers<NewsStateType>, string>({
  name: 'news',
  initialState,
  reducers: {
    setRelatedNews: (state, action: PayloadAction<SingleNewsType[]>): void => {
      state.relatedNews = action.payload
    },
    setPopularNews: (state, action: PayloadAction<SingleNewsType[]>): void => {
      state.popularNews = action.payload
    },
  }
})

export const {setRelatedNews, setPopularNews} = newsSlice.actions
