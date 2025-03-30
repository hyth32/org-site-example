import Image from "next/image";
import Button from './components/Button';
import Section from './components/Section';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Добро пожаловать в нашу компанию
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Мы предоставляем качественные услуги и инновационные решения для вашего бизнеса.
              Наша команда профессионалов готова помочь вам достичь новых высот.
            </p>
            <div className="mt-10">
              <Button href="/contacts" variant="secondary">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section title="Преимущества" subtitle="Почему выбирают нас">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Опыт',
              description: 'Более 10 лет на рынке',
              image: '/images/experience.jpg',
            },
            {
              title: 'Качество',
              description: 'Гарантия высокого качества услуг',
              image: '/images/quality.jpg',
            },
            {
              title: 'Инновации',
              description: 'Современные технологии и подходы',
              image: '/images/innovation.jpg',
            },
          ].map((feature) => (
            <div key={feature.title} className="relative group">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Section */}
      <Section title="О нас" subtitle="Посмотрите нашу презентацию" className="bg-gray-50">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/sxZlqFLIwSc"
              title="Company Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>
      </Section>
    </div>
  );
}
