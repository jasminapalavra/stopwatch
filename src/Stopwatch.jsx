import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const getHours = (ms) => ("0" + ((ms / 10) % 100)).slice(-2);
  const getSeconds = (ms) => ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
  const getMinutes = (ms) =>
    ("0" + (Math.floor(ms / 1000 / 60) % 60)).slice(-2);

  const formatTime = (ms) =>
    `${getMinutes(ms)}:${getSeconds(ms)}:${getHours(ms)}`;

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 10), 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <>
      <h2>Jasmina's Stopwatch App</h2>
      <div className="stopwatch">
        <p>{formatTime(time)}</p>
        <br />
        {!isRunning && !time && (
          <button onClick={() => setIsRunning(true)} className="start-btn">
            Start
          </button>
        )}
        {!isRunning && time > 0 && (
          <button onClick={() => setIsRunning(true)} className="start-btn">
            Resume
          </button>
        )}
        {isRunning && (
          <button onClick={() => setIsRunning(false)} className="pause-btn">
            Pause
          </button>
        )}
        {!isRunning && time > 0 && (
          <button onClick={() => setTime(0)} className="start-btn">
            Restart
          </button>
        )}
      </div>
    </>
  );
}

export default Stopwatch;
