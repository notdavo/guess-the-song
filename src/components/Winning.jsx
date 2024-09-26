import "../styles/Winning.css";

const Winning = ({ onClose, songVideoURL, songName }) => {
  return (
    <div className="winning-overlay" onClick={onClose}>
      <div className="winning-content" onClick={(e) => e.stopPropagation()}>
        <h1>YOU GUESSED THE SONG!</h1>
        <h2>Indeed the song was {songName}</h2>
        <iframe
          title={songName}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${songVideoURL}`}
          allowFullScreen
        />
        <button className="buttom-style" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Winning;
