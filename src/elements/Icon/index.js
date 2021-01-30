import React from 'react';

const Icon = ({ iconName, iconPath, width }) => {
  return (
    <img
      alt={iconName}
      src={iconPath}
      width={width}
    />
  )
};

export default Icon;