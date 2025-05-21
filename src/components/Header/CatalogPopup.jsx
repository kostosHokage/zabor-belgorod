'use client';
import React from 'react';
import CatalogItem from './CatalogItem';
import { categories } from '@/data/catalog';
import { X } from 'lucide-react';

const CatalogPopup = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <div className={`catalog-popup ${isOpen ? 'active' : ''}`}>
      <button
        className="catalog-popup__close"
        onClick={onClose}
        aria-label="Закрыть каталог"
      >
        <X size={24} />
      </button>

      <div className="catalog-popup__columns">
        <div className="catalog-popup__categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`catalog-popup__category ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <img src={category.icon} alt={category.name} />
              {category.name}
            </div>
          ))}
        </div>

        <div className="catalog-popup__items">
          {categories[activeCategory].items.map((item, index) => (
            <CatalogItem
              key={index}
              onClick={onClose}
              image={item.image}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPopup;
