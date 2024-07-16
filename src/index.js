// src/index.js (or App.js)
import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css"; // Make sure to import your CSS file here
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you're using create-react-app, the import might be in App.js instead.
