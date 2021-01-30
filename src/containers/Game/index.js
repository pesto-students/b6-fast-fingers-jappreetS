import React from 'react';

import { ROUTES } from './../../constants';

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
  return (
    <div className="Game height-100 d-flex flex-direction-column justify-content-between">
      <section className="Game-top d-flex justify-content-between">
        <div className="Game-top__left">
          <div className="icon-text d-flex align-items-center">
            <Icon iconName="user" iconPath={userIcon} />
            <span className="color-red">PLAYER_NAME_777</span>
          </div>
          <div className="icon-text d-flex align-items-center">
            <Icon iconName="user" iconPath={gamepadIcon} />
            <span className="color-red">LEVEL: MEDIUM</span>
          </div>
        </div>
        <div className="Game-top__right color-red">fast fingers</div>
      </section>
      <section className="Game-center d-flex justify-content-between justify-content-center">
        {false && <>
          <ScoreBoard />
          <PlayingArea />
          <div className="Game-center__right" />
        </>}
        <CurrentGameDetails />
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