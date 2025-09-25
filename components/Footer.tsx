'use client';

import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t.hospitalName}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footerDescription}
            </p>
            <div className="text-red-400 font-semibold">
              {t.emergencyNumber}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
            <div className="space-y-2 text-gray-300">
              <div>📍 Mumbai, Maharashtra</div>
              <div>📞 +91 22 1234 5678</div>
              <div>✉️ info@arihanthospital.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 {t.hospitalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}