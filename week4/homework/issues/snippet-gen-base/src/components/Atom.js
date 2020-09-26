import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'
import { html } from 'common-tags'

function Atom() {
  const { inputs } = useContext(MainContext)

  const renderSnippet = (inputs) => {
    const { snippet, description, tabTriggers } = inputs

    // prettier-ignore
    return html`
      '${description}':
        'prefix': '${tabTriggers}'
        'body': """
          ${snippet}
        """
    `
  }

  return <pre className="app__pre">{renderSnippet(inputs)}</pre>
}

export default Atom
