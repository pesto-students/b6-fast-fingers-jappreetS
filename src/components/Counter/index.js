import React, { useEffect, useRef, useState } from 'react';

import CountdownCircle from './../../elements/CountdownCircle';

import './style.scss';

const Counter = ({ timeForWord, word, onGameOver }) => {
  const [timeLeft, setTimeLeft] = useState(timeForWord);
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeLeft(timeForWord);
  }, [timeForWord]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!timeLeft) {
        onGameOver();
        clearInterval(intervalId);
      }
      setTimeLeft(timeLeft - 1);
      setCircleDashArray();
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(timeForWord);
    timerRef.current.setAttribute('stroke-dasharray', '283 283');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  const setCircleDashArray = () => {
    const circleDashArray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
    if (timerRef && timerRef.current) {
      timerRef.current.setAttribute('stroke-dasharray', circleDashArray);
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
