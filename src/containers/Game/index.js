import React, { useEffect, useState } from 'react';

import {
  DIFFICULTY_LEVEL_VALUE,
  ROUTES,
  SUCCESS_INCREASE_DIFFICULTY_FACTOR,
} from './../../constants';
import {
  convertSecondsToMMSS,
  generateWord,
  getHighestScoreObj,
  getItemFromStorage,
} from './../../utils/helpers';

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

const dictionary = {
  easy: require('./../../data/easy.json'),
  medium: require('./../../data/medium.json'),
  hard: require('./../../data/hard.json'),
};

const Game = ({ history }) => {
  const name = getItemFromStorage("name");
  const difficultyLevel = getItemFromStorage("difficultyLevel");
  const [difficultyFactor, setDifficultyFactor] = useState(DIFFICULTY_LEVEL_VALUE[difficultyLevel]);
  const [word, setWord] = useState(generateWord(dictionary[difficultyLevel]));
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(null);
  const [scoreBoard, setScoreBoard] = useState([]);
  const [currentGameObj, setCurrentGameObj] = useState(null);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore(score + 1);
    }, 1000);
    if (isGameOver) {
      clearInterval(scoreInterval);
      setScore(null);
    }
    return () => clearInterval(scoreInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const getNewWord = level => {
    const currentWord = generateWord(dictionary[level]);
    setWord(currentWord);
  };

  const increaseDifficultyFactor = () => {
    setDifficultyFactor(difficultyFactor + SUCCESS_INCREASE_DIFFICULTY_FACTOR);
  };

  const onStopGame = () => {
    history.push(ROUTES.HOME);
  };

  const onGameOver = () => {
    setIsGameOver(true);
    const currentGameObj = {
      id: scoreBoard.length + 1,
      name: `GAME ${scoreBoard.length + 1}`,
      score,
    };
    const updatedScoreBoard = [...scoreBoard, currentGameObj];
    setScoreBoard(updatedScoreBoard);
    const highestScoreObj = getHighestScoreObj(updatedScoreBoard);
    setCurrentGameObj(currentGameObj);
    setIsNewHighScore(!!highestScoreObj ? highestScoreObj.id === currentGameObj.id : true);
  };

  const onPlayAgainClick = () => {
    setIsGameOver(false);
    getNewWord(difficultyLevel);
    setScore(0);
    setIsNewHighScore(false);
  };

  return (
    <div className={"Game height-100-vh d-flex flex-direction-column justify-content-between"}>
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
        <div className="Game-top__right color-red">
          <div>fast fingers</div>
          {isGameOver ? null : <div>SCORE: {!!score ? convertSecondsToMMSS(score) : convertSecondsToMMSS(0)}</div>}
        </div>
      </section>
      <section
        className={`Game-center d-flex ${!isGameOver ? "justify-content-between" : "justify-content-center"}`}
      >
        {isGameOver ?
          <CurrentGameDetails
            isNewHighScore={isNewHighScore}
            currentGameObj={currentGameObj}
            onPlayAgainClick={onPlayAgainClick}
          /> :
          <>
            <ScoreBoard scores={scoreBoard} />
            <PlayingArea
              currentWord={word.toUpperCase()}
              difficultyFactor={difficultyFactor}
              getNewWord={getNewWord}
              increaseDifficultyFactor={increaseDifficultyFactor}
              onGameOver={onGameOver}
            />
            <div className="Game-center__right" />
          </>
        }
      </section>
      <section className="Game-bottom d-flex justify-content-between">
        {isGameOver ?
          <Button
            text="QUIT"
            width="56"
            onClick={onStopGame}
          /> :
          <Button
            iconName="stop"
            iconPath={closeIcon}
            text="STOP GAME"
            width="56"
            onClick={onStopGame}
          />
        }
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