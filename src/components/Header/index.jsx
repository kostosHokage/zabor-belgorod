'use client';
import './index.scss';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button';
import CatalogPopup from '../Header/CatalogPopup';

const Header = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const catalogRef = useRef(null);
  const catalogButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        catalogRef.current &&
        !catalogRef.current.contains(event.target) &&
        catalogButtonRef.current &&
        !catalogButtonRef.current.contains(event.target)
      ) {
        setShowCatalog(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowCatalog(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href={'/'}>
          <div className="logo-content">
            <img src="/images/logo.svg" alt="" />
            <span className="logo-content__title">
              Заборы <br /> в Белгороде
            </span>
          </div>
        </a>
        <div className="logo-worktime">
          <span>Время работы с 09:00 до 20:00</span>
        </div>
      </div>

      <CatalogPopup
        isOpen={showCatalog}
        ref={catalogRef}
        onClose={() => setShowCatalog(false)}
      />

      <div className="nav">
        <div className="nav-item">
          <button
            ref={catalogButtonRef}
            className="nav-item__catalog-button"
            onClick={toggleCatalog}
            aria-expanded={showCatalog}
          >
            Каталог
          </button>
        </div>
        <div className="nav-item">
          <Link href="/gates">
            <span>Компания</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/materials">
            <span>Контакты</span>
          </Link>
        </div>
      </div>

      <div className="callme">
        <div className="callme-contacts">
          <span>golovinroman797@mail.ru</span>
          <span>8 (905) 678-93-08</span>
        </div>
        <Button title="Перезвоните мне" />
      </div>
    </div>
  );
};

export default Header;
