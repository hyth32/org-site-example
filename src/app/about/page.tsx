export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">О нас</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Наша история
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="prose prose-lg text-gray-500">
                <p>
                  Наша компания была основана в 2010 году с целью предоставления качественных услуг
                  на рынке. За годы работы мы зарекомендовали себя как надежного партнера для многих
                  клиентов.
                </p>
                <p>
                  Мы постоянно развиваемся и следим за последними тенденциями в нашей отрасли,
                  чтобы предлагать нашим клиентам самые современные решения.
                </p>
                <p>
                  Наша команда состоит из высококвалифицированных специалистов, которые
                  стремятся к совершенству в каждом проекте.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="prose prose-lg text-gray-500">
                <h3 className="text-2xl font-bold text-gray-900">Наши ценности</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Качество и надежность</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Инновационный подход</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Клиентоориентированность</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Профессионализм</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 