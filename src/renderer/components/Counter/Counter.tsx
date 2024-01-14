import React, { useEffect, useLayoutEffect, useState } from 'react';

import formatTime from '@renderer/utils/formatTime';

import './Counter.scss';

const Counter = () => {
  const [playPause, setPlayPause] = useState(false)
  const [timerValue, setTimerValue] = useState<number>(0)
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | number | null>(null)

  const runInterval = () => {
    const interval = setInterval(() => {
      setTimerValue(prev => prev + 1)
    }, 1000);

    setIntervalID(interval)
  }

  const pauseInterval = () => clearInterval(intervalID);

  const playPauseToggle = () => setPlayPause(prev => !prev)


  useLayoutEffect(() => {
    return () => {
      clearInterval(intervalID);
    }
  }, [])

  useEffect(() => {
    if(playPause) {
      runInterval()
    }
    else {
      pauseInterval()
    }
  }, [playPause]);

  return (
    <div className='counter'>
      <div className='title'>title</div>
      <span className='management'>
        <span>{formatTime(timerValue)}</span>
        <span className='playPause' onClick={playPauseToggle}>&#x23EF;</span>
      </span>
    </div>
  )
}

export default Counter;