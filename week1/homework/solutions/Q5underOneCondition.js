import React from 'react'
import ReactDOM from 'react-dom'

function OneCondition() {
  const firstName = "Daniel"
  
  //Conditions cannot be injected into JSX
  let greeting;
  if (firstName === "") {
    greeting = `Happy to see all your faces!`
  } else {
    greeting = `Let's all give a warm welcome to ${firstName}`
  }

  return (
    <div className="greeting">
      <h1>Hello Bit Squad!</h1>
      <h2>
        {greeting}
      </h2>
    </div>
  )   
}

ReactDOM.render(
  <OneCondition />,
  document.getElementById('root')
)