import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {getRelatedNews, getFilms, getPopularNews} from '@monorepo-nx/api'
import {GET_FILMS, GET_LATEST_NEWS, GET_POPULAR_NEWS} from '@monorepo-nx/redux/constants'
import {
  setFilms, setFilmsError,
  setRelatedNews,
  setRelatedNewsError,
  setPopularNews,
  setPopularNewsError
} from '@monorepo-nx/redux/reducers'
import {FilmType} from '@monorepo-nx/types'

export function* handleRelatedNews() {
  try {
    const {hits} = yield call(getRelatedNews, 'react')
    yield put(setRelatedNews(hits))
  } catch {
    yield put(setRelatedNewsError('Error fetching latest news'))
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

export function* handleFilms() {
  try {
    const films: FilmType[] = yield call(getFilms)
    const  wrappedFilms = [{ key: 'empty-left' }, ...films, { key: 'empty-right' }]
    yield put(setFilms(wrappedFilms))
  } catch {

    yield put(setFilmsError('Error fetching films'))
  }
}

export function* watchLatestSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleRelatedNews)
}

export function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews)
}

export function* watchFilmsSaga() {
  yield takeEvery(GET_FILMS, handleFilms)
}

export function* rootSaga() {
  yield all([
    fork(watchLatestSaga),
    fork(watchPopularSaga),
    fork(watchFilmsSaga),
  ])
}
