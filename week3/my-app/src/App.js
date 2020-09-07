import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

function App() {

  const LOCAL_STORAGE_KEY = 'todo.todo_key'

  const [ todos, setTodos] = useState([])
  const todoNameRef = useRef()  

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(){
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos( prevTodos => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
      })
      todoNameRef.current.value = null
  }

  function handleOnClear() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (

    <div class = "todo-list">
      <TodoList todos = { todos } toggleTodo = {toggleTodo}/>
      
      <div class = "button-controls">
        <input ref = {todoNameRef} type ="text"/>
        <button id = "add-todo" onClick = {handleAddTodo}>Add Todo</button>
        <button id = "clear-todo" onClick = {handleOnClear}>Clear Complete</button>
      </div>
      
      <div id = "counter">{todos.filter(todo => !todo.complete).length} left to do</div>

    </div>
    
  )
}

export default App;
