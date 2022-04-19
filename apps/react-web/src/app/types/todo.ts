export type TodoStateType = {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionsTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

export type TodoActionType =
  | FetchTodosActionType
  | FetchSuccessActionType
  | FetchErrorActionType
  | SetTodoPageType

type FetchTodosActionType = {
  type: TodoActionsTypes.FETCH_TODOS
}

type FetchSuccessActionType = {
  type: TodoActionsTypes.FETCH_TODOS_SUCCESS
  payload: any[]
}

type FetchErrorActionType = {
  type: TodoActionsTypes.FETCH_TODOS_ERROR
  payload: string
}

type SetTodoPageType = {
  type: TodoActionsTypes.SET_TODO_PAGE
  payload: number
}
