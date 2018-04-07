import React from 'react'
import TodoListContainer from '../containers/TodoListContainer.js'
import AddTodo from "../containers/AddTodo.js"

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoListContainer />
    </div>
  )
}

export default App