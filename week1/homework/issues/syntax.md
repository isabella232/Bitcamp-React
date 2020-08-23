# Homework

When the `App` file contains `export default App` you may assume it is being rendered in another location.

1.

```javascript
const hello = (
    <h1>Hello Bit Squad!</h1>
    <p>Today we are learning about JSX</p>
)
```

2.

```javascript
const hello = (
    <div id="greeting">
        <h1>Hello Bit Squad!</h1>
        <p>Today we are learning about JSX</p>
    </div>
)

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

3.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
    	<h1>Big h1 tag</h1>
    )
}

ReactDOM.render(
	<App>,
    document.getElementById('root')
)
```

4.

(Assume these files are in the same directory)

**App.js**

```javascript
import React from 'react'

function App() {
    return (
        <div>
            <h1>Henry Starman</h1>
            <p>I love JavaScript and Food!</p>
            <ul>
                <li>Chipotle</li>
                <li>Five Guys</li>
                <li>Ichiran</li>
            </ul>
        </div>
    )
}
```

**index.js**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
	<App />,
    document.getElementById('root')
)
```

5.

```javascript
import React from 'react'

function App() {
    <div>
        <h1>Henry Starman</h1>
    	<p>I love JavaScript</p>
    </div>
}

export default App
```

6.

```javascript
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

7.

```javascript
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

8.

```javascript
import React from 'react'

function Mailbox() {
    const unreadMessages = ['React', 'Re: React', 'Re:Re: React']
    
    return (
    	<div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && You have {unreadMessages.length} unread messages.}
    	</div>
    )
    
}

export default Mailbox
```

9.

Hint: one character off

```javascript
import React from 'react'

function App() {
    return <img src="https://tinyurl.com/y4q4tfs6" alt="some image" >
}

export default App
```

10.

```javascript
import React from 'react'

function App() {
    const favoriteFoods = [
        'Pizza', 
        'Ramen', 
    ]
    
    const favFoodsJSX = favoriteFoods.map((food, i) => {
        <li key={'food'}>{food}</li>
    })
    
    return (
        <div>
            <h1>Best Eats</h1>
            <ul>
                {favFoodsJSX}
            </ul>
		</div>
    )
}
```



