import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/translation.json";
import ptBR from "../locales/pt-BR/translation.json";

const savedLanguage = localStorage.getItem("language") || "pt-BR";

i18n.use(initReactI18next).init(
  {
    resources: {
      en: { translation: en },
      "pt-BR": { translation: ptBR },
    },
    lng: savedLanguage,
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  },
  () => {
    // 🔑 callback runs AFTER init is done
    document.documentElement.lang = i18n.language;
  },
);

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
