import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ToggleButton,
  ResetButton,
  TimeSegmentHistory,
  Stopwatch,
} from "./components";
import { TimecardProvider } from "./contexts/Timecard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TimecardProvider>
          <Stopwatch />
          <ToggleButton />
          <ResetButton />
          <TimeSegmentHistory />
        </TimecardProvider>
      </header>
    </div>
  );
}

export default App;
