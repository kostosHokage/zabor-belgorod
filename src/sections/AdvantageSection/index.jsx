import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import QuestionCard from '@/components/QuestionCard';
import './style.scss';
import { advantage } from '@/data/advantage';

const AdvantageSection = () => {
  return (
    <div className="advantage">
      <div className="advantage__container">
        <div className="advantage-header">
          <TitleHeader
            title="Преимущества"
            text="Забор — это не только граница участка, но и защита, приватность и стиль. В нашем ассортименте металлические, деревянные, кирпичные и комбинированные ограждения. Предлагаем надежные и эстетичные решения с учетом ваших требований. Долговечные материалы, качественный монтаж, доступные цены."
            halfMargin={true}
          />
        </div>
        <div className="advantage-cards">
          <div className="advantage-cards__container">
            {advantage.map((item) => {
              return (
                <QuestionCard
                  key={item.description}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  white
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
