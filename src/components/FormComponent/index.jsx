'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import './style.scss';
import CustomPhoneInput from '@/components/CustomPhoneInput';
import InputMail from '@/components/InputMail';
import Button from '@/components/Button';
import PersonalData from '@/components/PersonalData';

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      privacyPolicy: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const onSubmit = async (data) => {
    if (!data.privacyPolicy) {
      alert(
        'Для отправки формы необходимо согласие с политикой конфиденциальности'
      );
      return;
    }

    const message = `Новая заявка с сайта:\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email || 'не указан'}`;

    const botToken = '7667989040:AAEXlL6k85udTAN6m8_7yvPT-AYa72SCwEw';
    const chatId = '-4721404625';
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки');
      }

      alert('Заявка успешно отправлена!');
      reset();
    } catch (error) {
      console.error('Ошибка:', error);
      alert(
        error.message ||
          'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-text">
        <h2 className="form-title">Идеальный забор – это просто!</h2>
        <p className="form-subtitle">
          Просто оставьте свои контакты, и мы подберем забор под ваши
          требования.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div>
          <Input
            placeholder="Введите Ваше имя"
            {...register('name', {
              required: 'Введите имя!',
              minLength: {
                value: 2,
                message: 'Имя должно содержать минимум 2 символа',
              },
            })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div>
          <CustomPhoneInput
            control={control}
            name="phone"
            rules={{
              required: 'Телефон обязателен',
              validate: (value) =>
                /^\+7[0-9]{10}$/.test(value) || 'Неверный формат номера',
            }}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <InputMail
            register={register}
            name="email"
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Введите корректный email',
              },
            }}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

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
          maxWidth={true}
          type="submit"
          title={isLoading ? 'Отправка...' : 'Отправить'}
          disabled={isLoading}
        />
      </form>

      <PersonalData
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
};

export default FormComponent;
