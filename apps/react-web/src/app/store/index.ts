import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redusers'


export const  store = createStore(rootReducer, applyMiddleware(thunk))



// export const store = configureStore({
//   reducer: {
//     auth: authReducer
//   },
//   middleware: [],
// });
//
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
