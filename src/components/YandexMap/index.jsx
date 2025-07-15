'use client';

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  const mapState = {
    center: [50.622489, 36.465861],
    zoom: 15,
  };

  const companyCoordinates = [50.622489, 36.465861];
  const companyAddress = 'село Стрелецкое, Южная ул., 31';

  return (
    <YMaps query={{ apikey: '81289efe-4dce-4652-89ed-cd6848ec3abd' }}>
      <Map state={mapState} width="100%" height="520px">
        <Placemark
          geometry={companyCoordinates}
          properties={{
            hintContent: 'Заборы в Белгороде',
            balloonContent: `<strong>${companyAddress}</strong>`,
          }}
          options={{
            preset: 'islands#blueDotIcon',
          }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
