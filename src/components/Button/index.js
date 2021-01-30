import React from 'react';

import Icon from './../../elements/Icon';

import './style.scss';

const Button = ({ iconName, iconPath, text, width, onClick = () => { } }) => {
  return (
    <button className="Button color-red" type="button" onClick={onClick}>
      <Icon iconName={iconName} iconPath={iconPath} width={width} />
      {text}
    </button>
  )
};

export default Button;