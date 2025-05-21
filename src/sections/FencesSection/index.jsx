import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import QuestionCard from '@/components/QuestionCard';
import './style.scss';
import { questions } from '@/data/questions';

const dots = [
  'Долговечные',
  'Прочные',
  'Морозоустойчивые',
  'Не нуждаются в особом уходе',
  'Не поддаются коррозии, воздействию микроорганизмов',
  'Имеют презентабельный внешний вид',
];

const FencesSection = ({ title, description, productPage = false }) => {
  return (
    <div className="fencesForHouse">
      <div className="fencesForHouse-title">
        <TitleHeader
          style={{ background: 'black' }}
          title={title}
          text={description}
        />
      </div>

      <div className="fencesForHouse-cards">
        {!productPage ? (
          <>
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
          </>
        ) : (
          <>
            <div className="fencesForHouse-cards__item">
              <img
                style={{ height: '100%' }}
                src="/images/productPages/assortment/concrete/card/first.png"
                alt=""
              />
            </div>
            <QuestionCard
              dots={dots}
              icon={
                <img
                  style={{ maxWidth: '32px' }}
                  src="/images/icons/guard.svg"
                  alt="icon"
                />
              }
              title={'Преимущества бетонных заборов'}
            />

            <div className="fencesForHouse-cards__item">
              <img
                style={{ height: '100%' }}
                src="/images/productPages/assortment/concrete/card/second.png"
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FencesSection;
