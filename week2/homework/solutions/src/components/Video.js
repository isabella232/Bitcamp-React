import React from 'react'

function Video(props) {
  const { src } = props

  return (
    <div>
      <video controls autostart="true" autoPlay muted src={src} />
    </div>
  )
}

export default Video
