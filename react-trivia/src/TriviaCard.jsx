import React from "react";

function TriviaCard({ question, answer, flipped, onFlip }) {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={onFlip}
    >
      <div className="card-inner">
        <div className="card-front">
          <p><strong>Question:</strong> {question}</p>
        </div>
        <div className="card-back">
          <p><strong>Answer:</strong> {answer}</p>
        </div>
      </div>
    </div>
  );
}

export default TriviaCard;  