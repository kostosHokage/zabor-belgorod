import './components.scss';

const TitleHeader = ({ title, text, halfMargin, subdesc, column }) => {
  return (
    <div
      style={{
        marginBottom: halfMargin ? 32 : 50,
        display: 'flex',
        flexDirection: column ? 'column' : 'row',
      }}
      className="titleHeader"
    >
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
