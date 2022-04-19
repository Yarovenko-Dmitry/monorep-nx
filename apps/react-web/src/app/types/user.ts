export type UserStateType = {
  users: any[],
  loading: boolean,
  error: null | string
}

export enum UserActionsTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export type UserActionType =
  | FetchUsersActionType
  | FetchSuccessActionType
  | FetchErrorActionType

type FetchUsersActionType = {
  type: UserActionsTypes.FETCH_USERS,
}

type FetchSuccessActionType = {
  type: UserActionsTypes.FETCH_USERS_SUCCESS,
  payload: any[]
}

type FetchErrorActionType = {
  type: UserActionsTypes.FETCH_USERS_ERROR,
  payload: string
}
