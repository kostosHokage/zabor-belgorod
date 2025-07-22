import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import TitleHeader from '@/components/TitleHeader';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import '../style.scss';

export const metadata = {
  title: 'Компания | Заборы в Белгороде',
  description: 'Свяжитесь с нами...',
};

const AboutCompanyPage = () => {
  return (
    <FadeInWhenVisible>
      <div className="company">
        <Breadcrumbs pathSegments={['Компания']} />
        <TitleHeader
          text={[
            'Более 10 лет специализируемся на производстве заборов, откатных автоматических и распашных ворот, навесов для автомобилей. Компания имеет собственное производство, большое количество бригад и автотранспорт, благодаря чему мы выдерживаем минимальные сроки изготовления и установки зоборов. Наши бригады полностью вооруженны всем необходимым инструментом: от бензобура и генератора до «последнего» самореза.',
            <br key="br1" />,
            <br key="br2" />,
            'Мы бесплатно консультируем своих клиентов по поводу цен на услуги, сроков и других важных деталей. Сотрудники готовы выехать на место монтажа ограждения, рассчитать стоимость работ и заняться оформлением документов.',
          ]}
          title={'О компании'}
        />
        <div className="company-image" style={{ borderRadius: 15 }}>
          <img
            width={1320}
            height={520}
            src={'/images/company.png'}
            alt={'company'}
          />
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutCompanyPage;
