import React from 'react';

import './style.scss';

const SelectInput = ({ data, value, onChange = () => { } }) => {
  return (
    <select className="SelectInput" value={value} onChange={onChange}>
      {data.map(item => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
};

export default SelectInput;
