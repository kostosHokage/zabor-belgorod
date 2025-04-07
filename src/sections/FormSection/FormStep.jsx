import React from 'react';
import './style.scss';

const FormStep = ({ item }) => {
  return (
    <div className="form-step">
      <div className="form-step__number">
        <span>{item.number}</span>
      </div>
      <div className="form-step__title">
        <span>{item.title}</span>
      </div>
    </div>
  );
};

export default FormStep;
