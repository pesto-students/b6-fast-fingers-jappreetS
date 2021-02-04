import React from 'react';

import { convertSecondsToMMSS, getHighestScoreObj } from './../../utils/helpers';

import './style.scss';

const ScoreBoard = ({ scores }) => {
  const highestScoreObj = getHighestScoreObj(scores);
  return (
    <div className="ScoreBoard">
      <div className="title color-red">SCORE BOARD</div>
      {!!scores && scores.length &&
        <div className="score-container">
          {scores.map(({ id, name: gameName, score }) => (
            <div className="score color-white">
              {highestScoreObj.id === id && <div className="color-red">PERSONAL BEST</div>}
              {gameName} : {convertSecondsToMMSS(score)}
            </div>
          ))}
        </div>
      }
    </div>
  )
};

export default ScoreBoard;
