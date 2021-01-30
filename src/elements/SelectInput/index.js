import React from 'react';
import { DIFFICULTY_LEVEL } from '../../constants';

import './style.scss';

const SelectInput = () => {
  return (
    <select className="SelectInput">
      {DIFFICULTY_LEVEL.map(level => (
        <option key={level.value}>{level.label}</option>
      ))}
    </select>
  )
};

export default SelectInput;
