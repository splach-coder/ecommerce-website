// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./languages/en.json";
import frTranslation from "./languages/fr.json";

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
