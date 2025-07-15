import React from 'react';
import ProductPage from '@/components/productPage';
import { concerteFence } from '@/data/products';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

const ConcreteFences = () => {
  return (
    <FadeInWhenVisible>
      <div>
        <ProductPage item={concerteFence} />
      </div>
    </FadeInWhenVisible>
  );
};

export default ConcreteFences;
