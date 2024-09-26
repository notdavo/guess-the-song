import "../styles/ResultMessage .css";
import YouTubeVideo from "./YouTubeVideo ";

const ResultMessage = ({ onClose, songVideoURL, songName, winning }) => {
  return (
    <div className="winning-overlay" onClick={onClose}>
      <div className="winning-content" onClick={(e) => e.stopPropagation()}>
        <header>
          <h1>
            {winning
              ? "YOU GUESSED THE SONG!"
              : "YOU DIDN'T GUESS THE SONG! 😔"}
          </h1>
          <h2>
            {winning
              ? `Indeed the song was ${songName}`
              : `The song was ${songName}`}
          </h2>
        </header>

        <div className="video-container">
          <YouTubeVideo videoId={songVideoURL} />
        </div>

        <footer>
          <button className="button-style" onClick={onClose}>
            OK
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResultMessage;
