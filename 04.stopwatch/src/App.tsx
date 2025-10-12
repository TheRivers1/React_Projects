import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [running, setRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(0);

  function pause() {
    return running ? stop() : start();
  }

  function start() {
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime((time) => time + 0.1);
    }, 100);
  }

  function stop() {
    setRunning(false);
    clearInterval(intervalRef.current!);
  }

  function reset() {
    stop();
    setElapsedTime(0);
  }

  return (
    <>
      <div className="stopwatch-container">
        <h2>Stopwatch</h2>
        <p className="time">{elapsedTime.toFixed(1)} seconds</p>
        <div className="controls">
          <button onClick={pause}>{running ? "Stop" : "Start"}</button>
          <button onClick={reset} disabled={!running && elapsedTime === 0}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
