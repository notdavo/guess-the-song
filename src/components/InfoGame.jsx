import "../styles/InfoGame.css";

const InfoGame = () => {
  return (
    <div className="info-container">
      <p>
        Welcome to <strong>Guess the Song</strong>, a fun and interactive music
        game where you test your musical knowledge!
      </p>

      <h3>Objective</h3>
      <hr />

      <p>
        Listen to a short 0.5-second clip of a song and try to guess its title.
      </p>

      <h3>How to Play:</h3>
      <hr />

      <ol>
        <li>You will hear a brief audio snippet from a popular song.</li>
        <li>
          Type the name of the song in the provided input field. Don’t worry
          about capitalization; all variations (uppercase, lowercase, or mixed
          case) will be accepted!
        </li>
        <li>Click the "Guess" button to submit your answer.</li>
        <li>
          If your guess is correct, you'll receive a congratulatory message! If
          not, you’ll get a hint to help you improve your next guess.
        </li>
      </ol>

      <h3>Hints</h3>
      <hr />

      <p>
        If you make an incorrect guess, hints may be provided to guide you
        closer to the correct answer. These could include:
      </p>
      <ul>
        <li>Information about the artist.</li>
        <li>The genre of the song.</li>
        <li>Related themes or emotions.</li>
      </ul>

      <p>
        <strong>
          Enjoy the game and see how many songs you can guess correctly!
        </strong>
      </p>
    </div>
  );
};

export default InfoGame;
