import React from 'react';
import Link from 'next/link';

const CatalogItem = ({ image, title, href, onClick }) => {
  return (
    <Link onClick={onClick} href={href} className="catalog-item">
      <img src={image} alt={title} className="catalog-item__image" />
      <span className="catalog-item__title">{title}</span>
    </Link>
  );
};

export default CatalogItem;
