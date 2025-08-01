'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';
import Input from '@/components/Input';
import CustomPhoneInput from '@/components/CustomPhoneInput';
import InputMail from '@/components/InputMail';
import Button from '@/components/Button';
import PersonalData from '@/components/PersonalData';

const CallForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      privacyPolicy: false,
    },
  });

  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const onSubmit = (data) => {
    if (!data.privacyPolicy) {
      alert(
        'Для отправки формы необходимо согласие с политикой конфиденциальности'
      );
      return;
    }
    return data;
  };

  return (
    <div className="callform">
      <div className="callform__container">
        <div className="callform-text">
          <h2>Идеальный забор – это просто!</h2>
          <span>
            Просто оставьте свои контакты, и мы подберем забор под ваши
            требования.
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="Введите Ваше имя"
            placeholder="Ваше имя"
            control={control}
            rules={{ required: 'Имя обязательно' }}
          />
          <CustomPhoneInput
            name="phone"
            label="Введите Ваш номер телефона"
            control={control}
          />
          <InputMail
            label="Введите Вашу почту"
            name="email"
            register={register}
            rules={{
              required: 'Email обязателен',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Введите корректный email',
              },
            }}
          />
          <div className="privacy-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                {...register('privacyPolicy', {
                  required: 'Необходимо согласие с политикой',
                })}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">
                Я согласен(а) с{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPolicyOpen(true);
                  }}
                >
                  политикой обработки персональных данных
                </a>
              </span>
            </label>
            {errors.privacyPolicy && (
              <p className="error-message">{errors.privacyPolicy.message}</p>
            )}
          </div>
          <Button
            style={{ height: '56px', marginTop: 10 }}
            maxWidth={true}
            title="Отправить"
            type="submit"
          />
        </form>
        <PersonalData
          isOpen={isPolicyOpen}
          onClose={() => setIsPolicyOpen(false)}
        />
      </div>
    </div>
  );
};

export default CallForm;
