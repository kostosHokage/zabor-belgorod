'use client';
import React from 'react';
import TitleHeader from '@/components/TitleHeader';
import { categories } from '@/data/catalog';
import './style.scss';
import Input from '@/components/Input';
import dynamic from 'next/dynamic';
import CustomPhoneInput from '@/components/CustomPhoneInput';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/Button';

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '16px',
  color: '#0C4C01',
  fontWeight: '500',
};

const Select = dynamic(() => import('react-select'), {
  ssr: false,
  loading: () => <div>Загрузка...</div>,
});

const Calculator = ({ defaultValue }) => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      product: defaultValue,
      area: '',
      height: '',
      phone: '',
    },
  });

  const allItems = categories.flatMap((category) => category.items);
  const allOptions = allItems.map((item) => ({
    value: item.title,
    label: item.title,
  }));

  const selectedProduct = watch('product');

  const onSubmit = (data) => {
    return data;
  };

  return (
    <div>
      <TitleHeader
        title="Калькулятор стоимости"
        text="Укажите данные участка и пожелания, чтобы мы могли рассчитать стоимость строительства и сроки выполнения работ."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="calcutalor">
          <div>
            <label style={labelStyle} htmlFor="product">
              Вид забора:
            </label>
            <Select
              options={allOptions}
              name="product"
              placeholder="Выберите товар"
              value={allOptions.find((opt) => opt.value === selectedProduct)}
              onChange={(option) => setValue('product', option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: 318,
                  backgroundColor: '#D9ECD6',
                  height: 57,
                  borderRadius: 5,
                  borderColor: state.isFocused ? '#2E7D32' : '#D9ECD6',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: '#2E7D32',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isSelected ? '#D9ECD6' : 'white',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#EDF7EA',
                  },
                }),
              }}
            />
          </div>

          <Controller
            control={control}
            name="area"
            render={({ field }) => (
              <Input
                label="Площадь:"
                type="number"
                placeholder="Площадь"
                min={1}
                max={9999}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="height"
            render={({ field }) => (
              <Input
                label="Высота:"
                type="number"
                placeholder="Высота"
                min={1}
                max={1000}
                {...field}
              />
            )}
          />

          <CustomPhoneInput
            control={control}
            name="phone"
            label="Введите Ваш номер телефона:"
            rules={{
              required: 'Телефон обязателен',
              validate: (value) =>
                /^\+7[0-9]{10}$/.test(value) || 'Неверный формат номера',
            }}
          />
        </div>

        <div style={{ maxWidth: 318, margin: '0 auto' }}>
          <Button type="submit" title="Отправить" maxWidth={true} />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
