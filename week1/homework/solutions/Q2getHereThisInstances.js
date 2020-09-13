import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <h1>Big h1 tag</h1>
  )
}

ReactDOM.render(
	<App />, //Needed to turn App into an instance
  document.getElementById('root')
)