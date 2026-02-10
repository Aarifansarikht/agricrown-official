"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.enquiry": "Enquiry Now",
    
    // Hero
    "hero.slide1.title": "PLOUGH DEEP.\nHARVEST GOLD.\nLIVE AGRI.",
    "hero.slide1.subtitle": "High-performance rotary tillers built for those who push the earth to its limits.",
    "hero.slide2.title": "UNLEASH\nTHE POWER\nOF PRECISION.",
    "hero.slide2.subtitle": "Engineered for durability. Designed for the toughest soil conditions on the planet.",
    "hero.slide3.title": "DOMINATE\nYOUR FIELD\nEVERY SEASON.",
    "hero.slide3.subtitle": "Join the elite circle of farmers using Agricrown technology.",
    "hero.cta.view": "VIEW MACHINERY",
    "hero.cta.enquiry": "ENQUIRY NOW",

    // Stats
    "stats.dealers": "Dealers Worldwide",
    "stats.farmers": "Happy Farmers",
    "stats.tech": "Durable Tech",
    "stats.support": "Expert Support",
    "stats.phil.label": "Our Philosophy",
    "stats.heading.1": "We Don't Just Sell.",
    "stats.heading.2": "We Partner. We Innovate.",
    "stats.heading.3": "We Conquer.",
    "stats.desc": "Agricrown technology isn't just about turning soil; it's about transforming your yield. We build machines that withstand the toughest conditions so you can dominate every harvest season.",

    // About Page
    "about.since": "Since 1999",
    "about.hero.title": "Cultivating \nThe Future",
    "about.hero.desc": "Driven by a single mission: to empower farmers with machinery that is built to last, perform, and endure.",
    "about.story.label": "Our Story",
    "about.story.title": "Engineering Excellence",
    "about.story.subtitle": "For Over 2 Decades",
    "about.story.p1": "Agricrown was founded on the belief that agricultural machinery should be as resilient as the farmers who use it. What started as a small workshop has grown into a global manufacturing powerhouse.",
    "about.story.p2": "Our ISO 9001:2015 certified facility employs state-of-the-art robotics and precision engineering to ensure every gear, blade, and bolt meets our rigorous quality standards.",
    "about.years": "Years Experience",
    "about.countries": "Countries Served",
    "about.values.label": "Core Values",
    "about.values.title": "Why We Lead",
    "about.journey.title": "Our Journey",
    "about.journey.desc": "From a single workshop to an international brand, our history is defined by constant innovation.",
    "about.partner": "Partner With Us",

    // Contact Page
    "contact.touch.label": "Get In Touch",
    "contact.hero.title": "Start Your \nJourney",
    "contact.hero.desc": "We are here to assist you. Whether it's sales, support, or partnership inquiries.",
    "contact.details.label": "Contact Details",
    "contact.help.title": "We're Here \nTo Help",
    "contact.headquarters": "Headquarters",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.form.title": "Send Message",
    "contact.form.fname": "First Name",
    "contact.form.lname": "Last Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.placeholder.msg": "How can we help you?",

    // Footer
    "footer.desc": "Agricrown delivers high-performance agricultural machinery designed for durability and efficiency. Empowering farmers with technology that lasts.",
    "footer.products": "Products",
    "footer.info": "Information",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "© 2024 Agricrown Machinery. All rights reserved.",
  },
  hi: {
    // Nav
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.news": "समाचार",
    "nav.contact": "संपर्क",
    "nav.enquiry": "पूछताछ करें",

    // Hero
    "hero.slide1.title": "गहरा जोतें।\nसोना उगाएं।\nकृषि जिएं।",
    "hero.slide1.subtitle": "उच्च प्रदर्शन वाले रोटरी टिलर जो धरती की सीमाओं को चुनौती देने वालों के लिए बनाए गए हैं।",
    "hero.slide2.title": "सटीकता\nकी शक्ति\nको उजागर करें।",
    "hero.slide2.subtitle": "टिकाऊपन के लिए इंजीनियर किया गया। ग्रह की सबसे कठिन मिट्टी की स्थिति के लिए डिज़ाइन किया गया।",
    "hero.slide3.title": "हर मौसम\nमें अपने क्षेत्र\nपर राज करें।",
    "hero.slide3.subtitle": "एग्रीक्राउन तकनीक का उपयोग करने वाले किसानों के विशिष्ट समूह में शामिल हों।",
    "hero.cta.view": "मशीनरी देखें",
    "hero.cta.enquiry": "पूछताछ करें",

    // Stats
    "stats.dealers": "दुनिया भर में डीलर्स",
    "stats.farmers": "खुश किसान",
    "stats.tech": "टिकाऊ तकनीक",
    "stats.support": "विशेषज्ञ सहायता",
    "stats.phil.label": "हमारा दर्शन",
    "stats.heading.1": "हम केवल बेचते नहीं हैं।",
    "stats.heading.2": "हम भागीदार बनते हैं। हम नवाचार करते हैं।",
    "stats.heading.3": "हम जीतते हैं।",
    "stats.desc": "एग्रीक्राउन तकनीक केवल मिट्टी पलटने के बारे में नहीं है; यह आपकी उपज को बदलने के बारे में है। हम ऐसी मशीनें बनाते हैं जो सबसे कठिन परिस्थितियों का सामना करती हैं ताकि आप हर फसल के मौसम में हावी हो सकें।",

    // About Page
    "about.since": "1999 से",
    "about.hero.title": "भविष्य को \nसंवारना",
    "about.hero.desc": "एक ही मिशन से प्रेरित: किसानों को ऐसी मशीनरी के साथ सशक्त बनाना जो चलने, प्रदर्शन करने और टिकने के लिए बनी हो।",
    "about.story.label": "हमारी कहानी",
    "about.story.title": "इंजीनियरिंग उत्कृष्टता",
    "about.story.subtitle": "2 दशकों से अधिक",
    "about.story.p1": "एग्रीक्राउन की स्थापना इस विश्वास पर की गई थी कि कृषि मशीनरी उतनी ही लचीली होनी चाहिए जितने कि इसका उपयोग करने वाले किसान। जो एक छोटी कार्यशाला के रूप में शुरू हुआ था वह अब एक वैश्विक विनिर्माण शक्ति बन गया है।",
    "about.story.p2": "हमारी आईएसओ 9001:2015 प्रमाणित सुविधा अत्याधुनिक रोबोटिक्स और सटीक इंजीनियरिंग का उपयोग करती है ताकि यह सुनिश्चित हो सके कि हर गियर, ब्लेड और बोल्ट हमारे कड़े गुणवत्ता मानकों को पूरा करता है।",
    "about.years": "वर्षों का अनुभव",
    "about.countries": "देशों में सेवा",
    "about.values.label": "मूल्य",
    "about.values.title": "हम क्यों आगे हैं",
    "about.journey.title": "हमारी यात्रा",
    "about.journey.desc": "एक छोटी कार्यशाला से एक अंतरराष्ट्रीय ब्रांड तक, हमारा इतिहास निरंतर नवाचार द्वारा परिभाषित है।",
    "about.partner": "हमारे साथ भागीदार बनें",

    // Contact Page
    "contact.touch.label": "संपर्क करें",
    "contact.hero.title": "अपनी यात्रा \nशुरू करें",
    "contact.hero.desc": "हम आपकी सहायता के लिए यहाँ हैं। चाहे वह बिक्री, सहायता या साझेदारी पूछताछ हो।",
    "contact.details.label": "संपर्क विवरण",
    "contact.help.title": "हम मदद के लिए \nयहाँ हैं",
    "contact.headquarters": "मुख्यालय",
    "contact.phone": "फ़ोन",
    "contact.email": "ईमेल",
    "contact.form.title": "संदेश भेजें",
    "contact.form.fname": "पहला नाम",
    "contact.form.lname": "अंतिम नाम",
    "contact.form.email": "ईमेल पता",
    "contact.form.message": "संदेश",
    "contact.form.submit": "संदेश भेजें",
    "contact.form.placeholder.msg": "हम आपकी कैसे मदद कर सकते हैं?",

    // Footer
    "footer.desc": "एग्रीक्राउन स्थायित्व और दक्षता के लिए डिज़ाइन की गई उच्च प्रदर्शन वाली कृषि मशीनरी प्रदान करता है। किसानों को ऐसी तकनीक के साथ सशक्त बनाना जो लंबे समय तक चले।",
    "footer.products": "उत्पाद",
    "footer.info": "जानकारी",
    "footer.contact": "संपर्क करें",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.rights": "© 2024 एग्रीक्राउन मशीनरी। सर्वाधिकार सुरक्षित।",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children?: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  // During SSR / prerender, context can be undefined
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string) => key,
    };
  }

  return context;
};
