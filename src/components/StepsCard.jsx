import './components.scss';

const StepsCard = () => {
  return (
    <div className="steps-card">
      <div className="steps-card__container">
        <div className="steps-card__icon">
          <img src="/images/icons/bigDocument.svg" alt="doc" />
        </div>
        <div className="steps-card__text">
          <div className="steps-card__text-stages">Этап 1</div>
          <div className="steps-card__text-title">Консультация, договор</div>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
