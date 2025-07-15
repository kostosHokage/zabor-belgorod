'use client';
import React from 'react';
import './components.scss';

const Button = ({
  title,
  type,
  maxWidth,
  white,
  onClick,
  style,
  disabled,
  href,
  smoothScroll = true,
}) => {
  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: smoothScroll ? 'smooth' : 'auto',
        });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className="button"
      onClick={handleClick}
      type={type ?? undefined}
      disabled={disabled && false}
      style={{
        fontWeight: 600,
        fontFamily: '"Manrope", sans-serif',
        fontSize: 16,
        height: 46,
        lineHeight: '140%',
        letterSpacing: 0,
        width: maxWidth ? '100%' : 'max-content',
        background: white ? '#FFFFFF' : '#1DB606',
        padding: '12px 24px',
        color: white ? '#1DB606' : 'white',
        borderRadius: 5,
        border: white ? '1px solid #1DB606' : 0,
        cursor: 'pointer',
        boxShadow: '0px 0px 28px 0px rgba(29, 182, 6, 0.5)',
        ...style,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
