import {UserActionsTypes, UserActionType} from '../../types/user'
import {Dispatch} from 'redux'
import axios from 'axios'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    try {
      dispatch({type: UserActionsTypes.FETCH_USERS})

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      setTimeout(() => {
        dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response.data})
      }, 1000)

    } catch (err) {
      console.log(' err :', err)

      dispatch({
        type: UserActionsTypes.FETCH_USERS_ERROR,
        payload: 'Error fetch  users',
      })
    }
  }
}
