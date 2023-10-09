
import React, { useState, useEffect } from 'react';

const Time = () => {

    
    const [seconds, setSeconds] = useState(600); // 10 minutes in seconds
    const [running, setRunning] = useState(false);

  useEffect(() => {

    let timerInterval;

    if (running && seconds > 0) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [running, seconds]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(600); // Reset to 10 minutes
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <>
         <div className='flex gap-4 justify-between'>
      <h1>Timer: {formatTime(seconds)}</h1>

      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
    </>
  )
}

export default Time