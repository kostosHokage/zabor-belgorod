const QuestionCard = ({ icon, title, description, dots, white }) => {
  return (
    <div
      key={title}
      className="questionCard"
      style={{ background: white ? 'white' : '#F3F3F3' }}
    >
      <div className="questionCard__container">
        <div className="questionCard-icon">{icon}</div>
        <div className="questionCard-text">
          <div className="questionCard-text__title">{title}</div>
          <div className="questionCard-text__description">{description}</div>
        </div>
        {dots ? (
          <div className="questionCard-dots">
            {dots.map((item) => {
              return (
                <div key={item} className="questionCard-dots__item">
                  <div />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuestionCard;
