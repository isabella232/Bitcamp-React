Good day class! Today we're going to be working on our capstone project! It's going to be a code snippet generator! And we're going to construct it in Visual Studio Code. CodeSandbox can be quit limiting and it works well for teaching small examples and sharing code but we're gonna need something stronger for our capstone. 

Let's first go setting up VS Code for React development.

**Steps:**

1. Install VS Code. https://code.visualstudio.com/download
2. Install `Node.js` https://nodejs.org/en/download/
3. Type `node --version` in your terminal to check if it is installed
4. Type `npx create-react-app <app-name>` in terminal to create your boilerplate
5. Test with `npm start` in terminal.

For our capstone we will also require two more packages please type this into the terminal

```shell
npm install clipboard common-tags
```

Before we get to writing our app, let's look at what code snippets are.

### What is a code snippet?

What a code snippet will do for you is when you type a special prefix and then, hit either tab or enter, it will be replaced with some code of your choice. Allow me to demonstrate in VS Code. 

Demonstrate `cfc` turning into

```jsx
function compName(props) {
  return (
    <div>
      
    </div>
  )
}

export default compName
```

As we can see, creating these by hand is annoying, so we'll make an app that can construct these for us.

So, let's check out what the finished product will look like (show off the app found in this scripts folder).

([Go over the structure of the app](https://docs.google.com/presentation/d/1OYkOPRzi_jwwtAfNcGqEw1-Fde_IIPbSOZgIzfkR81c/edit?usp=sharing))

### Creating our Snippet Generator

**Steps:**

1. create-react-app and remove extraneous files. Install 
2. `App.js`: Create state for `input` and `mode` and add `<div>` with `className="app"`
3. Create `SnippetInput.js` and `SnippetOutput.js` files with `className="app_half"` and add instances in `App.js`
4. `SnippetInput.js`: Write remainder with placeholders for `inputs`, `textareaRef`, and `onInput`
5. `App.js`: create `onInput()`, and create a context to be passed to `SnippetInput.js`
6. `SnippetInput.js`: Finish this file
7. `SnippetOutput.js`: Create JSX skeleton.
8. `App.js`: Create all the mode functions and pass them through `MainContext`
9. `SnippetOutput.js`: Create `modeButtonsJSX` and finish (except for `getModeProperty(mode, 'component')`)
10. `VSCode.js`: Create and finish
11. Add component property in `App.js` and `getModeProperty(mode, 'component')`in `SnippetOutput.js`
12. Repeat for 10-11`Atom.js`
13. `App.js`: Finish with `useEffect`, `useRef`, and `handleSpecialKeys()`
