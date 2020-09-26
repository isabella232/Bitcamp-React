import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

function Info() {
  const { mode, getModeProperty } = useContext(MainContext)

  const platformKey = navigator.platform === 'MacIntel' ? '⌘' : 'ctrl'
  const color = getModeProperty(mode, 'style').backgroundColor

  return (
    <p className="app__info">
      Press ({platformKey} + i) to declare a placeholder |{' '}
      <a href={getModeProperty(mode, 'docs')} style={{ color: color }}>
        More info
      </a>
    </p>
  )
}

export default Info
