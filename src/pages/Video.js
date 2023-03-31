// O comando 'rcfe' cria um componente auto do react
import React, { useRef, useState } from "react"
import VideoFooter from "./components/footer/VideoFooter"
import "./Video.css"

function Video() {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart() {
    if (play == false) {
      videoRef.current.play()
      setPlay(true)
    } else {
      videoRef.current.pause()
      setPlay(false)
    }
  }
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
      ></video>
      {/* Side bar */}
      {/* Footer */}
      <VideoFooter />
    </div>
  )
}

export default Video
