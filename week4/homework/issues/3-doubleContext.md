# Double the Context Double the Fun!

Great work! Our users are satisfied...for now. In the meantime let's fix up our existing codebase. 

Our `App.js` file is trying to handle so much and it's feeling bloated. It contains many pieces of code that don't have much to do with each other! It appears like we have two code categories in `App.js`: code related to the `inputs` and code related to the `mode`. If we examine the rest of our code we see that each file only ever uses either the `inputs` or the `mode` but never both (however even if it weren't the case there is still good reason to split this code up).

What you will be doing is taking all of the code related to `inputs` and `mode` and placing them into new files `InputContext.js` and `ModeContext.js` respectively. 

Code related to `inputs` state

- `inputs`
- `textareaRef`
- `useEffect(...)`
- `handleSpecialKeys()`
- `onInput()`

Code related to `mode` state

- `mode`
- `allModeProperties`
- `getModeNames()`
- `validateMode()`
- `getModeProperty()`
- `updateMode()`

Within both of the new files you will create a new component that will wrap the code you are copying over. This component will be the Provider for the respective Context.

The wrapper should look something like this,

```jsx
const tempnameContext = React.createContext()
function tempnameProvider(props) {
	//copied code
    return (
    	<tempnameContext.Provider value={{ /*functions and vars you are providing*/ }}>
        	{props.children}
        </tempnameContext.Provider>
    )
}
export { tempnameProvider, tempnameContext }
```

Once you complete the new files, you will have to import the Providers in a file whose children are all the Consumers (let's say `index.js` since that is the root of our component tree). Then, wrap `<App />` with your providers.

You will then have to update every other file that used `MainContext` and replace it with the appropriate new context. If you used Context in the same way I did for the two previous exercises then there should be 4 files that use  code for`inputs` and 3 that use code for `mode` (don't forget that `App.js` uses mode!). 