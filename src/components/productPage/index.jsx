import React from 'react';
import '../../styles/main.scss';
import FencesSection from '@/sections/FencesSection';
import TitleHeader from '@/components/TitleHeader';
import QuestionCard from '@/components/QuestionCard';
import './style.scss';
import ProductImage from '@/components/productPage/ProductImage';
import Button from '@/components/Button';
import FullWidthSection from '@/components/FullWidthSection';
import { Slider } from '@/sections/StocksSection';
import AssortmentCard from '@/components/productPage/AssortmentCard';
import WishBlock from '@/components/productPage/WishBlock';
import Calculator from '@/components/Calculator';
import FormSection from '@/sections/FormSection';

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const ProductPage = ({ item }) => {
  const {
    type,
    title,
    price,
    mainImage,
    name,
    description,
    cardPhotos,
    worksPhotos,
    assortment,
    dots,
    cardTitle,
  } = item;
  return (
    <>
      <section className="product-intro">
        <div className="product-left">
          <div className="product-left__title">{title}</div>
          <span style={{ fontSize: 18 }}>
            в Белгороде и Белгородской области
          </span>
          <span style={{ fontSize: 22, fontWeight: '800', marginBottom: 24 }}>
            {price}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Button title="Вызвать замерщика" />
            <Button title="Калькулятор" white={true} />
          </div>
        </div>
        <div className="product-right">
          <ProductImage />
        </div>
      </section>

      {/*<section className="m150">*/}
      {/*  <TitleHeader title={name} text={description} />*/}

      {/*  <div className="product-cards">*/}
      {/*    <div className="product-card__image">*/}
      {/*      <img style={{ height: '100%' }} src={cardPhotos[0]} alt="" />*/}
      {/*    </div>*/}
      {/*    <QuestionCard*/}
      {/*      dots={dots}*/}
      {/*      title={cardTitle}*/}
      {/*      icon={*/}
      {/*        <img*/}
      {/*          style={{ maxWidth: '32px' }}*/}
      {/*          src="/images/icons/guard.svg"*/}
      {/*          alt="icon"*/}
      {/*        />*/}
      {/*      }*/}
      {/*    />*/}
      {/*    <div className="product-card__image">*/}
      {/*      <img*/}
      {/*        style={{ height: '100%' }}*/}
      {/*        src="/images/productPages/assortment/concrete/card/second.png"*/}
      {/*        alt=""*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<FullWidthSection>*/}
      {/*  <TitleHeader*/}
      {/*    title={'Преимущества нашей компании'}*/}
      {/*    text={*/}
      {/*      'Более 10 лет специализируемся на производстве заборов, откатных автоматических и распашных ворот, навесов для автомобилей. Компания имеет собственное производство, большое количество бригад и автотранспорт, благодаря чему мы выдерживаем минимальные сроки изготовления и установки зоборов.'*/}
      {/*    }*/}
      {/*  />*/}
      {/*  <div className="product-up">*/}
      {/*    <QuestionCard*/}
      {/*      title={'Бесплатный замер\nдля клиентов'}*/}
      {/*      description={*/}
      {/*        'При заказе забора стоимость замера вычитается из сметы'*/}
      {/*      }*/}
      {/*      white={true}*/}
      {/*      icon={*/}
      {/*        <img*/}
      {/*          style={{ maxWidth: '32px' }}*/}
      {/*          src="/images/icons/tape.svg"*/}
      {/*          alt="icon"*/}
      {/*        />*/}
      {/*      }*/}
      {/*    />*/}
      {/*    <QuestionCard*/}
      {/*      title={'Работа в рамках\nдоговора'}*/}
      {/*      description={*/}
      {/*        'Окончательная цена прописывается в договоре и больше не меняется'*/}
      {/*      }*/}
      {/*      white={true}*/}
      {/*      icon={*/}
      {/*        <img*/}
      {/*          style={{ maxWidth: '32px' }}*/}
      {/*          src="/images/icons/document.svg"*/}
      {/*          alt="icon"*/}
      {/*        />*/}
      {/*      }*/}
      {/*    />*/}
      {/*    <QuestionCard*/}
      {/*      title={'Учитываем состав\nгрунта'}*/}
      {/*      description={*/}
      {/*        'По типу грунта выбираем способ установки для качества и долговечности'*/}
      {/*      }*/}
      {/*      white={true}*/}
      {/*      icon={*/}
      {/*        <img*/}
      {/*          style={{ maxWidth: '32px' }}*/}
      {/*          src="/images/icons/picture.svg"*/}
      {/*          alt="icon"*/}
      {/*        />*/}
      {/*      }*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <TitleHeader title="Наши работы" />*/}
      {/*  <Slider {...settings}>*/}
      {/*    {worksPhotos.map((photo) => {*/}
      {/*      return (*/}
      {/*        <div className="works-slider-item">*/}
      {/*          <img src={photo} alt="work" />*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </Slider>*/}
      {/*</div>*/}

      {/*<FullWidthSection>*/}
      {/*  <TitleHeader*/}
      {/*    title="Ассортимент"*/}
      {/*    text="Ориентировочная стоимость одного метра погонного забора при высоте 2 м — 1900 руб. В цену включены материалы и монтаж. Доставка и расходные материлы оплачиваются дополнительно."*/}
      {/*  />*/}
      {/*  <div className="product-assortment">*/}
      {/*    {assortment.map((item) => {*/}
      {/*      return <AssortmentCard key={item} item={item} />;*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <WishBlock />*/}
      {/*</div>*/}

      {/*<div className="m150">*/}
      {/*  <Calculator defaultValue={item.name} />*/}
      {/*</div>*/}

      {/*<div className="m150">*/}
      {/*  <FormSection />*/}
      {/*</div>*/}
    </>
  );
};

export default ProductPage;
