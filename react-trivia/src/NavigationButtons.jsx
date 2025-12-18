import React from "react";

function NavigationButtons({ onPrevious, onNext }) {
  return (
    <div className="buttons">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default NavigationButtons;