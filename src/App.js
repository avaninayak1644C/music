import React from "react";
import "./App.css";

function App() {
  const startListening = () => {
    const recognition =
      new window.webkitSpeechRecognition() ||
      new window.SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const song = event.results[0][0].transcript;
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        song + " official music video"
      )}`;
      window.open(url, "_blank");
    };
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🎵 Music → YouTube</h1>
        <p className="subtitle">Sing a line or say the song name</p>
        <p className="subtitle">Click listen and play music</p>

        <button className="listen-btn" onClick={startListening}>
          🎤 Listen
        </button>

        <div className="extra-buttons">
          <button className="secondary">📜 History</button>
          <button className="secondary">⭐ Favorites</button>
        </div>

        <footer>Built with ❤️ using React</footer>
      </div>
    </div>
  );
}

export default App;
