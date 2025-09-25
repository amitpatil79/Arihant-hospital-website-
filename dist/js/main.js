// Main JavaScript for Arihant Hospital website
let currentLanguage = 'en';

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
  // Initialize the page
  initializePage();
});

function initializePage() {
  // Load saved language preference
  const savedLanguage = localStorage.getItem('language') || 'en';
  currentLanguage = savedLanguage;
  
  // Update language buttons
  updateLanguageButtons();
  
  // Translate page content
  translatePage();
  
  // Render services
  renderServices();
  
  // Setup smooth scrolling for anchor links
  setupSmoothScrolling();
}

function switchLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);
  
  // Update HTML lang attribute
  document.getElementById('root-html').setAttribute('lang', language === 'mr' ? 'mr' : 'en');
  
  updateLanguageButtons();
  translatePage();
  renderServices();
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

function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;
  
  const t = translations[currentLanguage];
  
  servicesGrid.innerHTML = services.map(service => `
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer"
         onclick="openServicePage('${service.slug}')">
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

function openServicePage(slug) {
  // Navigate to service page
  window.location.href = `services/${slug}.html`;
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

function setupSmoothScrolling() {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function handleContactForm(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Simple validation
  if (!data.name || !data.email || !data.message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  event.target.reset();
}

// Export functions for global access
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.handleContactForm = handleContactForm;
window.openServicePage = openServicePage;