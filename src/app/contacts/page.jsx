import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactsBlock from '@/app/contacts/ContactsBlock';
import YandexMap from '@/components/YandexMap';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export const metadata = {
  title: 'Контакты | Заборы в Белгороде',
  description: 'Свяжитесь с нами...',
};

const ContactsPage = () => {
  return (
    <FadeInWhenVisible>
      <>
        <Breadcrumbs pathSegments={['Контакты']} />
        <div className="contacts-header">
          <h1
            style={{
              fontWeight: 800,
              fontSize: '36px',
              letterSpacing: 0,
              color: '#0C4C01',
              marginRight: 10,
            }}
          >
            Контакты
          </h1>
          <ContactsBlock />
        </div>
        <div style={{ marginBottom: 150 }}>
          <YandexMap />
        </div>
      </>
    </FadeInWhenVisible>
  );
};

export default ContactsPage;
