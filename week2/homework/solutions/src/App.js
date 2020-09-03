import React, { useState } from 'react'
import videos from './data/videos'
import Menu from './components/Menu'
import Video from './components/Video'

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.deer)

  const chooseVideo = (newVideo) => {
    const newSrc = videos[newVideo]
    setVideoSrc(newSrc)
  }

  const getVideoValues = (videos) => {
    return Object.keys(videos)
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} videoValues={getVideoValues(videos)} />
      <Video src={videoSrc} />
    </div>
  )
}

export default App
