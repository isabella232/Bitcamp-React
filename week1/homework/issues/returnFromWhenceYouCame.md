# Q3 Nothing was returned from render

My App component is broken, I am getting an error that nothing was returned from render, but clearly I should be displaying an h1 and a p tag, no clue what's wrong.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  <div>
    <h1>Henry Starman</h1>
    <p>I love JavaScript</p>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

