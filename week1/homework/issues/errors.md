# Fixing Errors in JSX

When writing code with React, developers will have to write a lot of JSX. Unfortunately, developers are only human and humans make a lot of mistakes. It is important to catch those mistakes and understand why they are wrong.

Each of the following questions contain compiler and runtime errors. Provide a short explanation (1-2 sentences) of why you think the code is broken or why it will not run as intended. Then make your corrections on the file. Assume each file which contains an `export` is rendered within a different file.

1. **Explanation:** 

```jsx

import ReactDOM from 'react-dom'

const hello = <h1>Hello Bit Squad!</h1>

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

2. **Explanation:** 

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
    	<h1>Big h1 tag</h1>
    )
}

ReactDOM.render(
	App,
    document.getElementById('root')
)
```

3. **Explanation:** 

```jsx
import React from 'react'

function App() {
    <div>
        <h1>Henry Starman</h1>
    	<p>I love JavaScript</p>
    </div>
}

export default App
```

4. **Explanation:** 

```jsx
import React from 'react'

function App() {
    const firstName = "Daniel"
    const lastName = "Kim"
    
    return (
    	<div className="greeting">
        	<h1>Hello Bit Squad!</h1>
        	<h2>Let's all give a warm welcome to firstName + " " + lastName!</h2>
        </div>
    )   
}

export default App
```

5. **Explanation:** 

```jsx
import React from 'react'

function App() {
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

export default App
```

6. **Explanation:** 

*Hint: one character off.*

```jsx
import React from 'react'

function App() {
    return <img src="https://tinyurl.com/y4q4tfs6" alt="some image" >
}

export default App
```



