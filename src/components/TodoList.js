import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos }) => {
  debugger
  return (
    <ul>
      { todos.map(todo => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </ul>
  )
}

export default TodoList