// src/i18n.js
import i18n from 'i18next';
import { startTransition } from 'react';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "hello": "Hello",
      "welcome": "Welcome to our application"
    }
  },
  fr: {
    translation: {
      "hello": "Bonjour",
      "welcome": "Bienvenue dans notre application"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;

