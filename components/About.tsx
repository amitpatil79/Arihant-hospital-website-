'use client';

import { useLanguage } from '@/lib/language-context';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.aboutDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Emergency Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Medical Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Healthcare Facility
                </h3>
                <p className="text-gray-600">
                  State-of-the-art medical equipment and infrastructure to provide the best healthcare services to our patients and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}