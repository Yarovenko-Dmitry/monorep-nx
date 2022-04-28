import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import {NewsStateType, SingleNewsType} from '@4-mono-all/types'


const initialState: NewsStateType = {
  latestNews: [],
  popularNews: [],
}

export const newsSlice = createSlice<NewsStateType, SliceCaseReducers<NewsStateType>, string>({
  name: 'news',
  initialState,
  reducers: {
    setLatestNews: (state, action: PayloadAction<SingleNewsType[]>): void => {
      state.latestNews = action.payload
    },
    setPopularNews: (state, action: PayloadAction<SingleNewsType[]>): void => {
      state.popularNews = action.payload
    },
  }
})

export const {setLatestNews, setPopularNews} = newsSlice.actions
