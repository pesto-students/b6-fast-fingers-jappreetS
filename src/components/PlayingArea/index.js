import React from 'react';
import Counter from '../Counter';

import TextInput from './../../elements/TextInput';

import './style.scss';

const PlayingArea = ({ currentWord }) => {
  return (
    <div className="PlayingArea d-flex flex-direction-column align-items-center">
      <Counter />
      <div className="word color-white">{currentWord}</div>
      <TextInput />
    </div>
  )
};

export default PlayingArea;
