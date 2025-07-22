import React from 'react';
import './style.scss';

const ProductImage = ({ src }) => {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <img
        style={{
          position: 'relative',
          display: 'block',
          zIndex: 1,
        }}
        src="/images/productPages/concrete.png"
        alt="House with fence"
      />
    </div>
  );
};

export default ProductImage;
