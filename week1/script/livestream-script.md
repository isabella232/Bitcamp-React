# Intro to React.js

### Week 1

#### What is React?

It is a JavaScript Library Developed by Facebook used for constructing user interfaces.

React is huge and is still growing rapidly! It is one of the most beloved and wanted web frameworks as seen from stack overflow's 2020 developer survey. 

Why is it so special?

- web pages can be split up in sections or Components (show examples of actual websites)
- Show a barebones minimalist view of a webpage
- Easy to make front end framework
- dynamic at its core

```javascript
const hello = <h1>Hello Bit Squad!</h1>
```

Above is something you might see in a react project. This is called JSX (JavaScript XML). It is a combination of JavaScript and HTML and it was allows is to write HTML in React. You will not be able to write this in a plain JS or HTML file (try to run and show that it fails)

```javascript
import React from 'react'

const hello = <h1>Hello Bit Squad!</h1>
```

If we import React then we are able to run the file so the JSX is secretly using the React import somehow but we'll get to that part later.

Right now we can't see our greeting and that's because it's not being rendered

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const hello = <h1>Hello Bit Squad!</h1>

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

The way that we render our project is through the ReactDOM. The render method takes two required arguments, a JSX element and a container for the JSX. Within index.html we'll see this line:

```html
<div id="root"></div>
```

The ReactDOM will place our 'hello' element within the root div container.  (There are also a few other API calls with ReactDOM {`hydrate()`, `unmountComponentAtNode()`, `findDOMNode()`, `createPortal()` } but we won't be going over them)

But what if we want to add more than just one line into the HTML?

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const hello = (
    <h1>Hello Bit Squad!</h1>
    <p>Today we are learning about JSX</p>
)

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

We have to wrap our JSX in parentheses and then we can write a multiline JSX element. However, the element has to be just one item! So the above will not work. But, what if we try placing all of our items in a box? A box is technically one entity...

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const hello = (
    <div>
        <h1>Hello Bit Squad!</h1>
        <p>Today we are learning about JSX</p>
    </div>
)

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

The <div> tags can be used as our boxes, but container is the proper term so I'll be calling it that. From the above we can also see that we can nest elements inside other elements just like in HTML. Now our code shows no errors and runs smoothly! (JSX has to have only one outermost element).

### Attributes

JSX elements can have attributes just like HTML elements and they are written much in the same way,

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

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

**EXERCISE**

Create your own JSX

1. Add imports
2. Create at least two JSX elements (Don't forget to put them in a box)
3. Give an element an `id` attribute
4. Render your JSX

### JSX-less React

However the attributes are not identical to what they are in pure HTML. JSX uses camelCase so onclick is changed to onClick and there are some reserved words that are not allowed in JSX like class. If you want to add class names to a JSX elements you have to write className instead. This is because JSX is actually just syntactic sugar. All of your JSX first gets compiled to a React API call. That being React.createElement(...).

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

//These are identical and will render the same thing
const hello = <h1>Hello Bit Squad!</h1>
const hello2 = React.createElement('h1', null, 'Hello Bit Squad!')

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

The central argument createElement takes are the attributes of the element as an object. So if I were to add an id it would look like this

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

//These are identical and will render the same thing
const hello = <h1 id="header">Hello Bit Squad!</h1>
const hello2 = React.createElement('h1', { id: "header" }, 'Hello Bit Squad!')

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

But if we do class...

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

//These are identical and will render the same thing
const hello = <h1 class="header">Hello Bit Squad!</h1>
const hello2 = React.createElement('h1', { class: "header" }, 'Hello Bit Squad!')

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

Then it will still work on modern JavaScript but breaks on older versions so the Developers of React chose to go with className. Here we also see why we have to import React when using JSX, because once compiled, it gets translated to a call to the React API

The more astute of you may have already noticed that because JSX is just syntactic sugar then you don't actually have to use it. And that's correct. Heres an earlier example with all the JXS replaced

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const hello = React.createElement("div", { id: "greeting" },
                                 	React.createElement("h1", null, "Hello Bit Squad!"),
                                  	React.createElement("p", null, "Today we are learning about JSX")
                                 )

ReactDOM.render(
	hello,
	document.getElementById('root')
)
```

But you either already know or *should* know HTML so I'd recommend using JSX. I also think the JSX looks much nicer (fyi you can do something like `e = React.createElement`to make the non JSX version look a bit cleaner too)

Only the differences get updated when calling ReactDOM.render, so

```javascript
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```

This is also where I want to say, JSX elements are treated as JS expressions and can be used as such. Saved as variables, passed to functions, **returned from functions**, stored in data structures, etc.

### Self Closing Tags

Another small difference between HTML and JSX is that if you use any self closing tags you need to place the '/' before the end of the tag. It is legal to leave it out in HTML but its required in JSX, heres an example.

```html
Fine in HTML with a slash:

  <br />

Also fine, without the slash:

  <br>
```

```html
Fine in JSX:

  <br />

NOT FINE AT ALL in JSX:

  <br>
```

### Functional Components

Now we finally get to creating functional components in React. A functional component is basically just a JavaScript function. The naming convention for all React components is camel case and starting with a capital letter.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    
}
```

Another rule of functional components is they have to **return** some JSX to be rendered. In ReactDOM.render we can create an instance of our component by writing its name and wrapping it in JXS tags.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
    	<ul>
            <li>Beep</li>
            <li>Boop</li>
            <li>I am Robot</li>
        </ul>
    )
}

ReactDOM.render(
	<App />,
    document.getElementById('root')
)
```

We used a self closing tag to for the instance of our component but this doesn't have to be the case. Sometimes you will want to place other elements inside your components and you are able to do that as well. 

Now create your own functional component. You'll want to do the following:

**EXERCISE**

1. Add Imports
2. create a functional component containing:
   1. An h1 heading with your name
   2. A paragraph with a short description of you
   3. A list (ordered or unordered) which contains some of your favorites restaurants
3. Render your component

(GIVE THEM A COUPLE MINUTES TO TRY THE EXERCISE BEFORE GOING OVER IT YOURSELF)

### Importing / Exporting Components

We wouldn't want to have all of our components in one file. For even a small project that is very cumbersome so as you might have already guessed, we can export and import our components to other locations.

Let's say we have `App.js` and `index.js` side by side and we want to export our App Component to `index.js`. We can achieve that like so,

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

export default App
```

**index.js**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './App'

ReactDOM.render(
	<App />,
    document.getElementById('root')
)
```

**EXERCISE**

1. Set up `index.js`

If you are familiar with ES6 JavaScript which you guys probably should be then exporting in this way ought be second nature. Once a component is imported, you create an instance of it in the same way as we saw before. This allows us to keep ReactDOM.render within index and importing and rendering the main file.

### Creating a Tree

Let's go back to `App.js`, If this were an actual website we'd probably want to have something like nav bar with some links to other parts of the website and probably also a footer which contains some information, maybe a link to an FAQ page and some other related links. So let's create a starter template for these.

```javascript
import React from 'react'

function App() {
    return (
        <div>
        	<nav>
        		<h1>The Best Website!</h1>
        		<ul>
        			<li>Home</li>
       				<li>Page 2</li>
        		</ul>
        	</nav>
        	<h1>Henry Starman</h1>
        	<p>I love JavaScript and Food!</p>
            <ul>
                <li>Chipotle</li>
                <li>Five Guys</li>
                <li>Ichiran</li>
            </ul>
        	<footer>This site was created in 2020</footer>
        </div>
    )
}

export default App
```

Hmm, that's a lot of stuff to place together. And as you can guess when the website gets big and complicated, it's gonna be very hard to read the JSX and edit it properly because we have all of these sections of JSX spaghetti-ed together when they don't have anything to do with each other.

It doesn't make sense to write websites like this because its gonna get unbearable to read. But we can think of a website as a collection of components on a page. And this is exactly how React wants us to think! Instead of constructing the navbar in App, we can think of it as its own component and place it into its own file to make it easier to manage and while we are at it, why not do this with the main content and the footer.

**MyNavBar.js**

```javascript
import React from 'react'

function MyNavBar() {
	return (
    	<nav>
            <h1>The Best Website!</h1>
            <ul>
                <li>Home</li>
                <li>Page 2</li>
            </ul>
        </nav>
    )
}

export default MyNavBar
```

(Notice that we don't have to encapsulate this in a `<div>`container because we only have one outermost element `<nav>)

**MyMain.js**

```javascript
import React from 'react'

function MyMain() {
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

export default MyMain
```

**MyFooter.js**

```javascript
import React from 'react'

function MyFooter() {
	return (
    	<div>
        	<footer>This site was created in 2020</footer>
        </div>   
    )
}

export default MyFooter
```

We'll place all of the files above into the components folder. For a real website, you're going to have a large amount of components so storing them all within the same folder isn't the best thing and properly organizing your components is good to do but for the sake of this tutorial we'll just put all the components into the component folder.

**Then in App.js**

```javascript
import React from 'react'
import MyNavBar from './components/MyNavBar'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'

function App() {
    return (
    	<div>
        	<MyNavBar />
        	<MyMain />
        	<MyFooter />
        </div>
    )
}

export default App
```

Much easier to read what's being rendered in `App`! 

We take this concept even further...

A navbar is composed of many parts, It typically has a logo, some links to other sections of the website, usually a search bar, and maybe a few other things (USE REACTJS.ORG / TWITCH.TV OR SOME OTHER WEBISTE AS AN EXAMPLE). That is quite a lot to insert into a single component, so maybe we can think of these smaller sections of the navbar as their own components. We'll try and do just that by turning our list of links into its own component.

**NavLinks.js**

```javascript
import React from 'react'

function NavLinks() {
    return (
    	<ul>
        	<li>Home</li>
        	<li>Page 2</li>
        </ul>
    )
}

export default NavLinks
```

**MyNavBar.js**

```javascript
import React from 'react'
import NavLinks from './NavLinks'

function MyNavBar() {
    return (
    	<nav>
        	<h1>The Best Website!</h1>
        	<NavLinks />
        </nav>
    )    
}

export default MyNavBar
```

![React-Tree](C:\Users\henry\AppData\Roaming\Typora\typora-user-images\image-20200822221831330.png)

Here we can see that the structure of our components looks like a tree, and this is no accident. `App` is the root of the component tree with three children and `MyNavBar` has a child of its own as well. Next week we'll get to see how the components can pass information between them through something called props and another thing called state.

**EXERCISE**

1. Create a Header component
2. Create a MainContent Component
3. Create a Footer Component
4. Render all your components in App

Now to get to the interesting part about JSX. If you recall, JSX stands for JavaScript XML. At the moment we've basically only been writing a version of HTML that lets you create your own tags and components, but we haven't seen much of the JavaScript side of JSX, and that part's more interesting, and I'm getting bored, so we'll jump to that!

### JavaScript Injection

Time to talk about JavaScript injections in JSX. Going from JSX to JavaScript and back!

All of our components up the this point begin with a return statement, but as programmers we know that a lot of code can come before the return statement and earlier we saw that we could assign JSX to variables because JSX is treated as a JavaScript expression. So let's explore this a bit more by creating a new `App.js` file

```javascript
import React from 'react'

function App() {
    const firstName = "Daniel"
    const lastName = "Kim"
    
    return (
    	<div className="greeting">
        	<h1>Hello Bit Squad!</h1>
        	<h2>Let's all give a warm welcome to {firstName + " " + lastName}!</h2>
        </div>
    )   
}

export default App
```

If you insert curly braces in JSX, you'll be able to write JavaScript between then. Obviously, If the braces were removed here then it will literally be interpreted as `Let's all give a warm welcome to firstName + " " + lastName!`. This gives JSX a lot of power, but because of the way JSX it is compiled there is a small caveat. We'll get into that right after we tackle event handling.

### Event Handling

In the code we are simply rendering an image of a cat and when you click on the cat it turns into a dog. We do this with the `onClick` attribute. As stated before, JSX attributes have to be written in camel case. Then we set `onClick` equal to our handler function, and we can achieve this by first wrapping it in curly braces for a JavaScript injection!

```javascript
import React from "react";
import "./styles.css";

//This one might get changed later
function App() {
  function makeDoggy(e) {
    e.target.setAttribute(
      "src",
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg"
    );
    e.target.setAttribute("alt", "doggy");
  }

  return (
    <img
      src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
      alt="kitty"
      onClick={makeDoggy}
    />
  );
}
/* CSS
img {
  position: fixed;
  width: 90%;
  top: 5%;
  left: 5%;
  cursor: pointer;
}
*/

export default App
```

### JSX Conditionals

##### If does not work

Let's get back to that small caveat, you cannot use if statements inside of JSX :(

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

The above code will not execute and will return errors! But fear not, there are several work arounds to this! Personally, I think it's best that you are unable to do this, because it makes the code more ugly and harder to read anyway. We'll try putting the if statement before the return  and see how well that works.

```javascript
import React from 'react'

function App() {
    const firstName = "Daniel"
    
    let greeting;
    if (firstName === "") {
        greeting = <h2>Happy to see all your faces!</h2>
    } else {
        greeting = <h2>Let's all give a warm welcome to {firstName}</h2>
    }
    
    return (
    	<div className="greeting">
        	<h1>Hello Bit Squad!</h1>
        	{greeting}
        </div>
    )
}

export default App
```

The above is an easy fix to the problem. Here I made a new variable called `greeting` and set it equal to some JSX and then injected `greeting` into the return statement. Alternatively I could have made `greeting` a string and injected the string between <h2> tags in the return statement. This is not the only way to use conditionals in JSX though. We'll explore two more ways with the ternary operator and `&&`. First, ternary...

### Ternary Operator

```javascript
import React from 'react'

function App() {
    myMoney = 70
    
    return (
    	<h1>
        	{myMoney >= 100 ? "I'm rich, I can buy anything!" : "I can't afford that!"}
        </h1>
    )
}

export default App
```

Many of you have heard of the ternary operator but maybe you are the the type of programmer to use it much. The first part of the ternary before the `?` is your conditional. Then after the `?` but before the `:` we have an expression which is returned if the conditional is true. Finally, the part after the `:` is returned if the conditional is false. In this case `"I can't afford that!"`will be returned because `myMoney` is less than `100`. This operator is best used when you want to return one of two things.

### && Operator

Next we have the `&&` operator. This operator is used when you want something to render sometimes but not all the time. For example, let's say you want to give the user of your app a notification that tells them how many unread messages they have but you don't want to show that notification when they have no unread message...

```javascript
import React from 'react'

function Mailbox() {
    const unreadMessages = ['React', 'Re: React', 'Re:Re: React']
    
    return (
    	<div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    	</div>
    )
    
}

export default Mailbox
```

If `unreadMessages.length > 0` then the <h2> will be rendered, otherwise it will not be rendered.

#### .map in JSX

A very useful array method for JSX is`.map()`and it comes up often in React. Creating a list of JSX elements is straight forward with `.map()`. Here I'll just make a list of some foods I like and quickly map them to JSX with ease without having to repeatedly type <li> over and over.

```javascript
import React from 'react'

function App() {
    const favoriteFoods = [
        'Pizza', 
        'Ramen', 
        'Cheeseburgers', 
        'Tacos'
    ]
    
    const favFoodsJSX = favoriteFoods.map(food => {
        <li>{food}</li>
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

#### Keys in JSX

When making JSX lists sometimes we'll want to include the `key` attribute. The value of `key` should be set to a unique value. React uses these keys to keep track of lists (but it doesn't have to be a list!). A list only needs to have `keys` if the list-items have memory between renders. For example, a Todo list where React should remember which items have been checked off as complete. Or if the order of the list might get shuffled. A list of search results might get shuffled from one render to the next. If neither of those are the case then you won't have to worry about keys.

Keys are very simple to implement and can be done alongside `.map()`

```javascript
import React from 'react'

function App() {
    const favoriteFoods = [
        'Pizza', 
        'Ramen', 
        'Cheeseburgers', 
        'Tacos'
    ]
    
    const favFoodsJSX = favoriteFoods.map((food, i) => {
        <li key={'food_${i}'}>{food}</li>
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

The `.map()`method takes a second optional argument which is the array index of the current element. So we can simply provide a descriptor and the array index to each list-item's key for a unique identifier. The usefulness of keys will become more concrete once we create our own Todo list.

**EXERCISE**

1. Create an array of your favorite travel destinations
2. Map the destinations to list-items and give each one a unique key
3. render a list with your list-items and provide it with a descriptive h1 header

So far all I've shown you is JSX which can be thought of as A D V A N C E D HTML and you'll be using it a lot in React but we have yet to cover the most important areas of React, that being props and state. These are what makes React extremely useful and fun to use, but they can be a little confusing to newcomers so they deserve their own week.