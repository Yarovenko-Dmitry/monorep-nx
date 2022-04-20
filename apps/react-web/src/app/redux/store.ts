import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducer} from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose

const configureStore = (preloadedState: { [x: string]: any } | undefined) => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})

sagaMiddleware.run(rootSaga)

export default store
