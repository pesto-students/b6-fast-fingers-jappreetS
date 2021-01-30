import React from 'react';

import './style.scss';

const TextInput = ({ value, onChange = () => { } }) => {
  return (
    <input
      className="TextInput"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
