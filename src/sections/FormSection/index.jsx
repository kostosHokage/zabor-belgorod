import React from 'react';
import './style.scss';
import TitleHeader from '@/components/TitleHeader';
import FormStep from '@/sections/FormSection/FormStep';
import FormComponent from '@/components/FormComponent';

const steps = [
  { number: 1, title: 'Консультация, замер, договор' },
  { number: 2, title: 'Монтаж ограждений' },
  { number: 3, title: 'Прием работ и оплата' },
];

const FormSection = () => {
  return (
    <div className="form" id="form">
      <div className="form-section">
        <div className="form-section__header">
          <TitleHeader
            column
            title="Заборы в Белгороде"
            text={`Стоимость ограждения зависит от дороговизны материалов и трудозатрат. Наша компания осуществляет монтаж заборов в Белгороде под ключ. Цены за погонный метр – одни из самых доступных в регионе.
Рассчитать стоимость и заказать установку можно на сайте или по телефону.`}
          />
        </div>
        <div className="form-section__steps">
          <h4 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>
            Этапы работ
          </h4>
          <div className="form-section__steps-cards">
            {steps.map((item) => {
              return <FormStep key={item.number} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="form-card">
        <FormComponent />
      </div>
    </div>
  );
};

export default FormSection;
