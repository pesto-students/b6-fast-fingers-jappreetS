import React from 'react';

import './style.scss';

const ScoreBoard = () => {
  return (
    <div className="ScoreBoard">
      <div className="title color-red">SCORE BOARD</div>
      <div className="score-container">
        <div className="score color-white">Game 1 : 1:14</div>
        <div className="score color-white">Game 2 : 1:27</div>
        <div className="score color-white">Game 3 : 2:01</div>
        <div className="score color-white">
          <div className="color-red">PERSONAL BEST</div>
          Game 4 : 2:07
        </div>
      </div>
    </div>
  )
};

export default ScoreBoard;
