# Q4 JavaScript not working in JSX

My code is able to run but for some reason instead of it displaying the value of my variables, it just displays the variables names themselves.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function SayMyName() {
  const firstName = "Daniel"
  const lastName = "Kim"
    
  return (
    <div className="greeting">
      <h1>Hello Bit Squad!</h1>
      <h2>Let's all give a warm welcome to firstName + " " + lastName!</h2>
    </div>
  )   
}

ReactDOM.render(
  <SayMyName />,
  document.getElementById('root')
)
```

