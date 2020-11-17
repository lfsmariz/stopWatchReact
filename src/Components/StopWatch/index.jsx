import React, { useState, useEffect } from 'react'
import Voltar from '../Voltar'

import Screen from '../../Components/Screen'
import './style.css'

const Stopwatch = () => {

  const initialState = 0

  const [count, setCount] = useState(initialState);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      setTimeout(() => setCount(count + 10), 10)
    }
  }, [status, count])

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
    <Screen>
      <Voltar />
      <div className="SelectStopWatch">
        <div className="timerStopWatch">
          <div>
            {convertTime(count).hour > 0 && <h1>{convertTime(count).hour}:</h1>}

            <h1>{convertTime(count).minute < 10
              ? '0' + convertTime(count).minute + ":"
              : convertTime(count).minute + ":"}</h1>

            <h1>{convertTime(count).second < 10
              ? '0' + convertTime(count).second
              : convertTime(count).second}</h1>
          </div>

          <p>{convertTime(count).milisecond === 0
            ? '000'
            : convertTime(count).milisecond < 100
              ? '0' + convertTime(count).milisecond
              : convertTime(count).milisecond}
          </p>
        </div>
        <div>
          <button onClick={() => setStatus(true)}>Iniciar</button>
          <button onClick={() => setStatus(false)}>Parar</button>
        </div>
      </div>
    </Screen>
  )
}

export default Stopwatch;