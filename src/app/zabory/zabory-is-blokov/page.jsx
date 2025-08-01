import React from 'react';
import ProductPage from '@/components/productPage';
import { concerteFence } from '@/data/products';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export const metadata = {
  title: `Заборы из Бетона | Заборы в Белгороде`,
  description: 'Свяжитесь с нами...',
};
const ZaborIzBlokov = () => {
  return (
    <FadeInWhenVisible>
      <div>
        <ProductPage item={concerteFence} />
      </div>
    </FadeInWhenVisible>
  );
};

export default ZaborIzBlokov;
