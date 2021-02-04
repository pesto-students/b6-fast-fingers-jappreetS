import React from 'react';

import { convertSecondsToMMSS } from './../../utils/helpers';

import Button from './../Button';

import reloadIcon from './../../assets/images/icons/reload.svg';

import './style.scss';

const CurrentGameDetails = ({ currentGameObj, isNewHighScore, onPlayAgainClick }) => {
  return (
    <div className="CurrentGameDetails color-white text-align-center">
      <div className="title">SCORE: {currentGameObj?.name}</div>
      <div className="score">{convertSecondsToMMSS(currentGameObj?.score)}</div>
      {isNewHighScore && <div className="high-score">New High Score</div>}
      <Button
        iconName="reload"
        iconPath={reloadIcon}
        text="PLAY AGAIN"
        showIconMargin
        width="40"
        onClick={onPlayAgainClick}
      />
    </div>
  )
};

export default CurrentGameDetails;