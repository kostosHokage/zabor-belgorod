'use client';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Controller } from 'react-hook-form';

const phoneInputStyle = {
  background: '#D9ECD6',
  width: '100%',
  padding: '16px 20px',
  height: '57px',
  borderRadius: 5,
  border: 'none',
  fontSize: 18,
  color: '#0C4C01',
};

const CustomPhoneInput = ({ control, name = 'phone' }) => {
  const validateRussianPhone = (value) => {
    if (!value) return 'Телефон обязателен';
    if (!value.startsWith('+7')) return 'Номер должен начинаться с +7';

    // Удаляем все нецифровые символы
    const digitsOnly = value.replace(/\D/g, '');

    // Проверяем что номер начинается с +79 и имеет правильную длину
    if (!digitsOnly.startsWith('79')) return 'Номер должен начинаться с +7 9';
    if (digitsOnly.length !== 11) return 'Номер должен содержать 11 цифр';

    return true;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Телефон обязателен',
        validate: validateRussianPhone,
      }}
      defaultValue="+7"
      render={({ field, fieldState }) => (
        <div>
          <PhoneInput
            {...field}
            placeholder="+7 (9__) ___-__-__"
            defaultCountry="RU"
            international
            withCountryCallingCode
            countryCallingCodeEditable={false}
            style={phoneInputStyle}
            className="custom-phone-input"
          />
          {fieldState.error && (
            <p style={{ color: 'red', marginTop: 5, fontSize: 14 }}>
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default CustomPhoneInput;
