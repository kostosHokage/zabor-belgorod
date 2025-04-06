import React from 'react';
import Button from '@/components/Button';
import './style.scss';

const MainSection = () => {
  return (
    <div className="main">
      <div className="main-title">
        Изготовление и монтаж заборов под ключ <br />в Белгороде и Белгородской
        области
      </div>
      <div className="main-text">
        Быстрый монтаж, долговечные конструкции, гарантия качества. Рассчитаем
        стоимость и подберем <br /> оптимальный вариант для вашего участка.
      </div>
      <div style={{ marginBottom: 64 }}>
        <Button title="Вызвать замерщика" />
      </div>
      <div className="main-image">
        <img src="/images/mainPhoto.png" alt="mainPhoto" />
      </div>
    </div>
  );
};

export default MainSection;
