import React from 'react';
import './style.scss';
import Button from '@/components/Button';

const AssortmentCard = ({ item }) => {
  console.log(item);
  return (
    <div key={item.image} className="assortment-card">
      <div className="assortment-card__content">
        <img src={item.image} alt="assort" />
        <div className="assortment-details">
          <div className="dimension-row">
            <span className="dimension-label">Высота</span>
            <span className="dimension-line"></span>
            <span className="dimension-value">{item.height || 'N/A'}</span>
          </div>
          <div className="dimension-row">
            <span className="dimension-label">Толщина</span>
            <span className="dimension-line"></span>
            <span className="dimension-value">{item.width || 'N/A'}</span>
          </div>
          <div className="dimension-row">
            <span className="dimension-label">Цвет</span>
            <span className="dimension-line"></span>
            <span className="dimension-value">{item.color || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="assortment-card__price">
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          {item.price}
        </span>
        <Button title="Вызвать замерщика" maxWidth="100%" />
      </div>
    </div>
  );
};

export default AssortmentCard;
