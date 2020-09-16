# Week 3

This week we'll be going over the `useEffect`, `useRef`, and `useContext` hooks.

### useEffect

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

`useEffect` will be called for each update so...

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

Have to make a change here

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

### useRef

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

Can also be used to update variables without rerendering like useState

**App.js**

```jsx
import React, { useState } from 'react'
import Hello from './Hello'

function App() {
    const [showHello, setShowHello] = useState(true)
    
    return (
    	<div>
        	{ showHello && <Hello />}
            <button onClick{() => setShowHello(prev => !prev)}>Toggle Hello</button>
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



### useContext

Do useContext during the construction of Todo

use it instead of prop drilling