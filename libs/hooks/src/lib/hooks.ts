import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {AppDispatchType, RootStateType} from '@monorepo-nx/redux'


export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()
