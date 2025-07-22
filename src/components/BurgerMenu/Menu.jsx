import React, { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/catalog';
import Button from '@/components/Button';
import { AnimatePresence, motion } from 'framer-motion';
import './style.scss';

const Menu = ({ open, setOpen, onCallBtn }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <nav className={`custom-menu-fullscreen${open ? ' open' : ''}`}>
      <div className="custom-menu__header">
        <img
          src="/images/icons/burgerIconCompany.png"
          alt="Логотип"
          className="custom-menu__logo"
        />
        <Button title="Перезвоните мне" onClick={onCallBtn} />
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
        <AnimatePresence mode="wait" initial={false}>
          {activeCategory === null ? (
            <motion.div
              key="main-list"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="sub-list"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Menu;
