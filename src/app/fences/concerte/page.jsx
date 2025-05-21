import React from 'react';
import ProductPage from '@/components/productPage';
import { concerteFence } from '@/data/products';

const ConcreteFences = () => {
  return (
    <div>
      <ProductPage item={concerteFence} />
    </div>
  );
};

export default ConcreteFences;
