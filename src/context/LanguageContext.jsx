// context/LanguageContext.jsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

// Export supported languages (only English and Arabic)
export const SUPPORTED_LANGUAGES = ["en", "ar"];

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");
  const [direction, setDirection] = useState(i18n.dir());

  // Effect to handle language changes globally and update direction
  useEffect(() => {
    // Check if i18n is initialized
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      const handleInitialized = () => {
        setIsLoaded(true);
        setCurrentLanguage(i18n.language);
        setDirection(i18n.dir());
      };
      i18n.on("initialized", handleInitialized);
      return () => i18n.off("initialized", handleInitialized);
    }
  }, [i18n]);

  // Handle language change events
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
      setDirection(i18n.dir(lng));
      document.body.dir = i18n.dir(lng);
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Set initial direction on mount
    if (isLoaded) {
      document.body.dir = i18n.dir();
      document.documentElement.lang = i18n.language;
    }

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, isLoaded]);

  // Function to change the language
  const changeLanguage = useCallback(
    (lng) => {
      if (SUPPORTED_LANGUAGES.includes(lng)) {
        i18n.changeLanguage(lng);
      } else {
        console.warn(`Attempted to change to unsupported language: ${lng}`);
      }
    },
    [i18n],
  );

  // Construct the context value object
  const contextValue = useMemo(
    () => ({
      t,
      currentLanguage,
      direction,
      changeLanguage,
      isRTL: direction === "rtl",
      supportedLanguages: SUPPORTED_LANGUAGES,
      isLoaded,
    }),
    [t, currentLanguage, direction, changeLanguage, isLoaded],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
