import React from 'react';

import './style.scss';

const TextInput = ({ className, value, onChange = () => { } }) => {
  return (
    <input
      className={`TextInput ${!!className ? className : ""}`}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
