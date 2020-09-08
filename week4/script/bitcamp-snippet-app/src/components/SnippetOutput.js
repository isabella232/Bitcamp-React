import React, { useContext, useEffect } from 'react'
import VSCode from './VSCode'
import Atom from './Atom'
import Clipboard from 'clipboard'
import { MainContext } from '../contexts/MainContext'

function SnippetOutput() {
  //! Does not use Inputs
  const { mode, updateMode, getModeProperty } = useContext(MainContext)

  useEffect(() => {
    new Clipboard('.app__btncopy')
  }, [])

  const getTopButtonClass = (buttonName) => {
    if (mode === buttonName)
      return `app__button app__button--${buttonName} app__button--active`
    return `app__button app__button--${buttonName}`
  }

  return (
    <div className="app__half">
      <div className="app__halftop">
        <button
          className={getTopButtonClass('vscode')}
          onClick={() => updateMode('vscode')}
        >
          VSCode
        </button>
        <button
          className={getTopButtonClass('atom')}
          onClick={() => updateMode('atom')}
        >
          Atom
        </button>
      </div>

      <div className="app__halfbottom">
        {getModeProperty(mode, 'component')}

        <div className="app__buttons">
          <button
            className="app__btn app__btncopy"
            data-clipboard-target=".app__pre"
          >
            Copy snippet
          </button>
        </div>
      </div>
    </div>
  )
}

export default SnippetOutput
