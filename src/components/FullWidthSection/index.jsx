import React from 'react';
import './style.scss';

const FullWidthSection = ({
  children,
  bgColor = '#F3F3F3',
  className = '',
}) => {
  return (
    <div
      className={`full-width-section ${className}`}
      style={{ '--bg-color': bgColor }}
    >
      <div className="full-width-section__content">{children}</div>
    </div>
  );
};

export default FullWidthSection;
