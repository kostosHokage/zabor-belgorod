import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import './style.scss';
import { aboutContent } from '@/data/about';

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about-text">
        <TitleHeader title="О нас" />
        {aboutContent.map((item, index) => {
          return (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {item.icon}
                <h4 style={{ fontSize: 24, fontWeight: 500 }}>{item.title}</h4>
              </div>
              <div>
                <span style={{ fontSize: 18, fontWeight: 400 }}>
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="about-image">
        <img src="/images/about.png" alt="about" />
      </div>
    </div>
  );
};

export default AboutSection;
