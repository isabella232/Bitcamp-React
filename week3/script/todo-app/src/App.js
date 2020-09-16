import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import { ToggleContext } from './contexts/ToggleContext'
import TodoControls from './components/TodoControls'

function App() {
  const LOCAL_STORAGE_KEY = 'todo.todo_key'
  const [todos, setTodos] = useState([])

  //Display stored Todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //Store our Todos
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  return (
    <div className="todo-list">
      <ToggleContext.Provider value={{ toggleTodo }}>
        <TodoList todos={todos} />
      </ToggleContext.Provider>
      <TodoControls todos={todos} setTodos={setTodos} />
      <div id="counter">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </div>
  )
}

export default App
