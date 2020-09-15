# Q5 Syntax Error: Unexpected Token

For some reason I am getting a syntax error from the compiler. The problem is in my JavaScript injection into JSX. I don't understand what's wrong with it. The injection is perfectly legal JavaScript code.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function OneCondition() {
  const firstName = "Daniel"
  
  return (
    <div className="greeting">
      <h1>Hello Bit Squad!</h1>
      <h2>
        {
          if (firstName === "") {
            `Happy to see all your faces!`
          } else {
            `Let's all give a warm welcome to ${firstName}`
          }
        }
      </h2>
    </div>
  )   
}

ReactDOM.render(
  <OneCondition />,
  document.getElementById('root')
)
```

