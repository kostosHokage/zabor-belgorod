'use client';
import React from 'react';

const baseStyle = {
  background: '#D9ECD6',
  width: '100%',
  padding: '16px 20px',
  height: '57px',
  borderRadius: 5,
  border: 'none',
  fontSize: 18,
  color: '#0C4C01',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '16px',
  color: '#0C4C01',
  fontWeight: '500',
};

const Input = ({ name, placeholder, style, min, max, label, ...rest }) => {
  const combinedStyle = { ...baseStyle, ...style };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        name={name}
        max={max}
        min={min}
        placeholder={placeholder}
        style={combinedStyle}
        id={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
