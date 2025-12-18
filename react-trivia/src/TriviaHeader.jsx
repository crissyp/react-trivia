import React from "react";
import reactLogo from './assets/react.svg'
import "./App.css";

/**
 * Reusable Trivia Header Component
 * @param {string} title - Main heading text
 * @param {string} subtitle - Optional subheading text
 */

function TriviaHeader({ title, subtitle }) {
  return (
    <header className="app-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h1 className="app-title">{title}</h1>
        {subtitle && <p className="app-subtitle">{subtitle}</p>}
    </header>
  );
}

export default TriviaHeader;    