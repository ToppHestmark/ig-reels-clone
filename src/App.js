import React from 'react';
import './App.css';
import VideoCard from './VideoCard'

function App() {
  return (
    <div className="app">
      
      <div className="app__top">
        <img className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1920px-Instagram_logo_2016.svg.png"
          alt=""
          />
        <h2>Reels</h2>
      </div>

      <div className="app__videos">
        {/* Container of app videos */}
      <VideoCard
        channel="topphestmark"
        avatarSrc="https://avatars3.githubusercontent.com/u/48948074?s=400&u=d8d5a56c477f72be28e39cd0f40b51243180458a&v=4"
        song="TikTok - song"
        url=""
        likes="500"
        shares="300"
       />
      <VideoCard />
      <VideoCard />

      </div>
      {/* <Video /> */}
    </div>
  );
}

export default App;
