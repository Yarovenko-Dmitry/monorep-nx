import {Dispatch} from 'redux'
import axios from 'axios'

import {TodoActionsTypes, TodoActionType} from '../../types/todo'


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActionType>) => {
    try {
      dispatch({type: TodoActionsTypes.FETCH_TODOS})

      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })

      setTimeout(() => {
        dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
      }, 1000)

    } catch (err) {
      console.log(' err :', err)

      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: 'Error fetch todos',
      })
    }
  }
}

export const setTodoPage = (page: number) : TodoActionType => {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}
