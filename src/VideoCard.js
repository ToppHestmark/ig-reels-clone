import React, { useState, useRef } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className="videoCard">
    <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://youtu.be/eTUMXeRwm7A"
        alt="IG reels video"
        loop=""
        />
    </div>
  )
}

export default VideoCard;
