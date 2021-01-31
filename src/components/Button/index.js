import React from 'react';

import Icon from './../../elements/Icon';

import './style.scss';

const Button = ({ className, iconName, iconPath, showIconMargin, text, width, onClick = () => { } }) => {
  return (
    <button className={`Button color-red ${!!className ? className : ""}`} type="button" onClick={onClick}>
      <Icon
        className={!!showIconMargin ? "show-icon-margin" : ""}
        iconName={iconName}
        iconPath={iconPath}
        width={width}
      />
      {text}
    </button>
  )
};

export default Button;