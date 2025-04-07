import ReviewCard from './ReviewCard';
import './style.scss';

import React from 'react';
import { reviews } from '@/data/reviews';
import { Slider } from '@/sections/StocksSection';
import TitleHeader from '@/components/TitleHeader';

const ReviewsSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <TitleHeader title="Отзывы" />
      <Slider {...settings}>
        {reviews.map((item) => {
          return <ReviewCard key={item.name} review={item} />;
        })}
      </Slider>
    </div>
  );
};

export default ReviewsSection;
