import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TodoControls({ todos, setTodos }) {
  const todoNameRef = useRef()

  function handleAddTodo() {
    const newTodoName = todoNameRef.current.value
    if (newTodoName === '') return
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), name: newTodoName, complete: false },
      ]
    })
    todoNameRef.current.value = null
  }

  function handleOnClear() {
    const newTodos = todos.filter((todo) => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="button-controls">
      <input type="text" ref={todoNameRef} />
      <button id="add-todo" onClick={handleAddTodo}>
        Add
      </button>
      <button id="clear-todo" onClick={handleOnClear}>
        Clear Complete
      </button>
    </div>
  )
}

export default TodoControls
