import React, { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/catalog';
import Button from '@/components/Button';
import './style.scss';

const Menu = ({ open, setOpen }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <nav className={`custom-menu-fullscreen${open ? ' open' : ''}`}>
      <div className="custom-menu__header">
        <img
          src="/images/icons/burgerIconCompany.png"
          alt="Логотип"
          className="custom-menu__logo"
        />
        <Button title="Перезвоните мне" onClick={() => setOpen(false)} />
        <div
          className="custom-menu__close"
          onClick={() => setOpen(false)}
          aria-label="Закрыть меню"
        >
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="custom-menu__content">
        {activeCategory === null ? (
          <>
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                className="custom-menu__item"
                onClick={() => setActiveCategory(idx)}
              >
                {cat.name}
              </button>
            ))}
            <Link
              href="/company"
              className="custom-menu__item"
              onClick={() => setOpen(false)}
            >
              Компания
            </Link>
            <Link
              href="/contacts"
              className="custom-menu__item"
              onClick={() => setOpen(false)}
            >
              Контакты
            </Link>
            <Link
              href="/works"
              className="custom-menu__item"
              onClick={() => setOpen(false)}
            >
              Наши работы
            </Link>
          </>
        ) : (
          <>
            <button
              className="custom-menu__item custom-menu__back"
              onClick={() => setActiveCategory(null)}
            >
              ← Назад
            </button>
            {categories[activeCategory].items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="custom-menu__item"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;
