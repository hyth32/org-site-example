import Image from 'next/image';
import Button from '../components/Button';
import Section from '../components/Section';

export default function Services() {
  const services = [
    {
      title: 'Консультационные услуги',
      description: 'Профессиональные консультации по развитию вашего бизнеса',
      icon: '💡',
      image: '/images/consulting.jpg',
    },
    {
      title: 'Разработка решений',
      description: 'Создание индивидуальных решений для вашего бизнеса',
      icon: '⚙️',
      image: '/images/development.jpg',
    },
    {
      title: 'Техническая поддержка',
      description: 'Круглосуточная поддержка и обслуживание',
      icon: '🔧',
      image: '/images/support.jpg',
    },
    {
      title: 'Обучение персонала',
      description: 'Профессиональное обучение ваших сотрудников',
      icon: '📚',
      image: '/images/training.jpg',
    },
  ];

  return (
    <div className="bg-white">
      <Section title="Услуги" subtitle="Что мы предлагаем">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Сотрудничество" subtitle="Готовы начать работу с нами?" className="bg-gray-50">
        <div className="text-center">
          <p className="mt-4 text-lg text-gray-500">
            Свяжитесь с нами, чтобы обсудить детали вашего проекта
          </p>
          <div className="mt-6">
            <Button href="/contacts">
              Связаться с нами
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 