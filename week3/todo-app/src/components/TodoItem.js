import React, { useContext } from 'react'
import { ToggleContext } from '../contexts/ToggleContext'

export default function Todo({ todo }) {
  const { toggleTodo } = useContext(ToggleContext)

  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  }

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      />
      <p style={todo.complete ? completedStyle : null}>{todo.name}</p>
    </div>
  )
}
