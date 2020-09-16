import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

function SnippetInput() {
  //! DOES NOT USE MODE
  const { inputs, textareaRef, onInput } = useContext(MainContext)

  return (
    <div className="app__half">
      <div className="app__halftop">
        <input
          className="app__input"
          type="text"
          name="description"
          placeholder="Description..."
          defaultValue={inputs.description}
          onInput={onInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <input
          className="app__input"
          type="text"
          name="tabTrigger"
          placeholder="Tab trigger..."
          defaultValue={inputs.tabTrigger}
          onInput={onInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      <div className="app__halfbottom">
        <textarea
          className="app__textarea"
          ref={textareaRef}
          name="snippet"
          placeholder="Your snippet..."
          defaultValue={inputs.snippet}
          onChange={onInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          wrap="off"
        />
      </div>
    </div>
  )
}

export default SnippetInput
