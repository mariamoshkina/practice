import React, { useState, useEffect } from "react";
import styles from "./App.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
    setIsExpired(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval);
          setIsActive(false);
          setIsExpired(true);
        } else if (seconds === 0 && minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && (seconds !== 0 || minutes !== 0)) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div style={{ backgroundColor: isExpired ? "red" : "white" }} className="styles.timer container">
      <div>
        <input
          type="number"
          placeholder="Enter minutes"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Enter seconds"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <div className="buttons">
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={reset}>Reset</button>
        {isActive && (
          <button onClick={() => setIsActive(false)}>Stop</button>
        )}
      </div>
    </div>
  );
}

export default Timer;
