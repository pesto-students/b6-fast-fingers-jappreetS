import React from 'react';

import './style.scss';

const CountdownCircle = ({ timerRef }) => {
  return (
    <svg
      className="CountdownCircle"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="CountdownCircle-circle">
        <circle
          className="CountdownCircle-path__elapsed"
          cx="50"
          cy="50"
          r="45"
        />
        <path
          ref={timerRef}
          strokeDasharray="283"
          className="CountdownCircle-path__remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        />
      </g>
    </svg>
  );
};

export default CountdownCircle;
