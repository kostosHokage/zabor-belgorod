'use client';
import React, { useState } from 'react';
import './style.scss';
import Modal from '@/components/Modal';
import PersonalData from '@/components/PersonalData';

const Footer = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const openPolicyModal = () => setIsPolicyOpen(true);
  const closePolicyModal = () => setIsPolicyOpen(false);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-info__title">
            <div className="footer-info__title-icon">
              <img src="/images/icons/footer-logo.svg" alt="logo" />
            </div>
            <div className="footer-info__title-text">
              <span>Заборы в Белгороде</span>
            </div>
          </div>

          <div className="footer-info__contacts">
            <div className="footer-info__contacts-item">
              golovinroman797@mail.ru
            </div>
            <div className="footer-info__contacts-item">8 (905) 678-93-08</div>
            <div className="footer-info__contacts-icons">
              <img src="/images/icons/vk.svg" alt="vk" />
              <img src="/images/icons/instagram.svg" alt="insta" />
            </div>
          </div>

          <div className="footer-info__rules">
            <span>© Заборы в Белгороде, 2025. Все права защищены.</span>
            <span
              className="footer-policy-link"
              onClick={() => setIsPolicyOpen(true)}
            >
              Политика обработки персональных данных
            </span>
          </div>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-columns-item">
          <div className="footer-columns-item__title">Заборы</div>
          <div className="footer-columns-item__name">Из цокольных кирпичей</div>
          <div className="footer-columns-item__name">Из евроштакетника</div>
          <div className="footer-columns-item__name">Из сетки</div>
          <a href="/fences/concerte" className="footer-columns-item__name">
            Из блоков
          </a>
          <div className="footer-columns-item__name">Бетонные заборы</div>
          <div className="footer-columns-item__name">Из профлиста</div>
          <div className="footer-columns-item__name">Столбы для заборов</div>
        </div>
        <div className="footer-columns-item">
          <div className="footer-columns-item__title">Ворота</div>
          <div className="footer-columns-item__name">Распашные ворота</div>
          <div className="footer-columns-item__name">Откатные ворота</div>
        </div>
        <div className="footer-columns-item">
          <div className="footer-columns-item__title">Навесы</div>
          <div className="footer-columns-item__name">
            Навесы из поликарбоната
          </div>
        </div>
        <div className="footer-columns-item">
          <div className="footer-columns-item__title">Материалы</div>
          <div className="footer-columns-item__name">Фундаментные кирпичи</div>
          <div className="footer-columns-item__name">
            Керамзитобетонные блоки
          </div>
          <div className="footer-columns-item__name">Кирпичи</div>
        </div>
        <div className="footer-columns-item">
          <div className="footer-columns-item__title">Контакты</div>
          <div className="footer-columns-item__name">Компания</div>
        </div>
      </div>
      <PersonalData
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
};

export default Footer;
