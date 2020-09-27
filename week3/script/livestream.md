# Week 3

This week we'll be going over the `useEffect`, `useRef`, and `useContext` hooks.

### useEffect

The useEffect hook can be viewed as a combination of the class lifecycle methods componentDidMount, componentDidUpdate and componentDidUnmount and it enables us to add side effects when our component renders. By using this hook, we are telling our code that we need to do something or have an effect after each render. UseEffect by default will run after the initial render or mount and after each update and it allows us to access our state variables and our props without the need of an API to read them.

```jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')

  //Similar to cDM and cDU
  useEffect(() => {
    document.title = `My name is ${name}`
    console.log(`RENDER`)
  })

  const handleChange = (e) => {
    const newName = e.target.value
    setName(newName)
  }

  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default App
```

`useEffect` will be called for each update so everytime the user enters into the input line the useEffect hook will be called resulting in a console.log with 'Render'

```jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const [timesUpdated, setTimesUpdated] = useState(0)

  //Similar to cDM and cDU
  useEffect(() => {
    document.title = `My name is ${name}`
    setTimesUpdated((prevValue) => prevValue + 1)
  })

  const handleChange = (e) => {
    const newName = e.target.value
    setName(newName)
  }

  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" value={name} onChange={handleChange} />
      <p>Times updated: {timesUpdated}</p>
    </div>
  )
}

export default App
```

Have to make a change here. useEffect updates the state value counting the number of times the screen updates. This state value is outputed in the JSX so everytime it updates in the useEffect, it is displayed which is considered a new render and prompts the useEffect. This causes an infinite loop of useEffect calls and state updates.

```jsx
useEffect(() => {
  document.title = `My name is ${name}`
  setTimesUpdated((prevValue) => prevValue + 1)
}, [name])
```

`useEffect` can have a return statement

```jsx
useEffect(() => {
  document.title = `My name is ${name}`
  setTimesUpdated((prevValue) => prevValue + 1)
  console.log(`Changed Title`)
  return () => {
      console.log(`Clean Up Step`)
  }
}, [name])
```





Let's show an example with event listeners

**App.js**

```jsx
import React, { useState, useEffect } from 'react'
import Width from './Width'

function App() {
  const [showWidth, setShowWidth] = useState(false)

  return (
    <div>
      {showWidth && <Width />}
      <button onClick={() => setShowWidth((prev) => !prev)}>
        Toggle Show Width
      </button>
    </div>
  )
}

export default App
```

**Width.js**

```jsx
import React, { useEffect, useState } from 'react'

function Width(props) {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log(`Added Event Listener`)

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log(`Removed Event Listener`)
    }
  }, [])

  return (
    <div>
      <h1>Behold, the window's width!</h1>
      <h2>{windowWidth}</h2>
    </div>
  )
}

export default Width

```
Empty Array passed in to useEffect as parameter so it is only called on mount. Created an event listener that will call handleResize when the window changes size. The useEffect hook also has a return statement. In this case, in our return we remove our eventListener. The return statement runs whenever we unmount and acts as a clean up for the actions that were going on in the useEffect hook.

### useRef

The useRef hook returns a mutable object or an object that can be changed whose property `.current` is initialized to the passed argument. This hook acts like a box that holds a mutable value in its `.current` property. Refs can be used to access DOM nodes using `ref = {createdRef}` which will set the `.current` property to the DOM node value whenever it updates. An interesting point about this hook is that mutating the `.current` property does not cause a rerender.

Show a ref

```jsx
import React, { useRef } from 'react'

function App() {
  const inputRef = useRef()

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>
        Show Ref
      </button>
    </div>
  )
}

export default App
```
UseRef does not cause your component to rerender. UseRef is similar to useState such that it stays between renders. So in this case, the input from the user is stored in the useRef var and then it can be output in the console when the button Show Ref is finally clicked.

Focus Ref

```jsx
import React, { useRef } from 'react'

function App() {
  const inputRef = useRef()

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  )
}

export default App
```

Can also be used to update variables without rerendering like useState. 

Sets focus to where the useRef hook is which is the the input box. So when the button is clicked, the focus will go to input and prompt the user to type.

**App.js**

```jsx
import React, { useState } from 'react'
import Hello from './Hello'

function App() {
    const [showHello, setShowHello] = useState(true)
    
    return (
    	<div>
        	{ showHello && <Hello />}
            <button onClick = {() => setShowHello(prev => !prev)}>Toggle Hello</button>
        </div>
    )
}

export default App
```
New App.js ->
```jsx
import React, { useState, useRef } from 'react'
import Hello from './Hello'

function App() {
    const [showHello, setShowHello] = useState(true)
    const renders = useRef(0)

    function helloRender() {
      console.log('Hello renders: ', renders.current++)
      setShowHello(prev => !prev)
    }
    return (
    	<div>
          { showHello && <Hello />}
          
          <button onClick = {helloRender}>Toggle Hello</button>
        </div>
    )
}

export default App
```

**Hello.js**

```jsx
import React, { useRef } from 'react'

function Hello() {
    const renders = useRef(0)
    console.log('Hello renders: ', renders.current++)
    return <div>Hello</div>
}

export default Hello
```

This implements useRef to count the number of renders. Unlike our previous example with useState and useEffect that resulted in an infinite loop, useRef does not cause the component to rerender which enables us to count the number of times we update. 

### useContext

UseContext hook shares data that can be considered "Global" for a group of components. The information impacts all of these components so this hook can be implemented to store the global data and avoid prop drilling through multiple intermediate components. 

Do useContext during the construction of Todo

use it instead of prop drilling


### Creating TodoList Steps:

1) In App.js: Create JSX for App.js, add <TodoList/ > component, input, buttons and a div that will count todos left
2) In App.js: Set the State and pass in todos from state as a prop for <TodoList/ > component
3) Go to TodoList.js: Map over the prop todos and return <Todo key = {todo.id} todo = {todo}/>
4) Go to Todo.js: Create JSX -> div with classname "todo-item", inside div create input and todo name:
                                 <input type = "checkbox" checked = {todo.complete}/> 
                               <p style = {todo.complete ? completedStyle: null}>{todo.name}</p>
5) Go to App.js: handleAddTodo function, create useRef var, add to JSX with: onClick = {handleAddTodo}, ref = {todoNameRef}
6) In App.js: Implement useEffect to create local storage of todos, two useEffects, first write one that will store todos passing in the todos, second pass in empty array that
              will load stored todos when page refreshes
7) In App.js: Create ToggleTodos function, takes id as parameter, create copy of todos and finds todo with the id as the param, negates todo.complete and sets the the new todos
8) In App.js: add ToggleTodo as a prop for <TodoList/ > and <Todo/>
9) In Todo.js: create function HandleTodoClick(), add function to JSX button -> onChange = {handleTodoClick}
10) In App.js: create function handleOnClear(), add to JSX button -> onClick = {handleOnClear}
11) In App.js: adjust JSX for counting todos, {todos.filter(todo => !todo.complete).length}
