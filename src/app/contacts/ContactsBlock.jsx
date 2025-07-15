import React from 'react';

const ContactsBlock = () => {
  return (
    <div className="contacts-block">
      <div className="contacts-block__info">
        <span className="contacts-block__info-item">
          <img src="/images/icons/phone.svg" alt="phone" /> 8 (905) 678-93-08
        </span>
        <span className="contacts-block__info-item">
          <img src="/images/icons/email.svg" alt="email" />{' '}
          golovinroman797@mail.ru
        </span>
      </div>
      <div className="contacts-block__info">
        <span className="contacts-block__info-item">
          <img src="/images/icons/point.svg" alt="point" /> с. Стрелецкое, ул.
          Южная, 35
        </span>
        <span className="contacts-block__info-item">
          <img src="/images/icons/clock.svg" alt="clock" /> с 09:00 до 20:00
        </span>
      </div>
    </div>
  );
};

export default ContactsBlock;
