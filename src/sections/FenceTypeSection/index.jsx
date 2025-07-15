import React from 'react';
import FenceCard from '@/components/FenceCard';
import './style.scss';
import { fences } from '@/data/fences';
import TitleHeader from '@/components/TitleHeader';

const FenceTypeSection = () => {
  return (
    <div className="fenceType">
      <TitleHeader title="Заборы в Белгороде" />
      <div className="fenceType-cards">
        {fences.map((fence) => (
          <FenceCard key={fence.title} {...fence} />
        ))}
      </div>
    </div>
  );
};

export default FenceTypeSection;
