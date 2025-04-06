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

        <div className="montage-stages">
          <div className="montage-stages__steps">
            <Button title="Консультация" />
            <div className="montage-stages__steps-line" />
            <div className="montage-stages__steps-icon">02</div>
            <div className="montage-stages__steps-line" />
            <div className="montage-stages__steps-icon">03</div>
            <div className="montage-stages__steps-line" />
            <div className="montage-stages__steps-icon">04</div>
            <div className="montage-stages__steps-line" />
            <div className="montage-stages__steps-icon">05</div>
          </div>
        </div>

        <div className="montage-cards">
          {steps.map((item) => {
            return (
              <StepsCard
                key={item.stage}
                title={item.title}
                icon={item.icon}
                stage={item.stage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MontageSection;
