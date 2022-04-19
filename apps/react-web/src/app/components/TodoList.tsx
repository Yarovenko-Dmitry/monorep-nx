import React, {useEffect} from 'react'

import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'

const PAGES = [1, 2, 3, 4, 5]
export const TodoList: React.FC = () => {

  const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
  console.log(' todos :', todos)
  const {fetchTodos, setTodoPage} = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo =>
        <div key = {todo.id}>{todo.id} - {todo.title}</div>
      )}
      <div style = {{display: 'flex'}}>
        {
          PAGES.map(item => (
            <div
              style = {{border: item === page ? '2px solid green' : '1px solid gray', padding: 10}}
              onClick = {() => setTodoPage(item)}
            >
              {item}
            </div>
          ))
        }
      </div>

    </div>
  )
}
