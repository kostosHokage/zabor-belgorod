'use client';
import React, { useEffect, useState } from 'react';
import { Slider } from '@/sections/StocksSection';
import './style.scss';
const Works = ({ worksPhotos }) => {
  const [slidesCount, setSlidesCount] = useState(1);

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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <Slider {...settings}>
        {worksPhotos.map((photo) => {
          return (
            <div className="works-slider-item">
              <img src={photo} alt="work" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Works;
