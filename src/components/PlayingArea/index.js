import React, { useEffect, useState } from 'react';

import Counter from './../Counter';
import TextInput from './../../elements/TextInput';

import './style.scss';

const PlayingArea = ({ currentWord, difficultyFactor }) => {
  const [userInput, setUserInput] = useState("");
  const [currentWordTime, setCurrentWordTime] = useState(0);

  useEffect(() => {
    setCurrentWordTime(Math.ceil(currentWord.length / difficultyFactor));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord]);

  const getCurrentWord = () => {
    const currentWordCharacters = currentWord.toUpperCase().split("");
    const userInputCharacters = userInput.split("");
    return (
      <div className="word color-white">
        {currentWordCharacters.map((char, index) => {
          let charColor;
          if (index < userInput.length) {
            charColor = char === userInputCharacters[index] ? "#54BA18" : "#445298";
          }
          return (
            <span key={index} style={{ color: charColor }}>{char}</span>
          )
        })}
      </div>
    )
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setUserInput(value.toUpperCase());
  };

  return (
    <div className="PlayingArea d-flex flex-direction-column align-items-center">
      <Counter
        timeForWord={currentWordTime}
      />
      {getCurrentWord()}
      <TextInput
        value={userInput}
        onChange={handleInputChange}
      />
    </div>
  )
};

export default PlayingArea;
