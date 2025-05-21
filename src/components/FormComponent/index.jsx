'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import './style.scss';
import CustomPhoneInput from '@/components/CustomPhoneInput';
import InputMail from '@/components/InputMail';
import Button from '@/components/Button';

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
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
            placeholder="Имя"
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

        <Button
          maxWidth={true}
          type="submit"
          title={isLoading ? 'Отправка...' : 'Отправить'}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default FormComponent;
