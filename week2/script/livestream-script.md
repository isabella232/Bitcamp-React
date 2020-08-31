# Week 2

Hi, welcome to the second week of Bit Project's React Bitcamp. Today we'll be covering more aspects of React components. This week will cover passing information between your components in the form of `props` and `state`. As you guys have already seen, a React component is a JavaScript function which returns some JSX. However, one major part of functions we weren't using are parameters. Normally, you are able to pass information into a function and that's exactly what we are going to explore today!

### Props

I'll start by making a simple function in `App.js` and create a child I want to pass information to. I'll be calling the child `contactCard` and I'll explain why soon.

**App.js**

```jsx
import React from 'react'
import ContactCard from './components/ContactCard'

function App() {
  return <ContactCard someAttribute={"I am a prop!"} />
}

export default App

```

**ContactCard.js**

```jsx
import React from 'react'

function ContactCard(props){
  console.log(props)
  return <p>My Prop: {props.someAttribute}</p>
}

export default ContactCard
```

So the way that we can pass information down from a parent component to its child is through the child's props. Props can be thought of as arguments passed to a function and they basically are. It is a strong convention to call your props `props` instead of something else and your props come in the form of an object. So if we log the props that we just passed in we'll see this object.

```jsx
{someAttribute: "I am a prop!"}
```

And when we add more attributes to the instance of `<ContactCard />` then we'll see more fields within the props object. In short, props are the 'arguments' to your components and the way that we pass these 'arguments' is through the components attributes and **ALL** attributes passed to an instance of a component will show up in its props object.

Let's work on something more complicated now.

### Contact Cards

I'll paste in this code here and explain what is going on.

**App.js**

```jsx
import React from "react"

function App() {
  return (
    <div className="contacts" >
      <div className="contact-card">
        <img src="http://placeimg.com/400/200/animals" alt="" />
        <h3>Ziggy</h3>
        <p>Phone: (212) 555-2345</p>
        <p>Email: stretchyboi@me.com</p>
      </div>

      <div className="contact-card">
        <img src="http://placeimg.com/400/300/animals" alt="" />
        <h3>Loki</h3>
        <p>Phone: (212) 555-3456</p>
        <p>Email: literallyagod@yahoo.com</p>
      </div>

      <div className="contact-card">
        <img src="http://placeimg.com/200/100/animals" alt="" />
        <h3>Ganondorf</h3>
        <p>Phone: (212) 555-4567</p>
        <p>Email: xxganonxx@hotmail.com</p>
      </div>
    </div>
  )
}

export default App
```

We can improve this a bit by...

**App.js**

```jsx
import React from "react"
import ContactCard from "./components/contactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  )
}

export default App
```

**contactCard.js**

```jsx
import React from "react"

function ContactCard() {
  return (
    <div className="contact-card">
      <img src="http://placeimg.com/400/300/animals" alt="" />
      <h3>Loki</h3>
      <p>Phone: (212) 555-3456</p>
      <p>Email: literallyagod@yahoo.com</p>
    </div>
  )
}

export default ContactCard
```

But its all the same, let's get props...

**contactCard.js**

```jsx
import React from "react"

function ContactCard(props) {
  const { imageUrl, name, phone, email } = props

  return (
    <div className="contact-card">
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default ContactCard
```

But nothing is getting rendered because we aren't passing 'arguments'.

We can pass props like so (console.log the props)

**App.js**

```jsx
import React from "react"
import ContactCard from "./components/contactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Ziggy"
        imageUrl="http://placeimg.com/400/200/animals"
        phone="(212) 555-2345"
        email="stretchyboi@me.com"
      />
      <ContactCard
        name="Loki"
        imageUrl="http://placeimg.com/400/300/animals"
        phone="(212) 555-3456"
        email="literallyagod@yahoo.com"
      />
      <ContactCard
        name="Ganondorf"
        imageUrl="http://placeimg.com/200/100/animals"
        phone="(212) 555-4567"
        email="xxganonxx@hotmail.com"
      />
    </div>
  )
}

export default App

```

**EXERCISE**

Now I want you guys to try one of these yourselves.

1. Create three instances of Queries in App.js
2. In Queries.js create an `<h3>` for a question and a `<p>` for an answer
3. Pass in a `question` and `answer` into each Queries instance

Do one of these yourselves and the exercise is gonna be...

**Pass Object to Props**

You're probably gonna be passing some JSON in from an API call. This is also a lot of info to pass together so lets turn it into an object.

```jsx
<ContactCard
  contact={{ name: "Ziggy", imageUrl: "http://placeimg.com/400/200/animals", phone: "(212) 555-2345", email: "stretchyboi@me.com" }}"
/>
```

Then we only have to make one change in `contactCard.js` and write `props.contact` instead when deconstructing the object.

```jsx
const { imageUrl, name, phone, email } = props.contact
```



**Using .map()**

.map() is very useful in React. Learning React makes you a better JS programmer or something

Probably gonna fetch from the backend or some other API. Let's imitate that with a contact list file. We'll be using the id in a bit.

**contactList.js**

```jsx
const contactList = [
  {
    id: 1,
    name: "Ziggy",
    imageUrl: "http://placeimg.com/400/200/animals",
    phone: "(212) 555-2345",
    email: "stretchyboi@me.com"
  },
  {
    id: 2,
    name: "Loki",
    imageUrl: "http://placeimg.com/400/300/animals",
    phone: "(212) 555-3456",
    email: "literallyagod@yahoo.com"
  },
  {
    id: 3,
    name: "Ganondorf",
    imageUrl: "http://placeimg.com/200/100/animals",
    phone: "(212) 555-4567",
    email: "xxganonxx@hotmail.com"
  }
]

export default contactList
```

Then in `App.js`

**App.js**

```jsx
import React from "react"
import ContactCard from "./components/contactCard"
import contactList from "./data/contactList"

function App() {
  const contactComponents = contactList.map((contact) => {
    return <ContactCard contact={contact} />
  })

  return <div className="contacts">{contactComponents}</div>
}

export default App
```

But wait there's an issue, each child in a list needs a unique "key" prop. Typically there will be a unique id associated with each piece of info in a database so we can easily use that as our id (it's also good to keep things consistent).

```jsx
import React from "react"
import ContactCard from "./components/contactCard"
import contactList from "./data/contactList"

function App() {
  const contactComponents = contactList.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} />
  })

  return <div className="contacts">{contactComponents}</div>
}

export default App
```

Now we've made this code much shorter while scalable at the same time!

**EXERCISE**

I have provided you with a a list of questions and answers in a file

1. expand upon the last exercise and map each question and answer combo to a Query instance
2. *Optional*: pass a single object in instead of separate question and answer attributes

### State

One rule of props is that you are not supposed to change then within a component otherwise there may be some unintended consequences because React isn't meant to work that way. You wouldn't be able to write, for example,

```jsx
props.name = "Henry"
```

Think of props as constant variables and if you want different props to be given to some instance of a component, you'd have to pass in new attributes. This brings us to state.

I should also mention that there are two ways to write React components. The first is the way they we've been doing and that's through functions. The second is through classes. When writing React components with classes there is some extra overhead to consider and some of it can be confusing to newcomers and that extra overhead makes it a bit harder to read the component which is why I chose to focus on functional components. However, classes also have a bunch more functionality and are more powerful than functions and before 2018 classes were the only way to create stateful components in React. But, in 2018 something magical happened. Hooks were added to React. Basically, Hooks bring all the extra functionality of classes to functional components. The Hook we'll be focusing on today is `useState`.

First, we have to import our  Hook at the top of the file. Then, let's get into what the `useState` Hook does.

```jsx
const [count, setCount] = useState(0)
```

Let's say we want to create a new state called count. We'll call the `useState` hook and then it'll return two values in an array. We can then use array destructuring to give these two items a name. The first value is a variable and the second is a function. The variable contains the current value of that state and its starting value is the argument passed to `useState` so in this case it is `0`. The function is tied to the variable and has one argument. The argument is the new value of the variable. It is a strong convention to name this function `set` followed by the name of the variable. 

More explicitly we can write this as,

```jsx
const [someVar, aFunctionToSetSomeVar] = useState(defaultValueForSomeVar)
```

Let's now write a concrete example to build our intuition, please follow along,

```jsx
import React, { useState } from "react"

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>Value of Count is {count}</h2>
      <button className="red" onClick={decrementCount}>
        Decrement
      </button>
      <button className="green" onClick={incrementCount}>
        Increment
      </button>
    </div>
  )
}

export default App
```

Because of the way Hooks work they cannot be used inside of a condition.

```jsx
if (someCondition) {
    const [count, setCount] = useState(0)
}
```

The above is a big NO NO, since hooks are so great, you must love hooks unconditionally!

EXERCISE

1. Create a fruit state and a state for fruit condition
2. display a random fruit and condition
3. click a button to randomize the fruit and condition

### Child Component Updates Parent Component

Sometimes we want a component to be displayed a little different between renders so we can use state to pass in information to a child and then have that child update the state of the it's parent so the parent can pass in new props to the child instance. Let's see an example.

**App.js**

```jsx
import React, { useState } from "react"
import Child from "./components/child"

function App() {
  const [name, setName] = useState("Daniel")

  const changeName = (newName) => {
    setName(newName)
  }

  return <Child name={name} onChange={changeName} />
}

export default App
```

**child.js**

```jsx
import React from "react"

function Child(props) {
  const handleChange = (e) => {
    const newName = e.target.value
    props.onChange(newName)
  }

  return (
    <div>
      <h1>Hi my name is {props.name}</h1>
      <select onChange={handleChange}>
        <option value="Daniel">Daniel</option>
        <option value="Henry">Henry</option>
        <option value="Jamie">Jamie</option>
      </select>
    </div>
  )
}

export default Child
```

The child is also a stateless component and and cannot change 

Here we have a stateful parent component passing down an event handler to a stateless child component. The child then uses the event handler to update its parent's state. We'll expand on this further in the next lesson. 

### Child Components Update Sibling Components

Many times you'll have two components that are children of the same parent and one child has to pass information to its sibling. This can be done similarly to what we just did but now our first child will contain the event handler to change the state and the sibling will be a presentation component which contains no logic and will only display JSX.

**App.js**

```jsx
import React, { useState } from "react"
import Child from "./components/child"
import Sibling from "./components/sibling"
import intros from "./data/introductions"

function App() {
  const [intro, setIntro] = useState(intros[0])

  return (
    <div>
      <Sibling intro={intro} />
      <Child allIntros={intros} onChange={setIntro} />
    </div>
  )
}

export default App
```

**child.js**

```jsx
import React from "react"

function Child(props) {
  const { allIntros, onChange } = props

  const handleChange = (e) => {
    const newIntroIndex = e.target.value
    const newIntro = allIntros[newIntroIndex]
    onChange(newIntro)
  }

  const namesAsOptions = allIntros.map((intro, i) => {
    return (
      <option key={i} value={i}>
        {intro.name}
      </option>
    )
  })

  return <select onChange={handleChange}>{namesAsOptions}</select>
}

export default Child
```

**sibling.js**

```jsx
import React from "react"

function Sibling(props) {
  const { intro } = props

  return (
    <div className="intro">
      <h1>Introducing {intro.name}!</h1>
      <p>{intro.description}</p>
    </div>
  )
}

export default Sibling
```

**introductions.js**

```jsx
const intros = [
  {
    name: "Daniel",
    description:
      "Hey Y'all. My name is Daniel. I'm the president/founder of Bit Project. I graduated UC Davis with a degree in Electrical and Computer Engineering. I gave up on my masters. I'm really bored so hit me up."
  },
  {
    name: "Michael",
    description:
      "Hey guys, my name's Michael and I'm a Community Manager at Bit Project. I'm a math/cs major at NYU and am a fan of movies, music, and video games, among other things. hmu for movie recs."
  },
  {
    name: "Shreya",
    description:
      "Hey everyone, I’m Shreya and I’m the Director of People/founder at Bit Project. I’m a CSE Major at UC Davis and have an unhealthy obsession with K Dramas :sweat_smile: DM me if you have any drama recommendations or just wanna talk!"
  },
  {
    name: "Henry",
    description:
      "Hi everyone, my name is Henry and I am a graduate student at NYU studying Computer Science. I am a content developer at Bit Project. I love music and gaming, trying to host more games of Among Us so please let us know if you are interested!"
  },
  {
    name: "Jamie",
    description:
      "Hey y'all! I'm Jamie and I just recently joined the marketing team as a graphic designer at Bit Project! I'm currently entering my third year, majoring in design and minoring in wildlife conservation at UC Davis. I'm obsessed with makeup, art, travel, sustainability, and good music, and i'm addicted to Minecraft and Animal Crossing! Feel free to slide in the DM's anytime "
  }
]

export default intros
```

Something worth mentioning again is the use of presentational and logical components. The sibling is a purely presentational component and contains no state. Its only function is to display JSX. This is a common programming pattern in React. We want to do this so the components don't get bloated. We want each component to be modular and have its own unique singular task. This makes debugging the code easier. When there is a logical problem with the code you know that the bug must be occurring in the logical component and if what is getting rendered to the screen looks janky, you know the issues is caused by the presentational component, so you'll have to search less lines of code to pin point your bugs. If this is a project you are working on with other developers or even a personal project you come back to after several months, it's much easier to read and understand small components that aren't bloated with too much information making your coworkers lives and your life easier.

That's going to be it for this week. I have some homework for you guys work on to practice these concepts and next week we'll be covering the remaining Hooks I want to go over and we'll get started on our first mini-project as well! Thanks for coming and I'll see you next week!































VIDEO PLAYER STARTER

**App.js**

```jsx
import React, { useState } from "react"
import videos from "./data/videos"
import Menu from "./components/Menu"
import Video from "./components/Video"

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.deer)

  const chooseVideo = (newVideo) => {
    const newSrc = videos[newVideo]
    setVideoSrc(newSrc)
  }

  const getVideoValues = (videos) => {
    return Object.keys(videos)
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} videoValues={getVideoValues(videos)} />
      <Video src={videoSrc} />
    </div>
  )
}

export default App
```

**Video.js**

```jsx
import React from "react"

function Video(props) {
  const { src } = props

  return (
    <div>
      <video controls autostart="true" autoPlay muted src={src} />
    </div>
  )
}

export default Video

```

**Menu.js**

```jsx
import React from "react"

function Meun(props) {
  const { chooseVideo, videoValues } = props

  const handleClick = (e) => {
    const newVideo = e.target.value
    chooseVideo(newVideo)
  }

  const videoInputsJSX = videoValues.map((value, i) => {
    return (
      <div className="video-inputs">
        <input key={i} type="radio" name="src" value={value} />
        {value}
      </div>
    )
  })

  return <form onClick={handleClick}>{videoInputsJSX}</form>
}

export default Meun

```

**videos.js**

```jsx
const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
}

export default videos
```

https://reactjs.org/community/examples.html

parent updating stateless child