import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header>
        <h1>Dad Jokes</h1>
        <button onClick={toggleDarkMode}>Toggle dark mode</button>
      </header>
      <button onClick={fetchJoke}>Click me for a joke!</button>
      <p className={`joke-text ${isDarkMode ? 'text-white' : ''}`}>{joke}</p>
    </div>
  );
};

export default App;
