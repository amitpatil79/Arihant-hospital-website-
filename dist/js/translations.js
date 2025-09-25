// Translation system for Arihant Hospital website
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About", 
    services: "Services",
    contact: "Contact",
    
    // Main content
    hospitalName: "Arihant Hospital",
    tagline: "Quality Healthcare for Everyone",
    description: "Providing comprehensive medical services with state-of-the-art equipment and experienced healthcare professionals.",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive healthcare services with modern equipment",
    
    // Service names
    hyperdeficiency: "Hyperdeficiency",
    cArmMachine: "C-Arm Machine",
    medicine: "Medicine",
    ecg: "ECG",
    orthopedics: "Orthopedics",
    ventilators: "Ventilators",
    surgery: "Surgery",
    defibrillator: "Defibrillator",
    ent: "ENT",
    operationTheatre: "Equipped Operation Theatre",
    dentalCare: "Dental Care",
    digitalXray: "Digital X-ray Machine",
    cancerTreatment: "Cancer Treatment",
    bloodTest: "All Blood Test",
    ambulances: "Ambulances",
    
    // About section
    aboutTitle: "About Arihant Hospital",
    aboutDescription: "Arihant Hospital is committed to providing exceptional healthcare services with compassion and excellence. Our team of dedicated professionals uses cutting-edge technology to ensure the best possible outcomes for our patients.",
    
    // Contact
    contactTitle: "Contact Us",
    contactDescription: "Get in touch with us for appointments and inquiries",
    
    // Footer
    footerDescription: "Dedicated to providing quality healthcare services to our community with modern facilities and experienced medical professionals.",
    quickLinks: "Quick Links",
    emergencyNumber: "🚨 Emergency: +91 9876543210",
    
    // Buttons
    learnMore: "Learn More",
    bookAppointment: "Book Appointment",
    callNow: "Call Now",
    
    // Service details
    serviceDetails: {
      hyperdeficiency: {
        title: "Hyperdeficiency Treatment",
        description: "Specialized treatment for hyperdeficiency conditions with advanced medical protocols and monitoring.",
        features: ["24/7 monitoring", "Specialized medical team", "Advanced treatment protocols", "Patient-centered care"]
      },
      cArmMachine: {
        title: "C-Arm Machine Services", 
        description: "State-of-the-art C-Arm imaging for precise surgical procedures and diagnostic imaging.",
        features: ["Real-time imaging", "Surgical guidance", "Minimally invasive procedures", "High-resolution imaging"]
      },
      medicine: {
        title: "General Medicine",
        description: "Comprehensive medical care covering a wide range of health conditions and treatments.",
        features: ["General consultations", "Preventive care", "Chronic disease management", "Health screenings"]
      },
      ecg: {
        title: "ECG Services",
        description: "Electrocardiogram testing for heart health monitoring and cardiac condition diagnosis.",
        features: ["Digital ECG", "Real-time monitoring", "Expert analysis", "Rapid results"]
      },
      orthopedics: {
        title: "Orthopedic Care",
        description: "Comprehensive bone, joint, and muscle care with modern treatment approaches.",
        features: ["Joint replacement", "Fracture treatment", "Sports medicine", "Physical therapy"]
      },
      ventilators: {
        title: "Ventilator Support",
        description: "Advanced respiratory care with modern ventilator systems for critical patients.",
        features: ["ICU ventilators", "Non-invasive ventilation", "24/7 monitoring", "Expert respiratory care"]
      },
      surgery: {
        title: "Surgical Services",
        description: "Advanced surgical procedures with modern techniques and experienced surgeons.",
        features: ["Minimally invasive surgery", "Expert surgical team", "State-of-the-art facilities", "Post-operative care"]
      },
      defibrillator: {
        title: "Defibrillator Services",
        description: "Emergency cardiac care with advanced defibrillation equipment for life-saving treatments.",
        features: ["Emergency response", "Cardiac monitoring", "Life-saving equipment", "Expert medical team"]
      },
      ent: {
        title: "ENT Services",
        description: "Comprehensive ear, nose, and throat care with specialized treatments and procedures.",
        features: ["Diagnostic procedures", "Surgical treatments", "Hearing tests", "Specialized care"]
      },
      operationTheatre: {
        title: "Modern Operation Theatre",
        description: "Fully equipped operation theatres with advanced surgical equipment and sterile environment.",
        features: ["Sterile environment", "Advanced equipment", "Expert surgical team", "Safety protocols"]
      },
      dentalCare: {
        title: "Dental Care Services",
        description: "Comprehensive dental care including preventive, restorative, and cosmetic dentistry.",
        features: ["General dentistry", "Cosmetic procedures", "Preventive care", "Oral surgery"]
      },
      digitalXray: {
        title: "Digital X-ray Services",
        description: "Advanced digital X-ray imaging for accurate diagnosis with minimal radiation exposure.",
        features: ["Digital imaging", "Rapid results", "Minimal radiation", "Expert radiology"]
      },
      cancerTreatment: {
        title: "Cancer Treatment",
        description: "Comprehensive cancer care with modern treatment protocols and supportive care.",
        features: ["Chemotherapy", "Radiation therapy", "Supportive care", "Multidisciplinary team"]
      },
      bloodTest: {
        title: "Blood Testing Laboratory",
        description: "Complete blood testing services with advanced laboratory equipment and rapid results.",
        features: ["Complete blood panel", "Rapid results", "Advanced testing", "Expert analysis"]
      },
      ambulances: {
        title: "Ambulance Services",
        description: "24/7 emergency ambulance services with trained medical personnel and modern equipment.",
        features: ["24/7 availability", "Trained medical staff", "Modern equipment", "Emergency response"]
      }
    }
  },
  mr: {
    // Header
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    contact: "संपर्क",
    
    // Main content
    hospitalName: "अरिहंत हॉस्पिटल",
    tagline: "सर्वांसाठी गुणवत्तापूर्ण आरोग्यसेवा",
    description: "अत्याधुनिक उपकरणे आणि अनुभवी आरोग्य व्यावसायिकांसह सर्वसमावेशक वैद्यकीय सेवा प्रदान करत आहे.",
    
    // Services
    servicesTitle: "आमच्या सेवा",
    servicesSubtitle: "आधुनिक उपकरणांसह सर्वसमावेशक आरोग्य सेवा",
    
    // Service names
    hyperdeficiency: "हायपरडेफिशिअन्सी",
    cArmMachine: "सी-आर्म मशीन",
    medicine: "औषधोपचार",
    ecg: "ईसीजी",
    orthopedics: "हाडांचे आणि सांध्यांचे उपचार",
    ventilators: "व्हेंटिलेटर",
    surgery: "शस्त्रक्रिया",
    defibrillator: "डिफिब्रिलेटर",
    ent: "कान, नाक, गळा",
    operationTheatre: "सुसज्ज ऑपरेशन थिएटर",
    dentalCare: "दंत चिकित्सा",
    digitalXray: "डिजिटल एक्स-रे मशीन",
    cancerTreatment: "कर्करोग उपचार",
    bloodTest: "सर्व रक्त तपासणी",
    ambulances: "रुग्णवाहिका",
    
    // About section
    aboutTitle: "अरिहंत हॉस्पिटल बद्दल",
    aboutDescription: "अरिहंत हॉस्पिटल करुणा आणि उत्कृष्टतेसह अपवादात्मक आरोग्य सेवा प्रदान करण्यासाठी वचनबद्ध आहे. आमची समर्पित व्यावसायिकांची टीम आमच्या रुग्णांसाठी सर्वोत्तम परिणाम सुनिश्चित करण्यासाठी अत्याधुनिक तंत्रज्ञान वापरते.",
    
    // Contact
    contactTitle: "आमच्याशी संपर्क साधा",
    contactDescription: "भेटीसाठी आणि चौकशीसाठी आमच्याशी संपर्क साधा",
    
    // Footer
    footerDescription: "आधुनिक सुविधा आणि अनुभवी वैद्यकीय व्यावसायिकांसह आमच्या समुदायाला गुणवत्तापूर्ण आरोग्य सेवा प्रदान करण्यासाठी समर्पित.",
    quickLinks: "द्रुत लिंक",
    emergencyNumber: "🚨 आपत्कालीन: +91 9876543210",
    
    // Buttons
    learnMore: "अधिक जाणा",
    bookAppointment: "भेट बुक करा",
    callNow: "आता कॉल करा",
    
    // Service details
    serviceDetails: {
      hyperdeficiency: {
        title: "हायपरडेफिशिअन्सी उपचार",
        description: "प्रगत वैद्यकीय प्रोटोकॉल आणि निरीक्षणासह हायपरडेफिशिअन्सी स्थितींसाठी विशेष उपचार.",
        features: ["२४/७ निरीक्षण", "विशेष वैद्यकीय टीम", "प्रगत उपचार प्रोटोकॉल", "रुग्ण-केंद्रित काळजी"]
      },
      cArmMachine: {
        title: "सी-आर्म मशीन सेवा",
        description: "अचूक शस्त्रक्रिया प्रक्रिया आणि निदान इमेजिंगसाठी अत्याधुनिक सी-आर्म इमेजिंग.",
        features: ["रिअल-टाइम इमेजिंग", "शस्त्रक्रिया मार्गदर्शन", "कमीत कमी आक्रमक प्रक्रिया", "उच्च-रिझोल्यूशन इमेजिंग"]
      },
      medicine: {
        title: "सामान्य औषधोपचार",
        description: "आरोग्य स्थिती आणि उपचारांच्या विस्तृत श्रेणीचा समावेश करणारी सर्वसमावेशक वैद्यकीय सेवा.",
        features: ["सामान्य सल्लामसलत", "प्रतिबंधक काळजी", "जुनाट आजार व्यवस्थापन", "आरोग्य तपासणी"]
      },
      ecg: {
        title: "ईसीजी सेवा",
        description: "हृदयाच्या आरोग्याच्या निरीक्षणासाठी आणि हृदयविकाराच्या निदानासाठी इलेक्ट्रोकार्डियोग्राम चाचणी.",
        features: ["डिजिटल ईसीजी", "रिअल-टाइम निरीक्षण", "तज्ञ विश्लेषण", "जलद परिणाम"]
      },
      orthopedics: {
        title: "हाडे रोग विभाग",
        description: "आधुनिक उपचार पद्धतींसह सर्वसमावेशक हाडे, सांधे आणि स्नायूंची काळजी.",
        features: ["सांधे बदलणे", "फ्रॅक्चर उपचार", "क्रीडा औषध", "भौतिक थेरपी"]
      },
      ventilators: {
        title: "व्हेंटिलेटर सपोर्ट",
        description: "गंभीर रुग्णांसाठी आधुनिक व्हेंटिलेटर सिस्टमसह प्रगत श्वसन काळजी.",
        features: ["ICU व्हेंटिलेटर", "नॉन-इनवेसिव्ह व्हेंटिलेशन", "२४/७ निरीक्षण", "तज्ञ श्वसन काळजी"]
      },
      surgery: {
        title: "शस्त्रक्रिया सेवा",
        description: "आधुनिक तंत्र आणि अनुभवी शल्यचिकित्सकांसह प्रगत शस्त्रक्रिया प्रक्रिया.",
        features: ["कमीत कमी आक्रमक शस्त्रक्रिया", "तज्ञ शल्यचिकित्सक टीम", "अत्याधुनिक सुविधा", "शस्त्रक्रियेनंतरची काळजी"]
      },
      defibrillator: {
        title: "डिफिब्रिलेटर सेवा",
        description: "जीवरक्षक उपचारांसाठी प्रगत डिफिब्रिलेशन उपकरणांसह आपत्कालीन हृदयविकाराची काळजी.",
        features: ["आपत्कालीन प्रतिसाद", "हृदयविकाराचे निरीक्षण", "जीवरक्षक उपकरण", "तज्ञ वैद्यकीय टीम"]
      },
      ent: {
        title: "कान नाक गळा विभाग",
        description: "विशेष उपचार आणि प्रक्रियांसह कान, नाक आणि गळ्याची सर्वसमावेशक काळजी.",
        features: ["निदान प्रक्रिया", "शस्त्रक्रिया उपचार", "श्रवण चाचणी", "विशेष काळजी"]
      },
      operationTheatre: {
        title: "आधुनिक ऑपरेशन थिएटर",
        description: "प्रगत शस्त्रक्रिया उपकरणे आणि निर्जंतुक वातावरणासह पूर्णपणे सुसज्ज ऑपरेशन थिएटर.",
        features: ["निर्जंतुक वातावरण", "प्रगत उपकरणे", "तज्ञ शल्यचिकित्सक टीम", "सुरक्षा प्रोटोकॉल"]
      },
      dentalCare: {
        title: "दंत चिकित्सा सेवा",
        description: "प्रतिबंधक, पुनर्संचयी आणि कॉस्मेटिक दंतचिकित्सासह सर्वसमावेशक दंत काळजी.",
        features: ["सामान्य दंतचिकित्सा", "कॉस्मेटिक प्रक्रिया", "प्रतिबंधक काळजी", "तोंडी शस्त्रक्रिया"]
      },
      digitalXray: {
        title: "डिजिटल एक्स-रे सेवा",
        description: "कमीत कमी रेडिएशन एक्सपोजरसह अचूक निदानासाठी प्रगत डिजिटल एक्स-रे इमेजिंग.",
        features: ["डिजिटल इमेजिंग", "जलद परिणाम", "कमीत कमी रेडिएशन", "तज्ञ रेडिओलॉजी"]
      },
      cancerTreatment: {
        title: "कर्करोग उपचार",
        description: "आधुनिक उपचार प्रोटोकॉल आणि सहायक काळजीसह सर्वसमावेशक कर्करोग काळजी.",
        features: ["केमोथेरपी", "रेडिएशन थेरपी", "सहायक काळजी", "बहुविषयक टीम"]
      },
      bloodTest: {
        title: "रक्त तपासणी प्रयोगशाळा",
        description: "प्रगत प्रयोगशाळा उपकरणे आणि जलद परिणामांसह संपूर्ण रक्त तपासणी सेवा.",
        features: ["संपूर्ण रक्त पॅनेल", "जलद परिणाम", "प्रगत चाचणी", "तज्ञ विश्लेषण"]
      },
      ambulances: {
        title: "रुग्णवाहिका सेवा",
        description: "प्रशिक्षित वैद्यकीय कर्मचारी आणि आधुनिक उपकरणांसह २४/७ आपत्कालीन रुग्णवाहिका सेवा.",
        features: ["२४/७ उपलब्धता", "प्रशिक्षित वैद्यकीय कर्मचारी", "आधुनिक उपकरणे", "आपत्कालीन प्रतिसाद"]
      }
    }
  }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}