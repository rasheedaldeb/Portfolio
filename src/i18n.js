import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // Load translation files via HTTP
  .use(HttpApi)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Fallback language if detection fails or translation is missing
    fallbackLng: "en",
    // Define the languages you support (only English and Arabic)
    supportedLngs: ["en", "ar"],

    // Namespaces configuration
    ns: ["common"],
    defaultNS: "common",

    // Configuration for the HTTP Backend plugin
    backend: {
      // Path to your translation files - changed from translation.json to common.json
      loadPath: "/locales/{{lng}}/common.json",
    },

    // Configuration for the Language Detector plugin
    detection: {
      // Order of language detection strategies
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      // Cache the detected language
      caches: ["cookie"],
      // Look for language in these keys
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
    },

    // React-specific options
    react: {
      // Use Suspense to handle loading state
      useSuspense: false, // Changed to false to prevent loading issues
    },

    // Good practice to enable in development
    debug: process.env.NODE_ENV === "development",

    // Interpolation options
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    // Load all languages
    load: "all",
  });

export default i18n;
