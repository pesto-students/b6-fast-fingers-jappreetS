import React, { useContext, useEffect, useState } from 'react';

import { DIFFICULTY_LEVEL_VALUE, ROUTES } from './../../constants';
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
  const [difficultyFactor, setDifficultyFactor] = useState(1);
  const [word, setWord] = useState("");
  const [name, setName] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");

  useEffect(() => {
    const name = getItemFromStorage("name");
    const difficultyLevel = getItemFromStorage("difficultyLevel");
    setName(name);
    setDifficultyLevel(difficultyLevel);
    setDifficultyFactor(DIFFICULTY_LEVEL_VALUE[difficultyLevel]);
    const currentWord = generateWord(dictionary[difficultyLevel]);
    setWord(currentWord);
  }, [dictionary]);

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
        className={`Game-center d-flex ${true ? "justify-content-between" : "justify-content-center"}`}
      >
        {true ? <>
          <ScoreBoard />
          <PlayingArea
            difficultyFactor={difficultyFactor}
            currentWord={word}
          />
          <div className="Game-center__right" />
        </> :
          <CurrentGameDetails />
        }
      </section>
      <section className="Game-bottom d-flex justify-content-between">
        <Button
          iconName="stop"
          iconPath={closeIcon}
          text="STOP GAME"
          width="56"
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