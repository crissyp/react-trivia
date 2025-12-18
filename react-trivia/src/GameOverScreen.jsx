import React from "react";

function GameOverScreen({ score, total, onRestart }) {
  return (
    <div className="container">
      <h1>Game Over!</h1>
      <h2>Your Score: {score} / {total}</h2>
      <button className="start-btn" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default GameOverScreen;  