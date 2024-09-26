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
      setSongName(song.name);
      setSongVideoURL(song.youtube_url);
    }

    const songFileName = `song${dayWeek}.mp3`;
    getVideoURL(songFileName, setSongUrl, setError);
  }, []);

  return (
    <main className="main-container">
      <header className="header">
        <h1 className="page-header">Daily Song Guess</h1>
      </header>
      <section aria-labelledby="audio-player">
        <AudioPlayer songUrl={songUrl} />
      </section>
      <section aria-labelledby="guess-form">
        <GuessForm songName={songName} songVideoURL={songVideoURL} />
      </section>
      <section aria-labelledby="info-game">
        <InfoGame />
      </section>
    </main>
  );
}

export default App;
