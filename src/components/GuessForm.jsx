import "../styles/GuessForm.css";
import React, { useState } from "react";
import ResultMessage from "./ResultMessage ";

const GuessForm = ({ songName, songVideoURL }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lossingModal, setLossingModal] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setLossingModal(false);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.toLocaleLowerCase() === songName.toLocaleLowerCase()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
      setLossingModal(true);
    }
  };
  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
        aria-labelledby="guess-song-form"
      >
        <label htmlFor="input-text">Guess Song Name</label>
        <input
          id="input-text"
          type="text"
          placeholder="Song Name..."
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Enter the song name"
          required
        />
        <input
          id="input-submit"
          type="submit"
          className="button-style"
          value="Guess..."
          aria-label="Submit your guess"
        />
      </form>

      {isModalOpen && (
        <ResultMessage
          onClose={handleCloseModal}
          songVideoURL={songVideoURL}
          songName={songName}
          winning={true}
        />
      )}
      {lossingModal && (
        <ResultMessage
          onClose={handleCloseModal}
          songVideoURL={songVideoURL}
          songName={songName}
          winning={false}
        />
      )}
    </div>
  );
};

export default GuessForm;
