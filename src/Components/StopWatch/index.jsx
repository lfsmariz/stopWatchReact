import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router'

const Stopwatch = () => {

  // const history = useHistory()

  const initialState = 0

  const [count, setCount] = useState(initialState);
  const [status, setStatus] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      setCount(0)
      setStatus(false)
      setTimeout(() => setCount(0), 15)
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    if (status) {
      setTimeout(() => setCount(count + 10), 10)
      if (reset) setCount(0)
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
    <div>
      <h1>{convertTime(count).hour}</h1>
      <h1>{convertTime(count).minute}</h1>
      <h1>{convertTime(count).second}</h1>
      <p>{convertTime(count).milisecond}</p>
      <button onClick={() => setStatus(true)}>Iniciar</button>
      <button onClick={() => setStatus(false)}>Parar</button>
      <button onClick={() => setReset(true)}>Resetar</button>
      {/* <button onClick={() => history.go(0)}>Resetar</button> */}
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default Stopwatch;