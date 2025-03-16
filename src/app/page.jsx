import '../styles/main.scss';
import Button from '@/components/Button';
import TitleHeader from '@/components/TitleHeader';
import { advantage, fences, questions, steps } from '../../public/data';
import QuestionCard from '@/components/QuestionCard';
import FenceCard from '@/components/FenceCard';
import StepsCard from '@/components/StepsCard';

const HomePage = () => {
  return (
    <div className="main">
      <div className="main-title">
        Изготовление и монтаж заборов под ключ <br />в Белгороде и Белгородской
        области
      </div>
      <div className="main-text">
        Быстрый монтаж, долговечные конструкции, гарантия качества. Рассчитаем
        стоимость и подберем <br /> оптимальный вариант для вашего участка.
      </div>
      <div style={{ marginBottom: 64 }}>
        <Button title="Вызвать замерщика" />
      </div>
      <div className="main-image">
        <img src="/images/mainPhoto.png" alt="mainPhoto" />
      </div>
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
      <div className="fenceType">
        <div className="fenceType-title">
          <h3>Заборы в Белгороде</h3>
        </div>
        <div className="fenceType-cards">
          {fences.map((fence) => (
            <FenceCard key={fence.title} {...fence} />
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default HomePage;
