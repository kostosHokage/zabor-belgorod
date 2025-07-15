'use client';
import React, { useState } from 'react';
import { Slider } from '@/sections/StocksSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '@/components/Modal';
import '../style.scss';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
  ],
};

const modalSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
};

const WorksPage = () => {
  const [category, setCategory] = useState('Все');
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = {
    Все: [
      'images/works/materials.jpg',
      'images/works/materials1.jpg',
      'images/works/materials2.jpg',
      'images/works/materials3.jpg',
      'images/works/vorota_otkat.jpg',
      'images/works/vorota_otkat1.jpg',
      'images/works/vorota_otkat2.jpg',
      'images/works/vorota_rasp.jpg',
      'images/works/vorota_rasp1.jpg',
      'images/works/vorota_rasp2.jpg',
      'images/works/zabor.jpg',
      'images/works/zabor2.jpg',
      'images/works/zabor3.jpg',
      'images/works/zabor4.jpg',
      'images/works/zabor5.jpg',
      'images/works/zabor6.jpg',
      'images/works/zabor7.jpg',
      'images/works/zabor8.jpg',
      'images/works/zabor9.jpg',
      'images/works/zabor10.jpg',
      'images/works/zabor11.jpg',
      'images/works/zabor12.jpg',
      'images/works/zabor13.jpg',
      'images/works/zabor14.jpg',
      'images/works/zabor15.jpg',
    ],
    Ворота: [
      'images/works/vorota_otkat.jpg',
      'images/works/vorota_otkat1.jpg',
      'images/works/vorota_otkat2.jpg',
      'images/works/vorota_rasp.jpg',
      'images/works/vorota_rasp1.jpg',
      'images/works/vorota_rasp2.jpg',
    ],
    Заборы: [
      'images/works/zabor.jpg',
      'images/works/zabor2.jpg',
      'images/works/zabor3.jpg',
      'images/works/zabor4.jpg',
      'images/works/zabor5.jpg',
      'images/works/zabor6.jpg',
      'images/works/zabor7.jpg',
      'images/works/zabor8.jpg',
      'images/works/zabor9.jpg',
      'images/works/zabor10.jpg',
      'images/works/zabor11.jpg',
      'images/works/zabor12.jpg',
      'images/works/zabor13.jpg',
      'images/works/zabor14.jpg',
      'images/works/zabor15.jpg',
    ],
    Материалы: [
      'images/works/materials.jpg',
      'images/works/materials1.jpg',
      'images/works/materials2.jpg',
      'images/works/materials3.jpg',
    ],
  };

  return (
    <FadeInWhenVisible>
      <div style={{ marginBottom: 100 }} className="container mx-auto p-4">
        <Breadcrumbs pathSegments={['Наши работы']} />
        <h1
          style={{
            fontWeight: 800,
            fontSize: '36px',
            letterSpacing: 0,
            color: '#0C4C01',
            marginBottom: '20px',
          }}
        >
          Наши работы
        </h1>
        <div
          style={{ display: 'flex', gap: 5, marginBottom: 20 }}
          className="mb-4"
        >
          {Object.keys(photos).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="works-filter_btn"
              style={{
                background: cat === category ? '#0C4C01' : null,
                color: cat === category ? 'white' : null,
                fontWeight: cat === category ? 500 : null,
                transition: 'all 0.3ms easier',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <Slider {...settings}>
          {photos[category].map((photo, index) => (
            <div
              key={index}
              className="p-2 flex items-center justify-center"
              style={{ width: 'max-content' }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={photo}
                alt={`Work ${index}`}
                className="max-h-64 object-contain cursor-pointer"
              />
            </div>
          ))}
        </Slider>
        <Modal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage !== null && (
            <Slider
              {...modalSettings}
              className="modal-slider"
              initialSlide={selectedImage}
            >
              {photos[category].map((photo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{ width: 'max-content' }}
                >
                  <img
                    src={photo}
                    alt={`Full view ${index}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </Slider>
          )}
        </Modal>
      </div>
    </FadeInWhenVisible>
  );
};

export default WorksPage;
