'use client';
import React, { forwardRef } from 'react';
import { X } from 'lucide-react';
import CatalogItem from './CatalogItem';
import { categories } from '@/data/catalog';

const CatalogPopup = forwardRef(({ isOpen, onClose }, ref) => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <div
      id="catalog-popup"
      className={`catalog-popup ${isOpen ? 'active' : ''}`}
      ref={ref}
      aria-hidden={!isOpen}
    >
      <button
        className="catalog-popup__close"
        onClick={onClose}
        style={{ zIndex: 1 }}
        aria-label="Закрыть каталог"
      >
        <X size={24} />
      </button>

      <div className="catalog-popup__columns">
        <div className="catalog-popup__categories">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`catalog-popup__category ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveCategory(index)}
            >
              <img src={category.icon} alt="" aria-hidden="true" />
              {category.name}
            </div>
          ))}
        </div>

        <div className="catalog-popup__items">
          {categories[activeCategory].items.map((item) => (
            <CatalogItem
              key={item.title}
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
});

CatalogPopup.displayName = 'CatalogPopup';

export default CatalogPopup;
