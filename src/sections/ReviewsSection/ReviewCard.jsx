import React from 'react';
import './style.scss';

const StarIcon = ({ filled = true }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? '#4aee3e' : 'none'}
    stroke="#27AE60"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77
                     5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div className="stars">
    {[...Array(count)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);
const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-card__container">
        <div className="review-card_title">
          <div className="review-card_stars">
            <Stars count={review.stars} />
          </div>
          <div className="review-card_title-name">{review.name}</div>
          <div className="review-card_title-date">{review.date}</div>
        </div>
        <div className="review-card_content">
          <span>{review.content}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
