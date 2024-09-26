import React, { useEffect, useState } from "react";

const YouTubeVideo = ({ videoId }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [error, setError] = useState(null);

  const loadYoutubeAPI = () => {
    return new Promise((resolve, reject) => {
      if (window.YT) {
        resolve(window.YT);
      } else {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        tag.onerror = () => reject(new Error("Failed to load YouTube API"));
      }
    });
  };

  useEffect(() => {
    loadYoutubeAPI()
      .then(() => {
        setVideoLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="video-container">
      {error ? (
        <p className="error-message">Error loading video: {error}</p>
      ) : videoLoaded ? (
        <iframe
          title={`YouTube video: ${videoId}`}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          className="youtube-iframe"
        />
      ) : (
        <p className="loading-message">Loading video...</p>
      )}
    </div>
  );
};

export default YouTubeVideo;
