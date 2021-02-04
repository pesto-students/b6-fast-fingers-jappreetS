import React, { useContext, useEffect, useState } from 'react';

import { DIFFICULTY_LEVEL_VALUE, ROUTES, SUCCESS_INCREASE_DIFFICULTY_FACTOR } from './../../constants';
import DictionaryContext from './../../context/DictionaryContext';
import { generateWord, getItemFromStorage } from './../../utils/helpers';

import Button from './../../components/Button';
import CurrentGameDetails from './../../components/CurrentGameDetails';
import PlayingArea from './../../components/PlayingArea';
import ScoreBoard from './../../components/ScoreBoard';
import Icon from './../../elements/Icon';

import closeIcon from './../../assets/images/icons/close.svg';
import gamepadIcon from './../../assets/images/icons/gamepad.svg';
import homeIcon from './../../assets/images/icons/home.svg';
import userIcon from './../../assets/images/icons/user.svg';

import './style.scss';

const Game = ({ history }) => {
  const dictionary = useContext(DictionaryContext);
  const [name, setName] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [difficultyFactor, setDifficultyFactor] = useState(1);
  const [word, setWord] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const name = getItemFromStorage("name");
    const difficultyLevel = getItemFromStorage("difficultyLevel");
    setName(name);
    setDifficultyLevel(difficultyLevel);
    setDifficultyFactor(DIFFICULTY_LEVEL_VALUE[difficultyLevel]);
    getNewWord(difficultyLevel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dictionary]);

  const getNewWord = (level) => {
    const currentWord = generateWord(dictionary[level]);
    setWord(currentWord);
  };

  const increaseDifficultyFactor = () => {
    setDifficultyFactor(difficultyFactor + SUCCESS_INCREASE_DIFFICULTY_FACTOR);
    if (
      difficultyFactor >= (DIFFICULTY_LEVEL_VALUE.easy) &&
      difficultyFactor < (DIFFICULTY_LEVEL_VALUE.medium - SUCCESS_INCREASE_DIFFICULTY_FACTOR)
    )
      setDifficultyLevel("easy");
    else if (
      difficultyFactor >= (DIFFICULTY_LEVEL_VALUE.medium - SUCCESS_INCREASE_DIFFICULTY_FACTOR) &&
      difficultyFactor < (DIFFICULTY_LEVEL_VALUE.hard - SUCCESS_INCREASE_DIFFICULTY_FACTOR)
    )
      setDifficultyLevel("medium");
    else if (
      difficultyFactor >= (DIFFICULTY_LEVEL_VALUE.hard - SUCCESS_INCREASE_DIFFICULTY_FACTOR)
    )
      setDifficultyLevel("hard");
  };

  const onStopGame = () => {
    history.push(ROUTES.HOME);
  };

  const onGameOver = () => {
    setIsGameOver(true);
  };

  const onPlayAgainClick = () => {
    setIsGameOver(false);
    getNewWord(difficultyLevel);
    // setShowScore(true);
  };

  return (
    <div className="Game height-100 d-flex flex-direction-column justify-content-between">
      <section className="Game-top d-flex justify-content-between">
        <div className="Game-top__left">
          <div className="icon-text d-flex align-items-center">
            <Icon iconName="user" iconPath={userIcon} />
            <span className="color-red">{name}</span>
          </div>
          <div className="icon-text d-flex align-items-center">
            <Icon iconName="user" iconPath={gamepadIcon} />
            <span className="color-red text-uppercase">LEVEL: {difficultyLevel}</span>
          </div>
        </div>
        <div className="Game-top__right color-red">fast fingers</div>
      </section>
      <section
        className={`Game-center d-flex ${!isGameOver ? "justify-content-between" : "justify-content-center"}`}
      >
        {!isGameOver ? <>
          <ScoreBoard />
          <PlayingArea
            currentWord={word.toUpperCase()}
            difficultyFactor={difficultyFactor}
            getNewWord={getNewWord}
            increaseDifficultyFactor={increaseDifficultyFactor}
            onGameOver={onGameOver}
          />
          <div className="Game-center__right" />
        </> :
          <CurrentGameDetails
            onPlayAgainClick={onPlayAgainClick}
          />
        }
      </section>
      <section className="Game-bottom d-flex justify-content-between">
        <Button
          iconName="stop"
          iconPath={closeIcon}
          text="STOP GAME"
          width="56"
          onClick={onStopGame}
        />
        <Icon
          iconName="home"
          iconPath={homeIcon}
          width="60"
          onClick={() => history.push(ROUTES.HOME)}
        />
      </section>
    </div>
  );
};

export default Game;