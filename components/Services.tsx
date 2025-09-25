'use client';

import { useLanguage } from '@/lib/language-context';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { key: 'hyperdeficiency', icon: '🫀' },
    { key: 'cArmMachine', icon: '🏥' },
    { key: 'medicine', icon: '💊' },
    { key: 'ecg', icon: '📊' },
    { key: 'orthopedics', icon: '🦴' },
    { key: 'ventilators', icon: '🫁' },
    { key: 'surgery', icon: '⚕️' },
    { key: 'defibrillator', icon: '🔋' },
    { key: 'ent', icon: '👂' },
    { key: 'operationTheatre', icon: '🏨' },
    { key: 'dentalCare', icon: '🦷' },
    { key: 'digitalXray', icon: '📸' },
    { key: 'cancerTreatment', icon: '🎗️' },
    { key: 'bloodTest', icon: '🩸' },
    { key: 'ambulances', icon: '🚑' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t[service.key as keyof typeof t] as string}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}