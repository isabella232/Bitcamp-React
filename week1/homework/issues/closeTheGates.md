# Q6 Unterminated JSX contents

Dang it, another syntax error. I copied some HTML into a JSX file and I'm getting an unterminated JSX contents error for some reason.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function Image() {
  return <img src="https://tinyurl.com/y4q4tfs6" alt="some image" >
}

ReactDOM.render(
  <Image />,
  document.getElementById('root')
)
```

