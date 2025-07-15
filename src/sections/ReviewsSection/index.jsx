'use client';
import ReviewCard from './ReviewCard';
import './style.scss';

import React, { useEffect, useState } from 'react';
import { reviews } from '@/data/reviews';
import { Slider } from '@/sections/StocksSection';
import TitleHeader from '@/components/TitleHeader';

const ReviewsSection = () => {
  const [slidesCount, setSlidesCount] = useState(0);
  const [arrows, setArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      let countSlides = 3;

      if (currWidth > 1400) {
        countSlides = 3;
      } else if (currWidth <= 1400 && currWidth > 900) {
        countSlides = 2;
      } else if (currWidth <= 900) {
        countSlides = 1;
      }

      if (currWidth <= 1080) {
        setArrows(false);
      }

      setSlidesCount(countSlides);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    arrows: arrows,
    autoplay: slidesCount === 1,
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
