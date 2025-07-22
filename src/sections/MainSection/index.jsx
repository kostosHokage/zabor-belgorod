import React from 'react';
import Button from '@/components/Button';
import './style.scss';

const MainSection = () => {
  return (
    <div className="main">
      <h1 className="main-title">
        Изготовление и монтаж заборов под ключ <br />в Белгороде и Белгородской
        области
      </h1>
      <div className="main-text">
        Быстрый монтаж, долговечные конструкции, гарантия качества. Рассчитаем
        стоимость и подберем <br /> оптимальный вариант для вашего участка.
      </div>
      <div style={{ marginBottom: 64 }}>
        <Button href="#form" title="Вызвать замерщика" />
      </div>
      <div className="main-image">
        <img loading={'lazy'} src="/images/mainPhoto.png" alt="mainPhoto" />
      </div>
    </div>
  );
};

export default MainSection;
