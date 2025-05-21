import React from 'react';

const style = {
  background: '#D9ECD6',
  width: '100%',
  padding: '16px 20px',
  height: '57px',
  borderRadius: 5,
  border: 'none',
  fontSize: 18,
  color: '#0C4C01',
};

const Input = ({ name, placeholder, ...rest }) => {
  return (
    <input name={name} placeholder={placeholder} style={style} {...rest} />
  );
};

export default Input;
