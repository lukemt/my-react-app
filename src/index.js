import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import harryPotterData from "./data.json";
import GlobalStyles from "./GlobalStyles";
import Apps from "./12-monday/Apps";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Apps harryPotterData={harryPotterData} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
