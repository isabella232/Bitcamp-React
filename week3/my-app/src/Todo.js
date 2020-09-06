import React from 'react'

export default function Todo({todo, toggleTodo}) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    
    return (
        <div class = "todo-item">
            
            <input type = "checkbox" checked = {todo.complete}            
            onChange = {handleTodoClick}/> 
            <p style = {todo.complete ? completedStyle: null}>{todo.name}</p>

           
        </div>
    )
}
