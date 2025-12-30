import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const vantaRef = useRef(null);

  // 🎨 Background animation using Vanta BIRDS
  useEffect(() => {
    if (window.VANTA && vantaRef.current) {
      window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }
  }, []);

  // 🎤 Speech → YouTube
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
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
    <div className="app" ref={vantaRef}>
      <div className="card">
        <h1>🎵 Music → YouTube</h1>
        <p className="subtitle">Say or sing a song name</p>

        <button className="listen-btn" onClick={startListening}>
          🎤 Listen
        </button>

        <div className="extra-buttons">
          <button className="secondary">📜 History</button>
          <button className="secondary">⭐ Favorites</button>
        </div>

        <footer>Built by Avantika...</footer>
      </div>
    </div>
  );
}

export default App;
