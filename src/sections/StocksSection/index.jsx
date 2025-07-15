'use client';
import React from 'react';
import StockCard from '@/sections/StocksSection/StockCard';
import { stocks } from '@/data/stocks';
import './style.scss';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleHeader from '@/components/TitleHeader';

export const Slider = dynamic(
  () => import('react-slick').then((mod) => mod.default),
  {
    ssr: false,
  }
);

const StocksSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <TitleHeader title="Акции" />
      <Slider {...settings}>
        {stocks?.map((item, index) => (
          <div key={index}>
            <StockCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StocksSection;
