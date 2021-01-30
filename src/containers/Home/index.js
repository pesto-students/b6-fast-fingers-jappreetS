import React from 'react';

import { ROUTES } from '../../constants';

import Button from './../../components/Button';
import TextInput from './../../elements/TextInput';
import SelectInput from './../../elements/SelectInput';

import keyboardIcon from './../../assets/images/icons/keyboard.svg';
import playIcon from "./../../assets/images/icons/play.svg";

import './style.scss';

const Home = props => {
  const { history } = props;

  const handleStartGameClick = () => {
    history.push(ROUTES.GAME);
  };

  return (
    <div className="Home">
      <section className="Home-logoSection">
        <img
          alt="keyboard"
          src={keyboardIcon}
          className="logo"
        />
        <h1 className="color-red">fast fingers</h1>
        <div className="tag-line"><span className="color-red">the ultimate typing game</span></div>
      </section>
      <section className="Home-inputSection">
        <TextInput />
        <SelectInput />
        <Button
          iconName="play"
          iconPath={playIcon}
          text="START GAME"
          width="56"
          onClick={handleStartGameClick}
        />
      </section>
    </div>
  );
}

export default Home;