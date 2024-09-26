import React, { useState } from "react";
import "../styles/AudioPlayer.css";

const AudioPlayer = ({ songUrl, difficulty }) => {
  const [error, setError] = useState(null);

  const handleError = (e) => {
    setError("Error: No se pudo reproducir la canción.");
  };

  return (
    <div className="audio-player-container">
      <h2>SONG OF THE DAY</h2>
      {songUrl ? (
        <audio key={songUrl} controls onError={handleError}>
          <source src={songUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No song is available. </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AudioPlayer;
