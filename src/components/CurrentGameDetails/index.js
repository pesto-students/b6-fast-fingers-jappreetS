import React from 'react';

import Button from './../Button';

import reloadIcon from './../../assets/images/icons/reload.svg';

import './style.scss';

const CurrentGameDetails = () => {
  return (
    <div className="CurrentGameDetails color-white text-align-center">
      <div className="title">SCORE: GAME 5</div>
      <div className="score">2:17</div>
      <div className="high-score">New High Score</div>
      <Button
        iconName="reload"
        iconPath={reloadIcon}
        text="PLAY AGAIN"
        showIconMargin
        width="40"
      />
    </div>
  )
};

export default CurrentGameDetails;