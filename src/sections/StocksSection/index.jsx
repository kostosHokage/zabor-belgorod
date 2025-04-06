import TitleHeader from '@/components/TitleHeader';
import React from 'react';
import StockCard from '@/sections/StocksSection/StockCard';
import { stocks } from '@/data/stocks';
import { Navigation, Pagination } from 'swiper/modules';
import './style.scss';

const StocksSection = () => {
  return (
    <div>
      <TitleHeader title="Акции" />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {stocks.map((item, index) => {
          return (
            <div key={index}>
              <StockCard item={item} />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StocksSection;
