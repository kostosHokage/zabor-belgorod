import React from 'react';

const ProductImage = ({ src }) => {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <img
        style={{
          zIndex: 2,
          position: 'relative',
          display: 'block',
        }}
        src="/images/productPages/concrete.png"
        alt="House with fence"
      />
      <div
        style={{
          width: 372,
          height: 372,
          backgroundColor: '#0C4C01',
          position: 'absolute',
          top: -50,
          right: 20,
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default ProductImage;
