// Service page JavaScript for Arihant Hospital website
let currentLanguage = 'en';
let currentService = '';

// Services data with icons
const services = [
  { key: 'hyperdeficiency', icon: '🫀', slug: 'hyperdeficiency' },
  { key: 'cArmMachine', icon: '🏥', slug: 'c-arm-machine' },
  { key: 'medicine', icon: '💊', slug: 'medicine' },
  { key: 'ecg', icon: '📊', slug: 'ecg' },
  { key: 'orthopedics', icon: '🦴', slug: 'orthopedics' },
  { key: 'ventilators', icon: '🫁', slug: 'ventilators' },
  { key: 'surgery', icon: '⚕️', slug: 'surgery' },
  { key: 'defibrillator', icon: '🔋', slug: 'defibrillator' },
  { key: 'ent', icon: '👂', slug: 'ent' },
  { key: 'operationTheatre', icon: '🏨', slug: 'operation-theatre' },
  { key: 'dentalCare', icon: '🦷', slug: 'dental-care' },
  { key: 'digitalXray', icon: '📸', slug: 'digital-xray' },
  { key: 'cancerTreatment', icon: '🎗️', slug: 'cancer-treatment' },
  { key: 'bloodTest', icon: '🩸', slug: 'blood-test' },
  { key: 'ambulances', icon: '🚑', slug: 'ambulances' },
];

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get current service from URL
  const path = window.location.pathname;
  const filename = path.split('/').pop().replace('.html', '');
  currentService = filename;
  
  // Initialize the page
  initializeServicePage();
});

function initializeServicePage() {
  // Load saved language preference
  const savedLanguage = localStorage.getItem('language') || 'en';
  currentLanguage = savedLanguage;
  
  // Update language buttons
  updateLanguageButtons();
  
  // Translate page content
  translatePage();
  
  // Load service details
  loadServiceDetails();
  
  // Render other services
  renderOtherServices();
}

function switchLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);
  
  // Update HTML lang attribute
  document.getElementById('root-html').setAttribute('lang', language === 'mr' ? 'mr' : 'en');
  
  updateLanguageButtons();
  translatePage();
  loadServiceDetails();
  renderOtherServices();
}

function updateLanguageButtons() {
  // Desktop buttons
  const enBtn = document.getElementById('lang-en');
  const mrBtn = document.getElementById('lang-mr');
  
  // Mobile buttons
  const enBtnMobile = document.getElementById('lang-en-mobile');
  const mrBtnMobile = document.getElementById('lang-mr-mobile');
  
  if (currentLanguage === 'en') {
    enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors bg-white text-blue-600 shadow-sm';
    mrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900';
    enBtnMobile.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors bg-white text-blue-600 shadow-sm';
    mrBtnMobile.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900';
  } else {
    enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900';
    mrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors bg-white text-blue-600 shadow-sm';
    enBtnMobile.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900';
    mrBtnMobile.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors bg-white text-blue-600 shadow-sm';
  }
}

function translatePage() {
  const t = translations[currentLanguage];
  
  // Find all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  
  // Update hospital name in header separately if needed
  const hospitalNameEl = document.getElementById('hospital-name');
  if (hospitalNameEl) {
    hospitalNameEl.textContent = t.hospitalName;
  }
}

function loadServiceDetails() {
  const t = translations[currentLanguage];
  
  // Find service data
  const serviceData = services.find(s => s.slug === currentService);
  if (!serviceData) return;
  
  const serviceDetails = t.serviceDetails[serviceData.key];
  if (!serviceDetails) return;
  
  // Update page title
  document.title = `${serviceDetails.title} - ${t.hospitalName}`;
  
  // Update breadcrumb
  const breadcrumb = document.getElementById('service-breadcrumb');
  if (breadcrumb) {
    breadcrumb.textContent = t[serviceData.key] || serviceData.key;
  }
  
  // Update service title
  const serviceTitle = document.getElementById('service-title');
  if (serviceTitle) {
    serviceTitle.textContent = serviceDetails.title;
  }
  
  // Update service description
  const serviceDesc = document.getElementById('service-description');
  if (serviceDesc) {
    serviceDesc.textContent = serviceDetails.description;
  }
  
  // Update service features
  const featuresContainer = document.getElementById('service-features');
  if (featuresContainer && serviceDetails.features) {
    featuresContainer.innerHTML = serviceDetails.features.map(feature => `
      <li class="flex items-start">
        <svg class="flex-shrink-0 w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <span class="ml-3 text-lg text-gray-600">${feature}</span>
      </li>
    `).join('');
  }
}

function renderOtherServices() {
  const otherServicesContainer = document.getElementById('other-services');
  if (!otherServicesContainer) return;
  
  const t = translations[currentLanguage];
  
  // Filter out current service
  const otherServices = services.filter(s => s.slug !== currentService).slice(0, 8);
  
  otherServicesContainer.innerHTML = otherServices.map(service => `
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer"
         onclick="navigateToService('${service.slug}')">
      <div class="text-4xl mb-4">
        ${service.icon}
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-2">
        ${t[service.key] || service.key}
      </h3>
      <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
        ${t.learnMore || 'Learn More'}
      </button>
    </div>
  `).join('');
}

function navigateToService(slug) {
  window.location.href = `${slug}.html`;
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

// Export functions for global access
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.navigateToService = navigateToService;