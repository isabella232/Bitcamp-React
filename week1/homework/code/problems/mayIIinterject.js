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