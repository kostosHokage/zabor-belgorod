import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import Button from '@/components/Button';
import StepsCard from '@/components/StepsCard';
import './style.scss';
import { steps } from '@/data/steps';

const MontageSection = () => {
  return (
    <div className="montage">
      <div className="montage__container">
        <div className="montage-title">
          <TitleHeader
            title="Установка заборов"
            text={`Стоимость ограждения зависит от дороговизны материалов и трудозатрат. Наша компания осуществляет монтаж заборов в Белгороде под ключ. Цены за погонный метр – одни из самых доступных в регионе.`}
            subdesc="Рассчитать стоимость и заказать установку можно на сайте или по телефону."
          />
        </div>

        <div className="montage-stages__steps-wrapper">
          <div className="montage-stages__btn">
            <Button title="Консультация" />
          </div>
          {steps.map((item, index) => (
            <div key={item.stage} className="montage-stages__step-block">
              <div className="montage-stages__step-icon">
                {index === 0 ? (
                  <Button title="Консультация" />
                ) : (
                  `0${index + 1}`
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="montage-stages__step-line" />
              )}
            </div>
          ))}
        </div>

        <div className="montage-cards">
          {steps.map((item) => (
            <StepsCard
              key={item.stage}
              title={item.title}
              icon={item.icon}
              stage={item.stage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MontageSection;
