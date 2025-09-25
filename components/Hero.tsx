'use client';

import { useLanguage } from '@/lib/language-context';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.hospitalName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t.tagline}
          </p>
          <p className="text-lg mb-10 max-w-4xl mx-auto opacity-90">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
            >
              {t.learnMore}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors"
            >
              {t.bookAppointment}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}