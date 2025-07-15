'use client';
import React from 'react';

const inputStyle = {
  background: '#D9ECD6',
  width: '100%',
  padding: '16px 20px',
  height: '57px',
  borderRadius: 5,
  border: 'none',
  fontSize: 18,
  color: '#0C4C01',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '16px',
  color: '#0C4C01',
  fontWeight: '500',
};

const InputMail = ({ register, name, rules, label }) => {
  return (
    <div>
      {label && (
        <label style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        style={inputStyle}
        type="email"
        placeholder="example@mail.com"
        {...register(name, rules)}
      />
    </div>
  );
};

export default InputMail;
