import React, { useState } from "react";
import logo from "./logo.svg";
import Ologo from "./overchute.png";
import FullLogo from "./logo-full.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={FullLogo} className="O-logo" alt="logo" />

          <p className="h2Typo">
            Crowdfunding the release of <br /> intelectual property
          </p>

          <p className="description">
            A decentralized smart-contract application that uses <br /> a novel
            funding protocol to mitigate the free-rider <br /> problem and
            enable efficient price discovery.
          </p>
        </div>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
