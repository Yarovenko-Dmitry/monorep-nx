import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'

import {rootSaga} from '@monorepo-nx/redux/saga'
import {rootReducer} from '@monorepo-nx/redux/reducers'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false,
  })
    .concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)


export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
