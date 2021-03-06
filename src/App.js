import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard'
import db from "./firebase"

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // Run once when it loads and not again
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

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
    {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
      <VideoCard
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
       />
      ))}
      </div>
    </div>
  );
}

export default App;
