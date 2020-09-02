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
      <VideoCard />
      <VideoCard />
      <VideoCard />

      </div>
      {/* <Video /> */}
    </div>
  );
}

export default App;
