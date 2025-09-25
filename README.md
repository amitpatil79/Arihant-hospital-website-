# Arihant Hospital Website

A modern, static hospital website built with HTML, Tailwind CSS, and TypeScript. Features bilingual support (English and Marathi), mobile-responsive design, and dedicated service pages.

## 🚀 Features

- **Modern Design**: Clean, professional healthcare website design
- **Bilingual Support**: Full English and Marathi language support with dynamic switching  
- **Mobile Responsive**: Optimized for all device sizes
- **Static Site**: Fast loading, no server dependencies
- **Service Pages**: Dedicated pages for all 15 medical services
- **TypeScript**: Type-safe JavaScript for better code quality
- **Tailwind CSS**: Utility-first CSS framework for consistent styling

## 🏥 Services

The website includes dedicated pages for the following services:

1. **Hyperdeficiency Treatment** (हायपरडेफिशिअन्सी उपचार)
2. **C-Arm Machine Services** (सी-आर्म मशीन सेवा)  
3. **General Medicine** (सामान्य औषधोपचार)
4. **ECG Services** (ईसीजी सेवा)
5. **Orthopedic Care** (हाडे रोग विभाग)
6. **Ventilator Support** (व्हेंटिलेटर सपोर्ट)
7. **Surgical Services** (शस्त्रक्रिया सेवा)
8. **Defibrillator Services** (डिफिब्रिलेटर सेवा)
9. **ENT Services** (कान नाक गळा विभाग)
10. **Modern Operation Theatre** (आधुनिक ऑपरेशन थिएटर)
11. **Dental Care Services** (दंत चिकित्सा सेवा)
12. **Digital X-ray Services** (डिजिटल एक्स-रे सेवा)
13. **Cancer Treatment** (कर्करोग उपचार)
14. **Blood Testing Laboratory** (रक्त तपासणी प्रयोगशाळा)
15. **Ambulance Services** (रुग्णवाहिका सेवा)

## 📁 File Structure

```
dist/                          # Main website files
├── index.html                 # Main homepage
├── js/
│   ├── main.js               # Main site JavaScript
│   ├── service.js            # Service pages JavaScript  
│   └── translations.js       # Language translations
├── services/                 # Service pages
│   ├── service-template.html # Service page template
│   ├── hyperdeficiency.html
│   ├── c-arm-machine.html
│   ├── medicine.html
│   └── ... (all 15 services)
└── README.md                 # Documentation
```

## 🚀 Quick Start

To run the site locally:

1. Navigate to the `dist` directory
2. Start a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8080
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8080
   
   # Using PHP  
   php -S localhost:8080
   ```
3. Open http://localhost:8080 in your browser

## 🌐 Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Upload to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the `dist` folder  
- **Vercel**: Import the project and set build output directory to `dist`
- **Traditional Web Hosting**: Upload the `dist` folder contents to your web root

## 🌍 Language Support

The website supports two languages:
- **English (EN)**: Default language
- **Marathi (मर)**: Regional language support

Users can switch between languages using the toggle buttons in the header. Language preference is saved in browser local storage.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Progressive enhancement for older browsers

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **JavaScript/TypeScript**: Modern ES6+ features
- **Local Storage**: For language preference persistence
- **CDN**: Tailwind CSS loaded from CDN for easy deployment

## 📞 Contact Information

- **Address**: 123 Hospital Street, Medical District, Mumbai, Maharashtra 400001
- **Phone**: +91 22 1234 5678
- **Emergency**: +91 9876543210  
- **Email**: info@arihanthospital.com

## 📄 License

© 2024 Arihant Hospital. All rights reserved.
