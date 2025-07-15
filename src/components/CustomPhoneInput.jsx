'use client';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Controller } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const phoneInputStyle = {
  background: '#D9ECD6',
  width: '100%',
  padding: '16px 40px 16px 20px',
  height: '57px',
  borderRadius: 5,
  border: 'none',
  fontSize: 18,
  color: '#0C4C01',
  boxSizing: 'border-box-sizing',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '16px',
  color: '#0C4C01',
  fontWeight: '500',
};

const CustomPhoneInput = ({ control, name = 'phone', label }) => {
  const validateRussianPhone = (value) => {
    if (!value) return 'Телефон обязателен';
    if (!value.startsWith('+7')) return 'Номер должен начинаться с +7';

    const digitsOnly = value.replace(/\D/g, '');

    if (!digitsOnly.startsWith('79')) return 'Номер должен начинаться с +7 9';
    if (digitsOnly.length !== 11) return 'Номер должен содержать 11 цифр';

    return true;
  };

  return (
    <div style={{ position: '100%', width: '100%' }}>
      {label && (
        <label style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          required: 'Телефон обязателен',
          validate: validateRussianPhone,
        }}
        defaultValue="+7"
        render={({ field, fieldState }) => (
          <div style={{ position: 'relative', width: '100%' }}>
            <PhoneInput
              {...field}
              placeholder="+7 (9__) ___-__-__"
              defaultCountry="RU"
              international
              withCountryCallingCode
              countryCallingCodeEditable={false}
              style={phoneInputStyle}
              className="custom-phone-input"
              data-tooltip-id="phone-tooltip"
              data-tooltip-content={
                fieldState.error ? fieldState.error.message : ''
              }
              id={name} // Добавляем id для связи с label
            />
            {fieldState.error && (
              <Tooltip
                id="phone-tooltip"
                place="top-start"
                isOpen={!!fieldState.error}
                variant="error"
                style={{
                  backgroundColor: '#ffa1a1',
                  color: '#D32F2F',
                  border: '1px solid #FFCDD2',
                  zIndex: 100,
                }}
              />
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CustomPhoneInput;
