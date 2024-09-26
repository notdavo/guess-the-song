import React, { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import { getVideoURL } from "./firebaseConfig";
import songsData from "./songs.json";
import InfoGame from "./components/InfoGame";
import GuessForm from "./components/GuessForm";

function App() {
  const [songUrl, setSongUrl] = useState("");
  const [songName, setSongName] = useState("");
  const [songVideoURL, setSongVideoURL] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const today = new Date();

    const dayWeek = today.getDay();

    if (dayWeek > 0 && dayWeek <= songsData.length) {
      const song = songsData[dayWeek - 1];
      console.log(song.name);

      setSongName(song.name);
      setSongVideoURL(song.youtube_url);
    }

    const songFileName = `song${dayWeek}.mp3`;
    getVideoURL(songFileName, setSongUrl, setError);
  }, []);

  return (
    <div className="main-container">
      <h1 className="page-header">GUESS THE SONG</h1>
      <AudioPlayer songUrl={songUrl} />
      <GuessForm songName={songName} songVideoURL={songVideoURL} />
      <InfoGame />
    </div>
  );
}

export default App;
