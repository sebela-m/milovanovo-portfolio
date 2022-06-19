import i18n from "i18next";

import { initReactI18next } from 'react-i18next';
import detectBrowserLanguage from 'detect-browser-language';

import translationEng from "../locale/en.json";
import translationCze from "../locale/cs.json";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: (detectBrowserLanguage() === "cs" ? "cs" : "en"),
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translations: translationEng
      },
      cs: {
        translations: translationCze
      }
    },
    ns: ["translations"],
    defaultNS: "translations"
});

export default i18n;