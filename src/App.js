import React, { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";
import AudioPlayer from "./components/AudioPlayer";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

function App() {
  const [songUrl, setSongUrl] = useState("");
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const auth = getAuth();

    if (difficulty !== "") {
      signInAnonymously(auth)
        .then(() => {
          const songNumber = 1;
          const songFileName = `song${songNumber}-${difficulty}.mp3`;

          const songRef = ref(storage, `songs/${songFileName}`);

          getDownloadURL(songRef)
            .then((url) => {
              console.log(url);

              setSongUrl(url);
            })
            .catch((error) => {
              setError("Error al obtener la canción: " + error.message);
            });
        })
        .catch((authError) => {
          setError(
            "Error al iniciar sesión anónimamente: " + authError.message
          );
        });
    }
  }, [difficulty]);

  const handleClick = (difficulty) => {
    setDifficulty(difficulty);
  };

  const handleSubmit = (difficulty) => {
    console.log("guess");
  };

  return (
    <div className="main-container">
      <h1 className="page-header">GUESS THE SONG</h1>
      <div className="difficulty-container">
        <h1>DIFFICULTY</h1>
        <ul>
          <h3>The difficulty will correspond to the selected level:</h3>
          <li>
            <span id="hard">Hard:</span> 0.5s
          </li>
          <li>
            <span id="medium">Medium:</span> 1s
          </li>
          <li>
            <span id="easy">Easy:</span> 1.5s
          </li>
        </ul>
        <div>
          <button className="buttom-style" onClick={() => handleClick("hard")}>
            Hard
          </button>
          <button
            className="buttom-style"
            onClick={() => handleClick("medium")}
          >
            Medium
          </button>
          <button className="buttom-style" onClick={() => handleClick("easy")}>
            Easy
          </button>
        </div>
      </div>
      {difficulty !== "" && (
        <AudioPlayer songUrl={songUrl} difficulty={difficulty} />
      )}
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" placeholder="Guess..."></input>
        <button className="buttom-style">Guess</button>
      </form>
    </div>
  );
}

export default App;
