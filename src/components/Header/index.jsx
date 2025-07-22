'use client';
import './index.scss';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button';
import CatalogPopup from '../Header/CatalogPopup';
import Modal from '@/components/Modal';
import CallForm from '@/components/CallForm';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import BurgerMenu from '@/components/BurgerMenu';

const Header = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const catalogRef = useRef(null);
  const catalogButtonRef = useRef(null);
  const headerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCatalog = () => {
    setShowCatalog((prev) => !prev);
  };

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

  return (
    <FadeInWhenVisible>
      <div className="header" ref={headerRef}>
        <div className="logo">
          <a href={'/'}>
            <div className="logo-content">
              <img src="/images/logo.svg" alt="Логотип" />
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

        <nav className="nav">
          <div className="nav-item">
            <button
              ref={catalogButtonRef}
              className="nav-item__catalog-button"
              onClick={toggleCatalog}
              aria-expanded={showCatalog}
              aria-controls="catalog-popup"
            >
              Каталог
            </button>
          </div>
          <div className="nav-item">
            <Link href="/company">
              <span>Компания</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/contacts">
              <span>Контакты</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/works">
              <span>Наши работы</span>
            </Link>
          </div>
        </nav>

        <div className="callme">
          <div className="callme-contacts">
            <span>golovinroman797@mail.ru</span>
            <span>8 (905) 678-93-08</span>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            title="Перезвоните мне"
          />
        </div>

        <BurgerMenu callBtn={() => setIsModalOpen(true)} />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CallForm />
        </Modal>
      </div>
    </FadeInWhenVisible>
  );
};

export default Header;
