import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import QuestionCard from '@/components/QuestionCard';
import './style.scss';
import { questions } from '@/data/questions';

const FencesSection = () => {
  return (
    <div className="fencesForHouse">
      <div className="fencesForHouse-title">
        <TitleHeader
          style={{ background: 'black' }}
          title="Заборы и ограждения для частного дома"
          text="Выбор ограждения для частного дома – важный этап строительства, который
        влияет на безопасность, приватность и внешний вид участка. Какой забор
        выбрать? Все зависит от ваших потребностей и особенностей территории."
        />
      </div>

      <div className="fencesForHouse-cards">
        <div className="fencesForHouse-cards__item">
          <img
            style={{ height: '100%' }}
            src="/images/previewCard.png"
            alt=""
          />
        </div>
        {questions.map((item) => {
          return (
            <QuestionCard
              key={item.title}
              title={item.title}
              description={item.description}
              dots={item.dots}
              icon={
                <span
                  style={{
                    fontSize: '33.45px',
                    fontWeight: 500,
                    color: '#0C4C01',
                  }}
                >
                  ?
                </span>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default FencesSection;
