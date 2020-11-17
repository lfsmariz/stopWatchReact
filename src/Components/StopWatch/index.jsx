import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router'

const Stopwatch = () => {

  const [shouldStart, setShouldStart] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  const [notRunning, setNotRunning] = useState(true);
  useEffect(() => {
    if (shouldStart) {
      setIntervalID(setInterval(() => setCount(count => count + 10), 10));
      setShouldStart(false);
      setNotRunning(false);
    }
  }, [shouldStart, intervalID]);
  const startCount = () => notRunning && setShouldStart(true);

  const pauseCount = () => {
    clearInterval(intervalID);
    setNotRunning(true);
  };

  const stopCount = () => {
    clearInterval(intervalID);
    setCount(0);
    setNotRunning(true);
  };

  const convertTime = (count) => {

    const constConvert = { hour: 3600000, minute: 60000, second: 1000 }

    const timeCon = { hour: 0, minute: 0, second: 0, milisecond: 0 }

    timeCon.hour = Math.floor(count / constConvert.hour);
    timeCon.minute = Math.floor((count - timeCon.hour * constConvert.hour) / constConvert.minute);
    timeCon.second = Math.floor((count - timeCon.hour * constConvert.hour - timeCon.minute * constConvert.minute) / constConvert.second);
    timeCon.milisecond = Math.floor(count - timeCon.hour * constConvert.hour - timeCon.minute * constConvert.minute - timeCon.second * constConvert.second);
    return timeCon;
  }

  return (
    <div>
      <h1>{convertTime(count).hour}</h1>
      <h1>{convertTime(count).minute}</h1>
      <h1>{convertTime(count).second}</h1>
      <p>{convertTime(count).milisecond}</p>
      <button onClick={startCount}>
        iniciar
      </button>
      <button onClick={pauseCount}>
        pausar
      </button>
      <button onClick={stopCount}>
        resetar
      </button>
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default Stopwatch;