import {TodoActionsTypes, TodoActionType, TodoStateType} from '../../types/todo'


const initialState: TodoStateType = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReduser = (state = initialState, action: TodoActionType): TodoStateType => {
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODOS:
      return {...state, loading: true}
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return {...state, loading: false, error: action.payload}
    case TodoActionsTypes.SET_TODO_PAGE:
      return {...state, loading: false, page: action.payload}
    default:
      return state
  }
}
