import "../styles/InfoGame.css";

const InfoGame = () => {
  return (
    <main className="info-container">
      <header>
        <h1>
          Welcome to <strong>Guess the Song</strong>
        </h1>
        <p>
          A fun and interactive music game where you test your musical
          knowledge!
        </p>
      </header>

      <section className="objective">
        <h2>Objective</h2>
        <p>
          Listen to a short 0.5-second clip of a song and try to guess its
          title.
        </p>
      </section>

      <section className="how-to-play">
        <h2>How to Play:</h2>
        <ol>
          <li>You will hear a brief audio snippet from a popular song.</li>
          <li>
            Type the name of the song in the provided input field. Don’t worry
            about capitalization; all variations (uppercase, lowercase, or mixed
            case) will be accepted!
          </li>
          <li>Click the "Guess" button to submit your answer.</li>
          <li>
            If your guess is correct, you'll receive a congratulatory message!
            If not, you’ll get a hint to help you improve your next guess.
          </li>
        </ol>
      </section>

      <section className="hints">
        <h2>Hints</h2>
        <p>
          If you make an incorrect guess, hints may be provided to guide you
          closer to the correct answer. These could include:
        </p>
        <ul>
          <li>Information about the artist.</li>
          <li>The genre of the song.</li>
          <li>Related themes or emotions.</li>
        </ul>
      </section>

      <footer>
        <p>
          <strong>
            Enjoy the game and see how many songs you can guess correctly!
          </strong>
        </p>
      </footer>
    </main>
  );
};

export default InfoGame;
