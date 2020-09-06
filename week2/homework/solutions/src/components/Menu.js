import React from 'react'

function Meun(props) {
  const { chooseVideo, videoValues } = props

  const handleClick = (e) => {
    const newVideo = e.target.value
    chooseVideo(newVideo)
  }

  const videoInputsJSX = videoValues.map((value, i) => {
    return (
      <div>
        <input
          className="video-input"
          key={i}
          type="radio"
          name="src"
          value={value}
        />
        {value}
      </div>
    )
  })

  return <form onClick={handleClick}>{videoInputsJSX}</form>
}

export default Meun
