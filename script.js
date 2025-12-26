const listenBtn = document.getElementById("listenBtn");
const statusText = document.getElementById("status");
const resultText = document.getElementById("result");

// Check browser support
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition not supported. Use Chrome.");
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

listenBtn.onclick = () => {
  statusText.textContent = "Listening... play music near mic 🎶";
  resultText.textContent = "";
  recognition.start();
};

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  resultText.textContent = "Heard: " + transcript;

  statusText.textContent = "Redirecting to YouTube...";

  const query = encodeURIComponent(transcript + " song");
  const url = "https://www.youtube.com/results?search_query=" + query;

  setTimeout(() => {
    window.open(url, "_blank");
  }, 1500);
};

recognition.onerror = (event) => {
  statusText.textContent = "Could not detect lyrics. Try again.";
};
