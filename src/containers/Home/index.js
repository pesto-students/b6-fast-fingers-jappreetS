import React, { useState, useEffect } from 'react';

import { ROUTES } from './../../constants';
import { setItemInStorage, getItemFromStorage } from '../../utils/helpers';

import Button from './../../components/Button';
import TextInput from './../../elements/TextInput';
import SelectInput from './../../elements/SelectInput';

import keyboardIcon from './../../assets/images/icons/keyboard.svg';
import playIcon from "./../../assets/images/icons/play.svg";

import './style.scss';

const Home = props => {
  const { history } = props;
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const name = getItemFromStorage("name");
    !!name && setName(name);
  }, []);

  const handleNameChange = event => {
    const { value } = event.target;
    if (!hasError && !value) {
      setHasError(true)
    } else setHasError(false);
    setName(value);
  };

  const handleStartGameClick = () => {
    validateName();
    if (!!name) {
      setItemInStorage("name", name);
      history.push(ROUTES.GAME);
    }
  };

  const validateName = () => {
    !name && setHasError(true);
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
        <TextInput
          className={!!hasError ? "border-red" : ""}
          value={name}
          onChange={handleNameChange}
        />
        {!!hasError && <div className="color-red error-msg">Please enter your name</div>}
        <SelectInput />
        <Button
          className={!!hasError ? "btn-error" : ""}
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