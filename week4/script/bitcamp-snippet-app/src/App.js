import React, { useState, useRef, useEffect } from 'react'
import { MainContext } from './contexts/MainContext'
import SnippetInput from './components/SnippetInput'
import SnippetOutput from './components/SnippetOutput'
import Header from './components/Header'
import VSCode from './components/VSCode'
import Atom from './components/Atom'

function App() {
  const [inputs, setInputs] = useState({
    snippet: '',
    description: '',
    tabTrigger: '',
  })
  const [mode, setMode] = useState('vscode')

  const textareaRef = useRef()

  //? Code this towards the end
  // Listen for specific key inputs
  useEffect(() => {
    const handleKeydown = (e) => {
      //tab key (when snippet input is active)
      const isSnipInputActive = document.activeElement === textareaRef.current
      if (e.keyCode === 9 && isSnipInputActive) {
        // skipTabAndAddTwoSpaces(e)
      }
      // Ctrl + i (when snippet is active)
      if (e.keyCode === 73 && (e.ctrlKey || e.metaKey) && isSnipInputActive) {
        // addPlaceHolder(e)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const onInput = (e) => {
    const { name, value } = e.target

    const newInputs = { ...inputs }
    newInputs[name] = value
    setInputs(newInputs)
  }

  const allModes = {
    vscode: {
      color: 'purple', //is this obsolete?
      component: <VSCode />,
    },
    atom: {
      color: '#40a977',
      component: <Atom />,
    },
  }

  const validateMode = (mode) => {
    const possibleModeKeys = Object.keys(allModes)
    const isValid = possibleModeKeys.some((posMode) => posMode === mode)
    if (!isValid) throw Error(`${mode} is not a valid mode`)
  }

  const getModeProperty = (mode, property) => {
    validateMode(mode)
    return allModes[mode][property]
  }

  const updateMode = (mode) => {
    validateMode(mode)
    const newColor = allModes[mode]['color']
    document.documentElement.style.setProperty('--color', newColor)
    setMode(mode)
  }

  return (
    <MainContext.Provider
      value={{
        inputs,
        mode,
        textareaRef,
        onInput,
        updateMode,
        getModeProperty,
      }}
    >
      <div className={`app app--${mode}`}>
        <Header />
        <div className="app__main">
          <SnippetInput />
          <SnippetOutput />
        </div>
      </div>
    </MainContext.Provider>
  )
}

export default App
