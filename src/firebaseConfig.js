import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();

const getVideoURL = (songFileName, setSongUrl, setError) => {
  signInAnonymously(auth)
    .then(() => {
      const songRef = ref(storage, `songs/${songFileName}`);

      getDownloadURL(songRef)
        .then((url) => {
          setSongUrl(url);
        })
        .catch((error) => {
          setError("Error al obtener la canción: " + error.message);
        });
    })
    .catch((authError) => {
      setError("Error al iniciar sesión anónimamente: " + authError.message);
    });
};
export { app, storage, auth, getVideoURL };
