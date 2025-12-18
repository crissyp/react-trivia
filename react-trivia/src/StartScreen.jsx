import React from "react";
import TriviaHeader from "./TriviaHeader.jsx";

function StartScreen({ onStart }) {
  return (
    <div className="container">
      <TriviaHeader
          title="Welcome to the 1980's Trivia Game!"
          subtitle="Test your knowledge of the 1980's with this fun trivia game!"
      />
      <button className="start-button" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}

export default StartScreen; 