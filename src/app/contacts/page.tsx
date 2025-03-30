'use client';

import { useState } from 'react';
import Section from '../components/Section';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика валидации и отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="bg-white">
      <Section title="Контакты" subtitle="Свяжитесь с нами">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Контактная информация</h3>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Адрес</h4>
                <p className="mt-1 text-base text-gray-900">
                  ул. Примерная, 123<br />
                  Город, 12345
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Телефон</h4>
                <p className="mt-1 text-base text-gray-900">+7 (123) 456-78-90</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                <p className="mt-1 text-base text-gray-900">info@company.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Режим работы</h4>
                <p className="mt-1 text-base text-gray-900">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб-Вс: Выходной
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Ваше имя"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Введите ваше имя"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Введите ваш email"
                required
              />

              <Input
                label="Телефон"
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                required
                placeholder="Введите ваш телефон"
              />

              <Textarea
                label="Сообщение"
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                placeholder="Введите ваше сообщение"
              />

              <div>
                <Button type="submit">
                  Отправить сообщение
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
