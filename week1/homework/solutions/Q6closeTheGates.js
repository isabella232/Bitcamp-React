import React from 'react'
import ReactDOM from 'react-dom'

function Image() {
  // Self closing tags in JSX need the forward slash at the end
  return <img src="https://tinyurl.com/y4q4tfs6" alt="some image" />
}

ReactDOM.render(
  <Image />,
  document.getElementById('root')
)