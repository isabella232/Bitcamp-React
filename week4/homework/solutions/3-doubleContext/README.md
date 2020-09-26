# Changes Made

- Deleted `MainContext.js`

- Created `InputContext.js`

  - `inputs` state, `textareaRef`, `useEffect()`, `handleSpecialKeys()`, and `onInput()` moved from `App.js` to here.

  - Contains the following wrapper for Context
  
    ```jsx
  import React from 'react'
    const InputContext = React.createContext()
  
    function InputProvider(props) {
        ...
        return (
        	<InputContext.Provider value={{ ... }}>
            	{props.children}
            </InputContext.Provider>
      )
    }
    
    export { InputProvider, InputContext }
    ```
  
- Created `ModeContext.js`

  - `mode` state, `allModeProperties`, `getModeNames()`, `validateMode()`, `getModeProperty()` and `updateMode()` moved from `App.js` to here.

  - Contains the following wrapper for Context

    ```jsx
    import React from 'react'
    const ModeContext = React.createContext()
    
    function ModeProvider(props) {
        ...
        return (
        	<ModeContext.Provider value={{ ... }}>
            	{props.children}
            </ModeContext.Provider>
        )
    }
    
    export { ModeProvider, ModeContext }
    ```

- `index.js` additions

  - two new imports

    ```jsx
    import { ModeProvider } from './contexts/ModeContext'
    import { InputProvider } from './contexts/InputContext'
    ```

  - changes to `ReactDOM.render()`'s first argument

    ```jsx
    <React.StrictMode>
        <ModeProvider>
            <InputProvider>
                <App />
            </InputProvider>
        </ModeProvider>
    </React.StrictMode>
    ```

- `App.js` Changes

  - removed all parts added to `inputContext.js` and `modeContext.js` and mentions of `MainContext.js`

  - Importing `ModeContext` and the `useContext()` hook.

  - Added line to use mode

    ```jsx
    const { mode, getModeProperty } = useContext(ModeContext)
    ```

- Files where `useContext(MainContext)` and import `MainContext` were changed to **`useContext(InputContext)`** and import **`InputContext`**
  - `SnippetInput.js`
  - `Atom.js`
  - `Sublime.js`
  - `VSCode.js`
- Files where `useContext(MainContext)` and import `MainContext` were changed to **`useContext(ModeContext)`** and import **`ModeContext`**
  - `SnippetOutput.js`
  - `Info.js`