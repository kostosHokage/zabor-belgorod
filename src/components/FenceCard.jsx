import './components.scss';
const FenceCard = ({ title, price, image, width }) => {
  console.log(123);
  return (
    <div className="fenceCard" style={{ maxWidth: width, width: '100%' }}>
      <div className="fenceCard__container">
        <div className="fenceCard-content">
          <h3>{title}</h3>
          <p>от {price} руб. п/м</p>
        </div>
        <div
          className="fenceCard-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default FenceCard;
