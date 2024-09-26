import "../styles/AudioPlayer.css";

const AudioPlayer = ({ songUrl, difficulty }) => {
  return (
    <div className="audio-player-container">
      <h2>SONG OF THE DAY</h2>
      {songUrl ? (
        <audio key={songUrl} controls>
          <source src={songUrl} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      ) : (
        <p>No hay canción disponible.</p>
      )}
    </div>
  );
};

export default AudioPlayer;
