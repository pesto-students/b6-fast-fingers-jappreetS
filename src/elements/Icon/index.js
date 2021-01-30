import React from 'react';

const Icon = ({ className, iconName, iconPath, width, onClick = () => { } }) => {
  return (
    <img
      className={`Icon cursor-pointer ${!!className ? className : ''}`}
      alt={iconName}
      src={iconPath}
      width={width}
      onClick={onClick}
    />
  )
};

export default Icon;