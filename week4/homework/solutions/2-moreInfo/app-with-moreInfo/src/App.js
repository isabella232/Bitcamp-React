import React, { useState, useRef, useEffect } from 'react'
import { MainContext } from './contexts/MainContext'
import SnippetInput from './components/SnippetInput'
import SnippetOutput from './components/SnippetOutput'
import Header from './components/Header'
import VSCode from './components/VSCode'
import Atom from './components/Atom'
import Sublime from './components/Sublime'

function App() {
  /***************************** Code for Input ******************************/

  const [inputs, setInputs] = useState({
    snippet: '',
    description: '',
    tabTrigger: '',
  })

  const textareaRef = useRef()

  // Listen for specific key inputs
  useEffect(() => {
    const handleKeydown = (e) => {
      //tab key (when snippet input is active)
      const isSnipInputActive = document.activeElement === textareaRef.current
      if (e.keyCode === 9 && isSnipInputActive) {
        handleSpecialKeys(e, 'tab')
      }
      // Ctrl + i (when snippet is active)
      if (e.keyCode === 73 && (e.ctrlKey || e.metaKey) && isSnipInputActive) {
        handleSpecialKeys(e, 'ctrl+i')
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const handleSpecialKeys = (e, keys) => {
    e.preventDefault()
    const { selectionStart } = textareaRef.current
    const { selectionEnd } = textareaRef.current

    const currentText = textareaRef.current.value
    const strBeforeSelection = currentText.substring(0, selectionStart)
    const strAfterSelection = currentText.substring(
      selectionEnd,
      currentText.length
    )

    const keysInfo = {
      tab: {
        strBetween: '  ',
        newStart: selectionStart + 2,
        newEnd: selectionStart + 2,
      },
      'ctrl+i': {
        strBetween: `\${1:example}`,
        newStart: selectionStart + 4,
        newEnd: selectionStart + 11,
      },
    }

    const { strBetween, newStart, newEnd } = keysInfo[keys]
    const newText = `${strBeforeSelection}${strBetween}${strAfterSelection}`

    textareaRef.current.value = newText
    textareaRef.current.selectionStart = newStart
    textareaRef.current.selectionEnd = newEnd

    onInput(e)
  }

  const onInput = (e) => {
    const { name, value } = e.target

    const newInputs = { ...inputs }
    newInputs[name] = value
    setInputs(newInputs)
  }

  /***************************** End Input Code ******************************/

  /****************************** Code for Mode ******************************/

  const [mode, setMode] = useState('VS Code')

  const allModeProperties = {
    "VS Code": {
      style: { backgroundColor: '#006eb4' },
      component: <VSCode />,
      docs: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
    },
    "Atom": {
      style: { backgroundColor: '#40a977' },
      component: <Atom />,
      docs: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    },
    "Sublime Text": {
      style: { backgroundColor: '#F59821' },
      component: <Sublime />,
      docs:
        'https://sublime-text.readthedocs.io/en/stable/extensibility/snippets.html',
    },
  }

  const getModeNames = () => {
    return Object.keys(allModeProperties)
  }

  const validateMode = (mode) => {
    const possibleModeKeys = getModeNames()
    const isValid = possibleModeKeys.some((posMode) => posMode === mode)
    if (!isValid) throw Error(`${mode} is not a valid mode`)
  }

  const getModeProperty = (mode, property) => {
    validateMode(mode)
    return allModeProperties[mode][property]
  }

  const updateMode = (mode) => {
    validateMode(mode)
    setMode(mode)
  }

  /****************************** End Mode Code ******************************/

  return (
    <MainContext.Provider
      value={{
        inputs,
        mode,
        textareaRef,
        onInput,
        updateMode,
        getModeProperty,
        getModeNames,
      }}
    >
      <div
        className="app"
        style={getModeProperty(mode, 'style')}
      >
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
