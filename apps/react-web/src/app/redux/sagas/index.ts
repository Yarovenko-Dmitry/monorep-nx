import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {GET_LATEST_NEWS, GET_POPULAR_NEWS} from '../constants'
import {getLatestNews, getPopularNews} from '../../api'
import {setLatestNews, setPopularNews} from '../reducers/NewsSlice'
import {setLatestNewsError, setPopularNewsError} from '../reducers/ErrorsSlice'


export function* handleLatestNews() {
  try {
    const {hits} = yield call(getLatestNews, 'react')
    yield put(setLatestNews(hits))
  } catch {
    yield put(setLatestNewsError('Error fetching latest news'))
  }
}

export function* handlePopularNews() {
  try {
    const {hits} = yield call(getPopularNews)
    yield put(setPopularNews(hits))
  } catch {
    yield put(setPopularNewsError('Error fetching popular news'))
  }
}

export function* watchLatestSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews)
}

export function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews)
}

export default function* rootSaga() {
  yield all([
    fork(watchPopularSaga),
    fork(watchLatestSaga),
  ])
}
