import React from 'react'

function Video(props) {
  const { src } = props

  return (
    <div>
      <video controls autoStart autoPlay src={src} />
    </div>
  )
}

export default Video
