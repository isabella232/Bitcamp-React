import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  // Components must have a return statement
  return (
    <div>
      <h1>Henry Starman</h1>
      <p>I love JavaScript</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)