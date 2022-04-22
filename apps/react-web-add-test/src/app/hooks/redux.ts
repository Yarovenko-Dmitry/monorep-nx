import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {AppDispatchType, RootStateType} from '../redux/store'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()


