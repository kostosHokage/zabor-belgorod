import './components.scss';

const StepsCard = ({ icon, stage, title }) => {
  return (
    <div className="steps-card">
      <div className="steps-card__container">
        <div className="steps-card__icon">{icon}</div>
        <div className="steps-card__text">
          <div className="steps-card__text-stages">{stage}</div>
          <div className="steps-card__text-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
