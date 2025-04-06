import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css"; 
import App from "./App"; // Ensure this file exists

// If reportWebVitals.js doesn't exist, REMOVE this import
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If reportWebVitals is necessary, UNCOMMENT this line
// reportWebVitals();
