import React from 'react';
import Button from '@/components/Button';

const StockCard = ({ item }) => {
  return (
    <div className="stock-card">
      <div className="stock-card__image">{item.img}</div>

      <div className="stock-card__content">
        <div className="stock-card__content-title">{item.title}</div>
        <div className="stock-card__content-price">
          <img src="/images/icons/sale.svg" alt="sale" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              className="stock-card__content-price_old"
              style={{
                fontSize: 18,
                fontWeight: 500,
                textDecoration: 'line-through',
                color: '#4C4A3F',
              }}
            >
              {item.oldPrice}
            </span>
            <span
              className="stock-card__content-price_new"
              style={{
                fontSize: 24,
                color: '#0C4C01',
                fontWeight: 800,
              }}
            >
              {item.price}
            </span>
          </div>
        </div>
        <div className="stock-card__content-description">
          <span>{item.description}</span>
        </div>
        <Button title="Заказать расчет" />
      </div>
    </div>
  );
};

export default StockCard;
