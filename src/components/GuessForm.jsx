import "../styles/GuessForm.css";
import React, { useState } from "react";
import Winning from "./Winning";

const GuessForm = ({ songName, songVideoURL }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    }
  };
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="input-text">GUESS SONG NAME</label>
        <input
          id="input-text"
          type="text"
          placeholder="Song Name..."
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Enter the song name"
        />

        <input
          id="input-submit"
          type="submit"
          className="buttom-style"
          value="Guess"
          aria-label="Submit your guess"
        />
      </form>
      {isModalOpen && (
        <Winning
          onClose={handleCloseModal}
          songVideoURL={songVideoURL}
          songName={songName}
        />
      )}
    </div>
  );
};

export default GuessForm;
