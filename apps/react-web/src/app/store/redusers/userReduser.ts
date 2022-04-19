import {UserActionsTypes, UserActionType, UserStateType} from '../../types/user'


const initialState: UserStateType = {
  users: [],
  loading: false,
  error: null,
}

export const userReduser = (state = initialState, action: UserActionType): UserStateType => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return {loading: true, error: null, users: []}
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload}
    case UserActionsTypes.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []}
    default:
      return state
  }
}
