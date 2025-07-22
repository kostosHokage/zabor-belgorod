import React from 'react';
import ProductPage from '@/components/productPage';
import { concerteFence, woodFence } from '@/data/products';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export const metadata = {
  title: `Заборы из Дерева | Заборы в Белгороде`,
  description: 'Свяжитесь с нами...',
};
const ConcreteFences = () => {
  return (
    <FadeInWhenVisible>
      <div>
        <ProductPage item={woodFence} />
      </div>
    </FadeInWhenVisible>
  );
};

export default ConcreteFences;
