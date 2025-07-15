import React from 'react';
import './style.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
      <a
        style={{
          fontWeight: 600,
          fontFamily: '"Manrope", sans-serif',
          fontSize: 16,
          height: 46,
          lineHeight: '140%',
          letterSpacing: 0,
          width: 'max-content',
          background: '#1DB606',
          padding: '12px 24px',
          color: 'white',
          borderRadius: 5,
          transition: 'all 0.3s',
          border: 0,
          cursor: 'pointer',
          boxShadow: '0px 0px 28px 0px rgba(29, 182, 6, 0.5)',
        }}
        href="/"
      >
        Вернуться на главную
      </a>
    </div>
  );
};

export default NotFound;
