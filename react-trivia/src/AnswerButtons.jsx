import React from "react";

function AnswerButtons({ onCorrect, onWrong }) {
  return (
    <div className="answer-buttons">
      <button className="correct" onClick={onCorrect}>Correct</button>
      <button className="wrong" onClick={onWrong}>Wrong</button>
    </div>
  );
}

export default AnswerButtons;