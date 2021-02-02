import React, { useEffect, useRef, useState } from 'react';

import CountdownCircle from './../../elements/CountdownCircle';

import './style.scss';

const Counter = ({ timeForWord }) => {
  const [timeLeft, setTimeLeft] = useState(timeForWord);
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeLeft(timeForWord);
  }, [timeForWord]);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setCircleDasharray();
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const setCircleDasharray = () => {
    const circleDasharray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
    if (timerRef && timerRef.current) {
      timerRef.current.setAttribute('stroke-dasharray', circleDasharray);
    }
  };

  const calculateTimeFraction = () => {
    return (timeLeft - 1) / timeForWord;
  };

  return (
    <div className="Counter">
      <CountdownCircle timerRef={timerRef} />
      <span className="Counter-label">
        {timeLeft}
      </span>
    </div>
  );
};

export default Counter;
