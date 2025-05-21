import React from 'react';
import './style.scss';

const WishBlock = () => {
  return (
    <div className="wish-block">
      <h2>Учтем все пожелания</h2>
      <div className="wish-cards">
        <div className="wish-cards-card">
          <div className="wish-cards-card__icon">
            <img src="/images/icons/drel.svg" alt="" />
          </div>
          <span>Подготовка участка. Демонтаж</span>
        </div>

        <div className="wish-cards-card">
          <div className="wish-cards-card__icon">
            <img src="/images/icons/fence.svg" alt="" />
          </div>
          <span>Усиленный / облегченный каркас</span>
        </div>

        <div className="wish-cards-card">
          <div className="wish-cards-card__icon">
            <img src="/images/icons/brush.svg" alt="" />
          </div>
          <span>Любой цветовой оттенок</span>
        </div>

        <div className="wish-cards-card">
          <div className="wish-cards-card__icon">
            <img src="/images/icons/drel.svg" alt="" />
          </div>
          <span>Антивандальное крепление</span>
        </div>
      </div>
    </div>
  );
};

export default WishBlock;
