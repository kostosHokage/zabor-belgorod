import React from 'react';
import FenceCard from '@/components/FenceCard';
import './style.scss';
import { fences } from '@/data/fences';

const FenceTypeSection = () => {
  return (
    <div className="fenceType">
      <div className="fenceType-title">
        <h3>Заборы в Белгороде</h3>
      </div>
      <div className="fenceType-cards">
        {fences.map((fence) => (
          <FenceCard key={fence.title} {...fence} />
        ))}
      </div>
    </div>
  );
};

export default FenceTypeSection;
