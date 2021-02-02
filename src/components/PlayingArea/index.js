import React from 'react';

import Counter from './../Counter';
import TextInput from './../../elements/TextInput';

import './style.scss';

const PlayingArea = ({ currentWord, difficultyFactor }) => {
  return (
    <div className="PlayingArea d-flex flex-direction-column align-items-center">
      <Counter
        timeForWord={Math.ceil(currentWord.length / difficultyFactor)}
      />
      <div className="word color-white">{currentWord}</div>
      <TextInput />
    </div>
  )
};

export default PlayingArea;
