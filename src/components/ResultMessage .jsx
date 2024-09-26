import "../styles/ResultMessage .css";
import YouTubeVideo from "./YouTubeVideo ";

const ResultMessage = ({ onClose, songVideoURL, songName, winning }) => {
  return (
    <div className="winning-overlay" onClick={onClose}>
      <div className="winning-content" onClick={(e) => e.stopPropagation()}>
        {winning ? (
          <h1>YOU GUESSED THE SONG!</h1>
        ) : (
          <h1>YOU DIDN'T GUESS THE SONG! {`:(`}</h1>
        )}
        {winning ? (
          <h2>Indeed the song was {songName}</h2>
        ) : (
          <h2>The song was {songName}</h2>
        )}
        <YouTubeVideo videoId={songVideoURL} />
        <button className="buttom-style" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ResultMessage;
