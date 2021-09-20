import React from "react";
import ReactDOM from "react-dom";
import App from "./05-friday/components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import data from "./data.json";
import CreateCharacterForm from "./07-monday/components/Form";

ReactDOM.render(
  <React.StrictMode>
    <CreateCharacterForm />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
