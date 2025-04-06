import './components.scss';

const TitleHeader = ({ title, text, halfMargin, subdesc }) => {
  return (
    <div style={{ marginBottom: halfMargin ? 32 : 50 }} className="titleHeader">
      <h2 className="titleHeader-title">{title}</h2>
      {text ? (
        <span className="titleHeader-description">
          {text}
          {subdesc ? (
            <>
              <br />
              <br />
              {subdesc}
            </>
          ) : null}
        </span>
      ) : null}
    </div>
  );
};

export default TitleHeader;
